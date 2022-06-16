import NumberList from "./components/18.number_list"
import ComponentLi from "./components/18.component_li"
import { v4 } from "uuid"

const ListRender = () => {
    const numbers = [1, 2, 3, 4];

    const el = (
        <div>
            <NumberList numbers={numbers} />
            <ul>
                //如果要做list render 誰被複製就要把key綁在誰身上 而不是綁在component裡的li
                {numbers.map(number => <ComponentLi number={number} key={v4()} />)}
            </ul>
        </div>
    )

    return el;
}

export default ListRender