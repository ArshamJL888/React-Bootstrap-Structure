import Header from "./layouts/header.jsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Bread from "./layouts/Bread.jsx";
function App() {

    let location = useLocation();
    let navigate = useNavigate();
    
    useEffect(() => {
        if (location.pathname !== "/")
            navigate("/")
    }, [])

    return <div className="container-fluid">
        <Header active="1"/>

        <div className="container">
            <Bread />
            <Outlet/>
        </div>
    </div>
}

export default App; 