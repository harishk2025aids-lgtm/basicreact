import './App.css'
import Productcard from './productcard'

function App() {
return (
    <>
    <h1>hi harish</h1>
    <Productcard name="harish" age={25} img="https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg?s=612x612&w=0&k=20&c=u6STGsSpJAyBN8kDeqnVUla4-0SnLpdaTsehFsey2p0=" stockstatus="In Stock" />
    <Productcard name="john" age={30} img="https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg?s=612x612&w=0&k=20&c=u6STGsSpJAyBN8kDeqnVUla4-0SnLpdaTsehFsey2p0=" stockstatus="Out of Stock" />
    </>
  )
}

export default App
