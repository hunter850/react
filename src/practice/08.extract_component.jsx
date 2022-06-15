import Avatar from "./components/08.avatar"
import Name from "./components/08.name"
import Comment from "./components/08.comment"
import "./css/08.extract_component.css"

const ExtractCP = () => {

    const formatDate = (date) => {
        return date.toLocaleDateString();
    }

    const author = {
        avatarUrl: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        name: "stranger"
    }

    const text = "即使是這樣，個人資料的出現仍然代表了一定的意義。";

    const el = (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar author={author} />
            </div>
            <Name name={author.name} />
            <Comment comment={text} />
            <div className="CommentDate">
                {formatDate(new Date())}
            </div>
        </div>
    )
    return el;
}

export default ExtractCP