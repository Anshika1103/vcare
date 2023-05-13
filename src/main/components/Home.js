import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState(
        [
             {
                id: 6,
                title: 'Test by sandeep ',
                description: 'He heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. It wasnt a gunshot, it wasnt a gunshot, he repeated under his breathlessness as he continued to sprint.',
                author: 'fw4LTCJoGKYJ82q6IqJwI5rxX9w2',
                publish_date: '2023 - 04 - 16T08: 31: 21.000Z',
                source: null,
                category: null,
                likes: 2,
                comments: 0,
                author_id: 'fw4LTCJoGKYJ82q6IqJwI5rxX9w2',
                author_name: 'Sandeep Kushwaha',
                author_profile: 'profiles/fw4LTCJoGKYJ82q6IqJwI5rxX9w2.png',
                is_liked: 1
            },
             {
                id: 7,
                title: 'Post by nilesh',
                description: 'He heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. It wasnt a gunshot, it wasnt a gunshot, he repeated under his breathlessness as he continued to sprint.',
                author: 'T8simCjir2MPd7CC50224vpaBfk1',
                publish_date: '2023 - 04 - 17T02: 13: 58.000Z',
                source: null,
                category: null,
                likes: 2,
                comments: 0,
                author_id: 'T8simCjir2MPd7CC50224vpaBfk1',
                author_name: 'Nilesh Gupta',
                author_profile: 'profiles/fw4LTCJoGKYJ82q6IqJwI5rxX9w2.png',
                is_liked: 1
            },
             {
                id: 8,
                title: 'Another post after some days',
                description: 'He heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. It wasnt a gunshot, it wasnt a gunshot, he repeated under his breathlessness as he continued to sprint.',
                author: 'fw4LTCJoGKYJ82q6IqJwI5rxX9w2',
                publish_date: "2023 - 04 - 20T09: 27: 22.000Z",
                source: null,
                category: null,
                likes: 2,
                comments: 0,
                author_id: 'fw4LTCJoGKYJ82q6IqJwI5rxX9w2',
                author_name: 'Sandeep Kushwaha',
                author_profile: 'profiles/fw4LTCJoGKYJ82q6IqJwI5rxX9w2.png',
                is_liked: 1
            }
        ]
    );

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
            <div className="flex-column d-flex align-items-center" style={{ height: "calc(100% - 100px)", overflowY: "scroll" }}>
                <a href="/post" className="btn btn-info rounded-circle" style={{ position: "absolute", bottom: "50px", right: "10px" }}>New Post</a>
                {posts && posts.map(post => (
                    <div style={{backgroundColor: "#222", maxWidth:"600px"}} className="post-card border-0 p-3 m-3 container card">
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
                    </div>
                ))}
            </div>

        </>
    )
}