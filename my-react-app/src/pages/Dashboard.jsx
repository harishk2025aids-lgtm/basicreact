import { Sidebar } from 'lucide-react'
import Navbar from '../component/Navbar'
import TaskCard from '../component/TaskCard'
function Dashboard(){
    return(
        <>
            <Navbar />
            <Sidebar />
            <TaskCard/>
        </>
    )
}
export default Dashboard