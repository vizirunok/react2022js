import {ApiService} from "../services";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const PostDetails = () => {

    let [post, setPosts] = useState({});

    let apiService = new ApiService('posts');

    let params = useParams();
    let {id} = params;


    useEffect(() => {
        apiService.getElByID(id).then(value => setPosts(value));
    }, [id])

    return (
        <div>
            {
                JSON.stringify(post)
            }
        </div>
    )
};
export {PostDetails};