const EventHandling = () => {
    //react需要使用event.preventDefault()來防止預設行為 無法使用return false;的方法
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }

    const el = (
        <form onSubmit={submitHandler}>
            <button type="submit">Submit</button>
        </form>
    )

    return el;
}

export default EventHandling