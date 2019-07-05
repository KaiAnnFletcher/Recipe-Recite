import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Login(props) {
    return (


    <form className="login">
    <div className="form-group">
        <label htmlFor="title"></label>
        <input
            value={props.search}
            onChange={props.handleLoginUser}
            name="username"
            type="text"
            placeholder="Username"
        />
        <input
            value={props.search}
            onChange={props.handleLoginPassword}
            name="password"
            type="text"
            placeholder="password"
        />
        <button className="btn" type="submit" onClick={props.handleLoginSubmit}><i className="fa fa-user"></i></button>
    </div>
    </form>
=======
//         <form className="login">
//             <div className="form-group">
//                 <label htmlFor="title"></label>
//                 <input
//                     value={props.search}
//                     onChange={props.handleLoginUser}
//                     name="username"
//                     type="text"
//                     placeholder="Username"
//                 />
//                 <input
//                     value={props.search}
//                     onChange={props.handleLoginPassword}
//                     name="password"
//                     type="text"
//                     placeholder="password"
//                 />
//                 <button className="btn" type="submit" onClick={props.handleLoginSubmit}><i class="fa fa-user"></i></button>
//             </div>
//         </form>
// >>>>>>> master


    )
}

export default Login;

