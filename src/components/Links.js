import React from "react";





function Links({linkedin, github}){
    return (
        // <h3> Links
        //     {<a href= {linkedin}>LinkedIn/</a>}
        //     {<a href= {github}>Github</a>}
        // </h3>
    <>
        <h3>Links</h3>
            {<a href= {linkedin}>LinkedIn/</a>}
            {<a href= {github}>Github</a>}
    </>
    );
}

export default Links;