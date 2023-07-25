import React, { useState } from "react";
import style from "./main.module.css";
import ReactPlayer from "react-player/youtube";
function Main() {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
 
  var regex =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

  function handleChange(e) {
    setUrl(e.target.value);
  }
  function handleSubmit(e) {
     e.preventDefault();
    setText(url);
    setUrl("");
    
    
  
  }
  return (
    <div className={style.container}>
      <h2>You Tube transcripter</h2>
      <div className={style.content}>
        <div className={style.video}>
          
        <ReactPlayer
            url={text}
            width="290px"
            height="350px"
            controls={true}
          />
        </div>
       
        <div className={style.text}>
          {regex.test(text)
            ? "The sun dipped below the horizon, casting a warm glow across the tranquil lake. The gentle ripples on the water's surface danced in harmony with the soft breeze that rustled through the surrounding trees. As evening descended, the chorus of crickets began to serenade the night, their rhythmic chirping filling the air with a soothing melody. The moon emerged from behind a curtain of clouds, painting the landscape in silvery hues. Stars twinkled like distant diamonds, and the night sky became a canvas of wonder. In the distance, a lone owl hooted, adding a touch of mystique to the serene ambiance. The world seemed to slow down, and a sense of calm enveloped everything in its embrace, creating a moment of pure tranquility."
            : " "}
        </div>
      </div>
     
      <div className={style.input}>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="Enter a youtube URL"
          ></input>
        </div>

        <div>
          <button type="submit" >
            Submit
          </button>
         
         
        </div>
        </form>
      </div>
    </div>
  );
}
export default Main;
