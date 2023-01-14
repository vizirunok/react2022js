import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {BasicServices} from "../services";
import {Album} from "../auxiliary.components/Album";

const Albums = () => {

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        BasicServices.getAllAlbums().then(({data}) => setAlbums(data));
    }, []);


    return (
        <div>
            <Outlet/>
            <hr/>
            {
                albums.map(value => <Album value={value} key={value.id}/>)
            }
        </div>
    );
};

export {Albums};