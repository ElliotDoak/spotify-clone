import React from 'react';
import './Login.css';
import {loginUrl} from './spotify'

function Login() {
    return (
        <div className="login">  
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

        <form> 
            <input type="text" placeholder="username"/> 
            <input type="password" placeholder="password"/>
        </form>

        <a href={loginUrl}>Login with Spotify</a> 
            {/* Spotify Logo */}
            {/* Login with spotify button */}
        </div>
    )
}

export default Login
