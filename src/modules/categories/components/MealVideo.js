import React,{Fragment} from 'react';

const MealVideo = (props)=>{
    const baseUrl = "https://www.youtube.com/embed/";
    const videoCode =  props.item.strYoutube.split("=")[1];
    const fullUrl = `${baseUrl}${videoCode}`;
    return <Fragment>
            <div className="banner">
                Video
            </div>
            <iframe width="560" title={props.item.strMeal} height="315" src={fullUrl} frameBorder="0" allowFullScreen={true}></iframe>
           </Fragment>;
};

export default MealVideo;