import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { videosContext } from '../../contexts/videosContext';

const Details = () => {
    const { getOneVideo, oneVideo } = useContext(videosContext)
    const params = useParams()
    useEffect(()=> {
        getOneVideo(params.id)
    },[])
    console.log(oneVideo);
    return oneVideo ? (
        <div>
            <h3>{oneVideo.title}</h3>
            <h4>{oneVideo.genre}</h4>
            <h5>Описание</h5>
            <div>{oneVideo.description}</div>
            <img src={oneVideo.imageTitle} alt=""/>
        </div>
    ): <h1>Loading...</h1>;
};

export default Details;