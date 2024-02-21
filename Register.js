import "./App.css";
import  {useState} from 'react';
import  {useEffect} from 'react';

 
function Register() {
    return (
        <>
            <p className="title">Registration </p>
 
            <form className="App" >
            <label fro="username">Username</label>
                <input type="username" />
                <label fro="email">Email</label>
                <input type="email" />
                <label fro="password">Password</label>
                <input type="password" />
                <input type={"submit"}
                    style={{ backgroundColor: "#a1eafb" }} 
                    onClick ={() => POST}
                    />
            </form>
        </>
    );
}


export default Register;