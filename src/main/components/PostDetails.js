import {useState,useEffect,React} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function PostDetails(){
    const [post, setPost] = useState(null);
    const {postId} = useParams()
    useEffect(() => {
        axios.get(`/api/post/${postId}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return(
        <>
        <div className="container">
        <i className="h2">Under Development id: {postId}</i>
        </div>
        </>
    )
}