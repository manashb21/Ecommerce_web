import React from "react";

// export function takes object - for dynamic contect
export default function Title({text})
{
    return( 
        <h1>{!text ? "Login" : text}</h1>
    )
}

