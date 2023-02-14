import React from "react";
import Title from '../components/Title'

export default function Login(){

    const customStyle = {
        fontsize: '20px',
        background: 'black',
        color: 'white',
        margin: '2rem',
        padding: '4rem'
    }

    return (
        <div>
            <h1>Login Page</h1>
            <hr />
            <div style={customStyle}>
                <label 
                    style={{fontSize: '20px'}}
                >
                Username:
                </label>

                <input
                    type="text" 
                    placeholder="Enter Username" 
                    style={{color: 'blue', fontSize: '20px'}} 
                />
            </div>
        </div>
    )
}
