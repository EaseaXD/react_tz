import reactDom from "react-dom";
import React, { useState } from "react";
import Profile from "../Profile/Profile";
import { Route ,Navigate } from "react-router-dom";





const Login = (props ) =>{

    const [username, setUserName] = useState(" ");
    const [password, setUserPassword] = useState(" ");

    let handeChange = () =>{
        setUserName(UsernameRef.current.value)
        setUserPassword (PasswordRef.current.value)
        
    }

    const [user, setUser] = useState(false);


    let sendLogin = (event) =>{
        
        event.preventDefault();
        let username = UsernameRef.current.value;
        let password = PasswordRef.current.value;
        if(username === "Admin" && password === "12345"){
            localStorage.setItem("login", true);
            setUser(true);
            
        }
        else{
            alert("Имя пользователи или пароль введены не верно");
            
        }
    
    }
    
    let UsernameRef = React.createRef()
        let PasswordRef = React.createRef()
    
    if (user === true){
        return(
         <Navigate to='/profile'/>
        )
    }else {
        return(    
    <div className="login">
        <h1 login__title>Login</h1>
        
        <form className="login__form" action="">
            <input onChange={handeChange}  ref={UsernameRef} type="text" placeholder="Username" />
            <input onChange={handeChange} ref={PasswordRef} type="password" placeholder="Password" />
            <button onClick={sendLogin} type="submit">SignIn</button>
        </form>
    </div>
        )   
    }

}




export default Login