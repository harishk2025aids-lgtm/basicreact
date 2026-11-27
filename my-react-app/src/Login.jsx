import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  function handleLogin() {
   navigate("/attendance");
  }
  function handleLogout() {
    navigate("/marks");
  }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button><br></br>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
