import React from "react";
import axios from "axios";

import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  subscribe,
  description,
  groupId,
  buttonText
}) => {
  const handleClick=(event)=>{
    const data = new FormData();
    data.append("group_id",groupId);
    const value = event.target.getAttribute("subscribe");
    if(value==="Subscribe"){
      axios.post('/api/group/subcribe',data, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*"
        }
      })
        .then(response => {
           event.target.setAttribute("subscribe","Subscribed");
            document.getElementById(`sub-btn${groupId}`).innerText="Subscribed";
        })
        .catch(error => {
            console.log(error);
        });
    }else{
      axios.post('/api/group/unsubcribe',data, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*"
        }
      })
        .then(response => {
          event.target.setAttribute("subscribe","Subscribe");
          document.getElementById(`sub-btn${groupId}`).innerText="Subscribe";
        })
        .catch(error => {
            console.log(error);
        });
    }
  }
  return (
    <div className="card-container col-sm-3 post-card card" style={{backgroundColor: "#222"}}>
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      
      {title && <p className="card-description">{title}</p>}
      {buttonText  && (
        <button subscribe={subscribe} className="card-btn" id={`sub-btn${groupId}`} onClick={handleClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};