import './App.css'
import LeftSideBar from './Components/LeftSideBar'
import NavBar from './Components/NavBar'
import MenuAndStat from './Components/MenuAndStat'
import TodoList from './Components/TodoList'
import LatestFiles from './Components/LatestFiles'
import Table from './Components/Table'
import RightSideBar from './Components/RightSideBar'


function App() {
    //const [count, setCount] = useState(0)
    return (
        <>
            <div className="flex-wrap flex h-screen bg-base-100">
            <div className="flex h-screen overflow-y-auto bg-gray-100">
                <LeftSideBar />
                <div className="flex flex-1 flex-col overflow-y-auto bg-gray-100">
                    <NavBar />
                    <MenuAndStat />
                    <div className="flex h-screen bg-gray-100">
                        <TodoList />
                        <LatestFiles />
                        </div>
                    <Table />
                </div>
                <RightSideBar />
                </div>
            </div>
        </>
    )
}

export default App
