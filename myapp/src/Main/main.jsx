import React from "react";
import style from './main.module.css'
import { YoutubeTranscript } from 'youtube-transcript';
function Main(){

    YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=fmIKhp_Mnb8').then(console.log)
    return(


        <div className={style.container}>
           
          
              <div className={style.text}>
               <div>  <p>Get a Transscript</p></div>
               <div className={style.input}>
              
               <div> <input placeholder ="Enter a youtube URL"></input></div>
                <div><button>Go</button></div>
                
            </div>
            </div>
            </div>
    )
}
export default Main;