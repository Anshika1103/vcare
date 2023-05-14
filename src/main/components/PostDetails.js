import {useState,useEffect,React} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function PostDetails(){
    const [post, setPost] = useState(null);
    const [comments,setComments] = useState(null);
    const {postId} = useParams()
    useEffect(() => {
        axios.get(`/api/comments/${postId}`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        axios.get(`/api/post/${postId}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const handleContentChange=()=>{}
    let content;
    return(
        <>
        <div className="flex-column d-flex align-items-center px-2" style={{ height: "calc(100% - 60px)", overflowY: "scroll" }}>
                <a href="/post" className="btn btn-info" style={{ position: "absolute", width: "50px", height: "50px", borderRadius: "50%", paddingTop: "10px", bottom: "50px", right: "20px" }}><i class='fas fa-pen'></i></a>
                {post && (
                    <a href={`/post/${post.id}`} style={{ textDecoration: "none", backgroundColor: "#252525", maxWidth: "80%" }} className="post-card border-0 p-3 m-3 container card">
                        <div className="d-flex gap-3">
                            <div className=" post-profile-icon"><img alt="profile" className="border rounded-circle img-profile" style={{ height: "50px", width: "50px" }} src={`https://storage.googleapis.com/notional-cab-381815/${post.author_profile}`} /></div>
                            <div className="post-title-header"><a className="author" href={`/profile/${post.author_id}`}>{post.author_name}</a>
                                <p className="title-description">At GNUT</p>
                            </div>
                        </div>
                        <div className="col">
                            <p className="detail-desc">{post.description}<br /><br /></p>
                        </div>
                        <div className="container post-meta-wrapper">
                            <div className="row">
                                <div className="col-sm-6 post-bottom-items btn" style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id} id={`${post.id}-comment`} style={{ color: "gray" }} i className="far fa-comments"></i><span>{post.comments}</span></div>
                                <div className="col-sm-6 btn" post_id={post.id} style={{ textAlign: "center", fontSize: "24px" }}><i post_id={post.id} id={`${post.id}-like`} style={post.is_liked == 1 ? { color: "dodgerblue" } : { color: "gray" }} className="far fa-thumbs-up"></i><span id={`${post.id}-like-count`} post_id={post.id}>{post.likes}</span></div>
                            </div>

                        </div>
                        <section className="comment-section mt-3">
                            <div>
                                <label className='mb-2' htmlFor="content">Post a comment:</label>
                                <textarea className='form-control mb-4'
                                    id="content"
                                    name="content"
                                    value={content}
                                    onChange={handleContentChange}
                                />
                                <button className="btn btn-primary">Post Comment</button>
                            </div>
                        </section>
                    </a>
                )}
            </div>
        </>
    )
}