const UniqueKey = () => {

    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'},
        {id: 4, title: 'Installation', content: 'You can also install React from yarn.'},
        {id: 5, title: 'Install Nodejs', content: 'You can install Nodejs from npm.'}
    ];
    //同個array用在不同component key可以都綁id 只要用map filter產生出新array的都能重複用物件裡的id
    const SideBar = ( { posts } ) => {
        const el = (
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        )
        return el;
    }

    const Content = ( { posts } ) => {
        const el = (
            <ul>
                {posts.map(post =>
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )}
            </ul>
        )
        return el;
    }

    const el = (
        <div>
            <SideBar posts={posts} />
            <hr />
            <Content posts={posts} />
        </div>
    )
    return el;
}

export default UniqueKey