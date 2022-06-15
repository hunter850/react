const InlineIf = () => {

    const messages = ['React', 'Re: React', 'Re:Re: React'];

    const Mailbox = ({ unreadMessage }) => {
        //因為用&& 所以前面為false 就會回傳false 所以不會render{ }裡的東西 反之 前面為true 後面因為是html必為true就會回傳後面的html
        const el = (
            <div>
                <h1>Hello !</h1>
                {unreadMessage.length > 0 &&
                    <h2>
                        You have {unreadMessage.length} unread messages.
                    </h2>
                }
            </div>
        )
        return el;
    }
    return <Mailbox unreadMessage={messages} />;
}

export default InlineIf