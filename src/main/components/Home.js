import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const like = (event) => {
        event.preventDefault();
        const data = new FormData();
        const post_id = event.target.getAttribute("post_id");
        data.append("post_id", post_id);
        const element = document.getElementById(`${post_id}-like`);
        const elCount = document.getElementById(`${post_id}-like-count`);
        if (element.style.color == 'gray') {
            element.style.color = 'dodgerblue'
            elCount.innerText = parseInt(elCount.innerText) + 1;
        } else {
            element.style.color = 'gray'
            elCount.innerText = parseInt(elCount.innerText) - 1;
        }
        axios.post('/api/like', data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="flex-column d-flex align-items-center px-2" style={{ height: "calc(100% - 60px)", overflowY: "scroll" }}>
                <a href="/post" className="btn btn-info" style={{  position: "absolute",width:"50px",height:"50px",borderRadius:"50%",paddingTop:"10px", bottom: "50px", right: "20px" }}><i class='fas fa-pen'></i></a>
                {posts && posts.map(post => (
                    <a href={`/post/${post.id}`} style={{textDecoration:"none",backgroundColor: "#252525", maxWidth:"600px"}} className="post-card border-0 p-3 m-3 container card">
                        <div className="d-flex gap-3">
                            <div className=" post-profile-icon"><img alt="profile" className="border rounded-circle img-profile" style={{ height: "50px", width: "50px" }} src={`https://storage.googleapis.com/money-flow-410110/profiles/${post.author}.png`} /></div>
                            <div className="post-title-header"><a className="author" href={`/profile/${post.author}`}>{post.author_name}</a>
                                <p className="title-description">{post.verification_status}</p>
                            </div>
                        </div>
                        <div className="col">
                            <p className="desc">{post.description}<br /><br /></p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 post-bottom-items btn" style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id} id={`${post.id}-comment`} style={{ color: "gray" }} i className="far fa-comments"></i><span>{post.comments}</span></div>
                                <div className="col-sm-6 btn" post_id={post.id} onClick={like} style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id} id={`${post.id}-like`} style={post.is_liked == 1 ? { color: "dodgerblue" } : { color: "gray" }} className="far fa-thumbs-up"></i><span id={`${post.id}-like-count`} post_id={post.id}>{post.likes}</span></div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </>
    )
}