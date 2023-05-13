import React from "react";

export default function Spinner(){
    return (
        <div style={{height:"100vh",position:"absolute",display:"grid",justifyItems:"center",gridTemplateColumns:"auto"}}>
          <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
        </div>
    )
}