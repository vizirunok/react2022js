import {ApiService} from "../services";
import {useEffect, useState} from "react";
import {PostComponent} from "../auxiliary.components";
import {Outlet} from "react-router-dom";

const Posts = () => {

    let [posts, setPosts] = useState([]);

    let apiService = new ApiService('posts');

    useEffect(() => {
        apiService.getAll().then(value => setPosts(value))
    }, [])


    return (
        <div>
            {
               posts.map(value => <PostComponent item={value} key={value.id}/>)
            }
            <hr/>
            <Outlet/>
        </div>
    )
};
export {Posts};