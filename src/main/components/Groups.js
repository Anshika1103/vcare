import {React,useState,useEffect} from "react";
import {Card} from './Card.js'
import axios from "axios";
export default function Groups(){
    const  [groups,setGroups] = useState();
    
    useEffect(() => {
        axios.get('/api/groups',{
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
        })
            .then(response => {
                console.log(response.data)
                setGroups(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className="flex-column d-flex align-items-center px-2" style={{ height: "calc(100% - 60px)", overflowY: "scroll" }}>

                <div className="row p-4 text-center" style={{backgroundColor: "#222"}}>
                {groups && groups.map(group => (
                     <Card 
                     title={group.name}
                     imgSrc="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     imgAlt={group.name}
                     subscribe={group.Subscribed?"Subscribed":"Subscribe"}
                     buttonText={group.Subscribed?"Subscribed":"Subscribe"}
                     groupId={group.group_id}
                     />
                ))}
                </div>
            </div>
        </>
    )
}