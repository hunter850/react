import { useState, useCallback } from "react";
import ElementWrap from "../coffee_compenents/ElementWrap";

function useAlert() {
    const [textContent, setTextContent] = useState("");
    const [show, setShow] = useState(false);
    const [returnBool, setReturnBool] = useState(null);

    const calert = useCallback(
        (str) => {
            setTextContent(str);
            setShow(true);
        },
        [returnBool]
    );
    const confirmHandler = useCallback(() => {
        setShow(false);
        setReturnBool(true);
    }, []);
    const el = useCallback(
        (props) => {
            const [count, setCount] = useState(0);
            const {
                children,
                style,
                className,
                component = "p",
                ...others
            } = props;
            return (
                <>
                    {show && (
                        <div
                            style={{
                                position: "fixed",
                                left: "50%",
                                top: "0px",
                                transform: "translateX(-50%)",
                                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.3)",
                                borderRadius: "3px",
                                padding: "4px 20px",
                            }}
                        >
                            <button onClick={() => setCount(count + 1)}>
                                {count}
                            </button>
                            <ElementWrap
                                component={component}
                                style={style}
                                className={className}
                                {...others}
                            >
                                {textContent}
                            </ElementWrap>
                            {children}
                        </div>
                    )}
                </>
            );
        },
        [show]
    );
    const confirmButton = useCallback((props) => {
        const { children = "確認", style, className, ...others } = props;
        return (
            <button
                onClick={confirmHandler}
                style={style}
                className={className}
                {...others}
            >
                {children}
            </button>
        );
    }, []);
    return [
        calert,
        Object.assign(el, {
            Confirm: confirmButton,
        }),
    ];
}

export default useAlert;
