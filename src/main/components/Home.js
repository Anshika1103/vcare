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

    const click=(event)=>{
        axios.get('/api/like')
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
    return (
        <>
            <div className="flex-column" style={{ height: "calc(100% - 100px)", overflowY: "scroll" }}>
                <a href="/post" className="btn btn-info rounded-circle" style={{position:"absolute",bottom:"50px",right:"10px"}}>New Post</a>
                { posts && posts.map(post => (
                <div className="post container">
                    <div className="row post-head">
                        <div className="col col-2 post-profile-icon"><img className="border rounded-circle img-profile" style={{height:"50px",width:"50px"}} src={`https://storage.googleapis.com/notional-cab-381815/${post.author_profile}`} /></div>
                        <div className="col post-title-header col-10"><a href="#">{post.author_name}</a>
                            <p className="title-description">At GNUT</p>
                        </div>
                    </div>
                    <div className="col">
                        <p>{post.description}<br /><br /></p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 post-bottom-items btn"  onClick={click} style={{ textAlign: "center", fontSize: "24px" }}><i className="far fa-comments"></i><span>{post.likes}</span></div>
                            <div className="col-md-6 btn" style={{ textAlign: "center", fontSize: "24px" }}><i className="far fa-thumbs-up"></i><span>{post.comments}</span></div>
                        </div>
                    </div>
                </div>
                 ))}
            </div>

        </>
    )
}