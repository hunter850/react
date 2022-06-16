import NumberList from "./components/18.number_list"

const ListRender = () => {
    const numbers = [1, 2, 3, 4];

    const el = (
        <NumberList numbers={numbers} />
    )

    return el;
}

export default ListRender