import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { videosContext } from '../../contexts/videosContext';
// import './Card.css'

const Card = ({item}) => {
    const {deleteVideo} = useContext(videosContext)
    return (
        <div className='carddd'>
            <img src={item.imageTitle}  alt="" width={"200px"}/>
            <div>{item.title}</div>
            <button onClick={()=> deleteVideo(item.id)} >Delete</button>

            <Link to={`/edit/${item.id}`}>
                <button>Edit</button>
            </Link>
            <Link to={`/details/${item.id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Card;