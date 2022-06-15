const Avatar = ({author}) => {
    const el = (
        <img src={author.avatarUrl} alt={author.name} />
    )
    return el;
}

export default Avatar