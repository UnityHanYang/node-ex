import React from "react";

function Hello(color, name, isSpecial){
    return(
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕 나는"{name}"라고 해
        </div>
    ) 
}
Hello.defaultProps = {
    name:"무명씨"
}

export default Hello;