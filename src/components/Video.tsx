import React from 'react'
// import video from "./IMG_6026.MOV";
import "./index.css";

import { Player } from 'video-react';
const video_src = require("./MXAXE4514.MOV");
export default function Video() {
  return (
    <div className='player'>
       

       <video width="100%" height="100%" src={video_src} muted autoPlay loop>
</video>

      </div>
  )
}
