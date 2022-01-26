import { Navigate } from 'react-router-dom';
import Login from '../Login/Login';

const Profile = (props) =>{
    
    if(localStorage.getItem("login") === "true" ){
    return (
        <div className="profile">
            <div className="profile__content">
                <img src="https://www.bsau.ru/upload/iblock/9c0/2_9yLm2yWUoMcZlywdOcfKAw.png" alt="" />
                <h1 className="profile__name">Name</h1>
            </div>
            <p><b>Username:</b> Name</p>
            <p><b>City:</b> City</p>
            <p><b>Data:</b> 11.04.1999</p>

        </div>
    )
}
else {
    return(
        <Navigate to='/login'/>
        )
}
}

export default Profile