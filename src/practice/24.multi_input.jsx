import {v4} from "uuid"

const MultiInput = () => {
    console.log(v4());
    const el = (
        <form>
            <label htmlFor=""></label>
            <input type="checkbox" name="isGoing" id="" />
        </form>
    )
}

export default MultiInput