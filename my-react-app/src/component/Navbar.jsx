import Profile from "./Profile"

function Navbar(props) {
  return (
    <>
       <Profile username={props.username}/>
    </>
  )
}
export default Navbar