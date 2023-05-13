<<<<<<< HEAD
import React,{ useState, useEffect } from "react";
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

    const like=(event)=>{
        event.preventDefault();
        const data = new FormData();
        const post_id=event.target.getAttribute("post_id");
        data.append("post_id",post_id);
        const element=document.getElementById(`${post_id}-like`);
        const elCount=document.getElementById(`${post_id}-like-count`);
        if(element.style.color=='gray'){
            element.style.color='dodgerblue'
            elCount.innerText = parseInt(elCount.innerText)+1;
        }else{
            element.style.color='gray'
            elCount.innerText = parseInt(elCount.innerText)-1;
        }
        axios.post('/api/like',data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    const comment=(event)=>{
         const post_id=event.target.getAttribute("post_id");
         const element = document.getElementById(`${post_id}-comment-form`);
         if(element.style.display=="none"){
            element.style.display="block";
         }else{
            element.style.display="none";
         }
    }
    const postComment = (event)=>{

    }
    return (
        <>
            <div className="flex-column" style={{ height: "calc(100% - 100px)", overflowY: "scroll" }}>
                <a href="/post" className="btn btn-info rounded-circle" style={{position:"absolute",bottom:"50px",right:"10px"}}>New Post</a>
                { posts && posts.map(post => (
                <div className="post container">
                    <div className="row post-head">
                        <div className="col col-2 post-profile-icon"><img className="border rounded-circle img-profile" style={{height:"50px",width:"50px"}} src={`https://storage.googleapis.com/notional-cab-381815/${post.author_profile}`} /></div>
                        <div className="col post-title-header col-10"><a href={`/profile/${post.author_id}`}>{post.author_name}</a>
                            <p className="title-description">At GNUT</p>
                        </div>
                    </div>
                    <div className="col">
                        <p>{post.description}<br /><br /></p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 post-bottom-items btn"  post_id={post.id} onClick={comment} style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id}  id={`${post.id}-comment`} style={post.is_commented==1?{color:"dodgerblue"}:{color:"gray"}} className="far fa-comments"></i><span id={`${post.id}-comment-count`} post_id={post.id}>{post.comments}</span></div>
                            <div className="col-md-6 btn" post_id={post.id} onClick={like} style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id}  id={`${post.id}-like`} style={post.is_liked==1?{color:"dodgerblue"}:{color:"gray"}} className="far fa-thumbs-up"></i><span id={`${post.id}-like-count`} post_id={post.id}>{post.likes}</span></div>
                        </div>
                    </div>
                    <form id={`${post.id}-comment-form`} className="row" style={{display:"none",transition:"all .5s",borderTop:"1px solid rgba(200,200,200,.5)",paddingTop:"10px"}}>
                        <div className="col-sm-10"><input type="text" id={`${post.id}-comment-text`}  name="comment-msg"/></div><div className="col-sm-2"> <input type="submit" onSubmit={postComment} className="btn btn-primary" value="submit"/></div>
                    </form>
                </div>
                 ))}
=======
import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState(null);

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
                "Content-Type": "application/json"
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
            <div className="flex-column d-flex align-items-center" style={{ height: "calc(100% - 60px)", overflowY: "scroll" }}>
                <a href="/post" className="btn btn-info" style={{  position: "absolute",width:"50px",height:"50px",borderRadius:"50%",paddingTop:"10px", bottom: "50px", right: "20px" }}><i class='fas fa-pen'></i></a>
                {posts && posts.map(post => (
                    <a href={`/post/${post.id}`} style={{textDecoration:"none",backgroundColor: "#222", maxWidth:"600px"}} className="post-card border-0 p-3 m-3 container card">
                        <div className="d-flex gap-3">
                            <div className=" post-profile-icon"><img className="border rounded-circle img-profile" style={{ height: "50px", width: "50px" }} src={`https://storage.googleapis.com/notional-cab-381815/${post.author_profile}`} /></div>
                            <div className="post-title-header"><a className="author" href={`/profile/${post.author_id}`}>{post.author_name}</a>
                                <p className="title-description">At GNUT</p>
                            </div>
                        </div>
                        <div className="col">
                            <p className="desc">{post.description}<br /><br /></p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 post-bottom-items btn" style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id} id={`${post.id}-comment`} style={{ color: "gray" }} i className="far fa-comments"></i><span>{post.comments}</span></div>
                                <div className="col-md-6 btn" post_id={post.id} onClick={like} style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id} id={`${post.id}-like`} style={post.is_liked == 1 ? { color: "dodgerblue" } : { color: "gray" }} className="far fa-thumbs-up"></i><span id={`${post.id}-like-count`} post_id={post.id}>{post.likes}</span></div>
                            </div>
                        </div>
                    </a>
                ))}
>>>>>>> 68f2b075b1bd01f7303367818bfa125ba1e5e0c5
            </div>

        </>
    )
}