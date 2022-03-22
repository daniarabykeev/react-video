import React, { useContext, useEffect, useState } from 'react';
import { videosContext } from '../../contexts/videosContext';
import Card from '../Card/Card';

const VideosList = () => {
    const { getAllVideos, videos} = useContext(videosContext)
    // !реагирует при загрузке сайта
    useEffect(()=> {
        // console.log("страница загрузилась");
        getAllVideos()
    },[])
    console.log(videos);
    // const [state, setState] = useState("")
    // const [state2, setState2] = useState("")
    // console.log(getAllVideos);

    // !реагирует при каждом изменении в компоненте
    // useEffect(()=>{console.log("useEffect!!")})

    // !реагирует при изменении state
    // useEffect(()=> {console.log('state изменился');},[state])

    

    return (
        <div>
            {
                videos.map((item)=><Card key={item.id} item={item} />)
            }

            {/* <input type="text" value={state} onChange={(e)=> setState(e.target.value)}/>
            <input type="text" value={state2} onChange={(e)=> setState2(e.target.value)}/> */}
        </div>
    );
};

export default VideosList;