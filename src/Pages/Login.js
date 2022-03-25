import React from "react";
import { useParams } from "react-router-dom";
import fakeLogout from "utils/fakeLogin";
import fakeLogin from "utils/fakeLogut";

function Login() {
    let { username } = useParams();
    return ( <div><div> 
        Login 
        <button
            onClick={() =>{
                fakeLogin()
            }}
        >
            {" "}
            Login
        </button>
    </div>
        <div>
            <button
                onClick={() =>{
                    fakeLogout()
                }}
            >
                {" "}
                Logout
            </button>
        </div>
    </div>
    );
}

export default Login;