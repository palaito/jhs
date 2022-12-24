import "./Cover.css";

import Believe from '../../media/believe.mp3';

import Audio from '../audio/Audio';

function Cover (){

  return (
    <div className='cover-container'>
         
         <img src={'https://images.pexels.com/photos/12044263/pexels-photo-12044263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='video'/>
         <h1>Jesús Hombre Salvador</h1>
         <p>Dios | Jesús | Nazareno | Salvador | Redentor | Señor</p>
         <div>
         <Audio musica={Believe}/>
         </div>

    </div>
  )
}

export default Cover