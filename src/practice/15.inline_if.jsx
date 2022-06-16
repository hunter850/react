import { v4 } from "uuid"
import "./css/15.inline_if.css"

const InlineIf = () => {

    const messages = ['React', 'Re: React', 'Re:Re: React'];

    const Mailbox = ({ unreadMessage }) => {
        //因為用&& 所以前面為false 就會回傳false 所以不會render{ }裡的東西 反之 前面為true 後面因為是html必為true就會回傳後面的html
        /*
        注意 falsy expression雖然不會render出&&後面的結果
        但不像false會被react忽略 而會印出那個falsy expression ex. 0 && HTML 會印出0
        */
        const el = (
            <div>
                <h1>Hello !</h1>
                {unreadMessage.length > 0 &&
                    <h2>
                        You have {unreadMessage.length} unread messages.
                    </h2>
                }
                {unreadMessage.map((item,index) => <a key={v4()} href="#" className="aLink">{index}. {item}</a>)}
            </div>
        )
        return el;
    }
    return <Mailbox unreadMessage={messages} />;
}

export default InlineIf