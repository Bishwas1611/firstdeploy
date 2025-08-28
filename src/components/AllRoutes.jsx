import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Login from "../pages/Login"
import User from "../pages/User"
import SingleUser from "../pages/SingleUser"
import NotFound from "../pages/NotFound"
import PrivateRoute from "./PrivateRoute"
export default function AllRoutes(){
    return(
        <>
        <div style={{textAlign:"center"}}>
            <Routes>
            <Route path="/" element={<Home/> }></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>

            <Route path="/login" element={<Login/>}></Route>
            <Route path="/user" element={<PrivateRoute>
                <User/>
                </PrivateRoute>}
                />

            <Route path="/user/:user_id" element={<SingleUser/>}> </Route>
            <Route path="*" element={<NotFound/>}></Route>

        </Routes>
        </div>
        </>
    )
}