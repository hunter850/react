import { Fragment, useMemo } from "react";
import styles from "./css/62.tryCssModule.module.scss";
import bs_styles from "./css/bs_flex.module.scss";

function TryCssModule() {
    const { text, black_wrap, bg_dark, text_pink, text_60 } = styles;
    const {
        container,
        row,
        col_3,
        col_lg_3,
        col_md_4,
        col_sm_6,
        col_12,
        w_100,
        px_200,
    } = bs_styles;
    function c(...ar) {
        return ar.join(" ");
    }
    const rwd = useMemo(() => {
        return c(col_3, col_lg_3, col_md_4, col_sm_6, col_12);
    }, []);
    const boxStyle = useMemo(() => {
        return { backgroundColor: "red", fontSize: "24px" };
    }, []);
    return (
        <Fragment>
            <div className={black_wrap}>
                <p className={text}>This is paragraph</p>
            </div>
            <p className={c(text_pink, text_60, bg_dark, "d-flex")}>
                Hello css module
            </p>
            <div className={c(container, px_200)}>
                <div className={row}>
                    <div className={rwd}>
                        <div className={w_100} style={boxStyle}>
                            this is box
                        </div>
                    </div>
                    <div className={rwd}>
                        <div className={w_100} style={boxStyle}>
                            this is box
                        </div>
                    </div>
                    <div className={rwd}>
                        <div className={w_100} style={boxStyle}>
                            this is box
                        </div>
                    </div>
                    <div className={rwd}>
                        <div className={w_100} style={boxStyle}>
                            this is box
                        </div>
                    </div>
                </div>
            </div>
            <pre className={w_100}>{JSON.stringify(styles, null, 4)}</pre>
        </Fragment>
    );
}

export default TryCssModule;
