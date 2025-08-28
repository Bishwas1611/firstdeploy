import { useContext } from "react"
import { AuthContext } from "../components/AuthContext"
export default function Login(){
     const {auth,login,logout}=useContext(AuthContext)
     return (
          <>
          <h1>login page</h1>
          <h2>Auth:{auth?"yes":"no"}</h2>
          <button onClick={login} disabled={auth}>Login</button>
          <button onClick={logout} disabled={!auth}>Logout</button>

          </>
     )
}