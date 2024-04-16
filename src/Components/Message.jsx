import React from "react";

const name ="Clement"
function Message () {
    if (name)
     return <h1> Hello {name} </h1>;
    return <h1> Hello Guest </h1>;
}
export default Message;