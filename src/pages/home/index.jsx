import Edit from './components/edit.jsx'
import List from './components/list.jsx'
import './index.css'

const app = {
    color: "red"
}

const Home = () => {
    return (
        <div style={app}>
            <Edit />
            <List />
        </div>
    )
}

export default Home