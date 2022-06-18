import Bord from "./components/26.bord"
import SecondBord from "./components/26.second_bord"

const PropChildren = () => {
    const el = (
        <div>
            <Bord color="blue">
                <h1>Welcome</h1>
                <p>Thank you for visiting our spacecraft !</p>
            </Bord>
            <SecondBord
                left={
                    <h1>Hello World</h1>
                }
                right={
                    <h1>Hello React</h1>
                }
            />
        </div>
    )

    return el;
}

export default PropChildren