import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { videosContext } from '../../contexts/videosContext';

const Edit = () => {
    const params = useParams()
    const navigate = useNavigate()
    const {getOneVideo, oneVideo, updateVideo} = useContext(videosContext)
    const [edit, setEdit] = useState(null)
    console.log(edit);

    useEffect(()=>{
        getOneVideo(params.id)
    },[])

    useEffect(()=>{
        setEdit(oneVideo)
    },[oneVideo])

    function handleValues(e){
        let edited = {
            ...edit,
            [e.target.name]: e.target.value
        }
        setEdit(edited)
    }

    function save(){
        updateVideo(params.id, edit)
        navigate('/')
    }

    return edit ? (
        <div>
            <input onChange={handleValues} name='title' type="text" value={edit.title}/>
            <input onChange={handleValues} name='imageTitle' type="text" value={edit.imageTitle}/>
            <input onChange={handleValues} name='genre' type="text" value={edit.genre} />
            <input onChange={handleValues} name='description' type="text" value={edit.description}/>
            <button onClick={save}>Save</button>
        </div>
    ): <h1>loading...</h1>;
};

export default Edit;