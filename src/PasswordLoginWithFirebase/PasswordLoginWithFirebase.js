import React from "react"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import RegisterAndLogin from "./RegisterAndLogin"
import Home from "./Home"

function PasswordLoginWithFirebase(){
    return(
        <BrowserRouter>
            <div>
                   <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<Home/>} />
                  
                   </Routes>
            </div>
        </BrowserRouter>

        
    )
}
export default PasswordLoginWithFirebase