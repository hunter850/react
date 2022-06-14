//兩種寫法都可以
// const Hello = (props) => {
//     return (
//         <h1>Hello {props.name}</h1>
//     )
// }
const Hello = ({ name }) => {
    return (
        <h1>Hello {name}</h1>
    )
}

export default Hello