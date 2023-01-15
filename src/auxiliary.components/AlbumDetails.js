import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BasicServices} from "../services";

const AlbumDetails = () => {

    let params = useParams();
    let {id} = params;

    let [item, setItem] = useState([]);

    useEffect(() => {
        BasicServices.getAlbumById(id).then(({data}) => setItem(data));
    }, [id]);

    return (
        <div>
            {
                JSON.stringify(item)
            }
        </div>
    );
};

export {AlbumDetails};