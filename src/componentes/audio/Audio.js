import { AiOutlineCaretRight, AiOutlinePause, AiOutlineStop   } from "react-icons/ai";
import {useRef,useState} from 'react';
import './Audio.css';

function Audio(props) {
const {musica} = props;
const audioRef = useRef();
const [isPlaying, setPlaying] = useState(false);

const audio = audioRef.current;
const player = ()=>{
  if(!isPlaying){
    setPlaying(true)
    audio.play()
  }
}

const pausa =()=>{
  if(isPlaying){
  setPlaying(false)
    audio.pause()
  }
}

  const stopSound = () => {
     setPlaying(false)
    audio.pause()
    audio.currentTime = 0;
  }
 
  return (
    <div className="audio">

      <audio ref={audioRef} src={musica} />
      <button className="boton-play" onClick={player}>< AiOutlineCaretRight /></button>
      <button className="boton-pausa m-3" onClick={pausa}><AiOutlinePause /></button>
      <button className="boton-stop"  onClick={stopSound}><AiOutlineStop /></button>
    </div>
  );
}
 
export default Audio;
