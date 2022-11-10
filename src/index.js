import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img from './swans.jpg';
import video from './im sick.mp4';
import { render } from '@testing-library/react';



function Title(){
  return (
    <h1>
      My Tournament Results in 2022
    </h1>
);
}



function GroupPhoto(){
  return(
    <img src={img} alt="Smash at Swansea" width="500" height="200"></img>
  )
}




function Background(){
  return(
    <div className='Pokemon'></div>
  )
}




function SubTitle(){
  return (
    
    <i id='activity'>
      (I Suck at This Game)
    </i>
);
}




function LinkButton() {
  return (
    <a href="https://smashdata.gg/smash/ultimate/player/Has?id=1157078" target="_blank">
      <button> Seriously it gets so much worse </button>
    </a>
  );
}




function ActivityAPI(){

  const [acts, setActs] = useState("")

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity/")
      .then(res => res.json())
      .then(act => {
      setActs(act.activity);})
  },[]
  )

  return(
    <div id ="activity">You should {acts} instead of reading this</div>
  )
}


function Table(){

  return(
    <table className = "table">
                <tr>
                    <th>Date</th>
                    <th>Tournament</th>
                    <th>Placing</th>
                    <th>Event Size</th>
                </tr>
                <tr>
                    <th> 09/17/22</th>
                    <th>Backstage! #4 Ultimate Singles</th>
                    <th id="placement">25</th>
                    <th>31</th>
                </tr>
                <tr>
                    <th>09/17/22</th>
                    <th>Backstage! #4</th>
                    <th id="placement">4</th>
                    <th>7</th>
                </tr>
                <tr>
                    <th>09/16/22</th>
                    <th>Rehearsal! #33 (Cardiff Weekly)</th>	
                    <th id="placement">7</th>
                    <th>9</th>
                </tr>
                <tr>
                    <th>08/31/22</th>
                    <th>LFG #35 (Bristol Weekly)</th>	
                    <th id="placement">9</th>
                    <th>16</th>
                </tr>
                <tr>
                    <th>08/23/22</th>
                    <th>Good Game Cafe Weekly 23/08/2022</th>	
                    <th id="placement">5</th>
                    <th>15</th>
                </tr>
                <tr>
                    <th>08/13/22</th>
                    <th>Showtime! #6</th>	
                    <th id="placement">19</th>
                    <th>26</th>
                </tr>
                <tr>
                    <th>08/05/22</th>
                    <th>Rehearsal! #30 (Cardiff Weekly)</th>	
                    <th id="placement">9</th>
                    <th>15</th>
                </tr>
                <tr>
                    <th> 07/23/22</th>
                    <th>Regen 2022</th>	
                    <th id="placement">257</th>
                    <th>360</th>
                </tr>
                <tr>
                    <th>07/01/22</th>
                    <th>Rehearsal! #27 (Cardiff Weekly)</th>	
                    <th id="placement">17</th>
                    <th>19</th>
                </tr>
                <tr>
                    <th>05/20/22</th>
                    <th>Rehearsal! #23 (Cardiff Weekly)</th>	
                    <th id="placement">13</th>
                    <th>16</th>
                </tr>
                <tr>
                    <th>04/09/22</th>
                    <th>Showtime! #4</th>	
                    <th id="placement">33</th>
                    <th>46</th>
                </tr>
                <tr>
                    <th>04/05/22</th>
                    <th>Good Game Cafe Weekly 05/04/2022</th>	
                    <th id="placement">9</th>
                    <th>13</th>
                </tr>
                <tr>
                    <th>04/04/22</th>
                    <th>Swansea Me In Bracket at Base Kamp #6 Semester Finale!!</th>	
                    <th id="placement">13</th>
                    <th>17</th>
                </tr>
                <tr>
                    <th>03/25/22</th>
                    <th>Rehearsal! #19 (Cardiff Weekly)</th>	
                    <th id="placement">9</th>
                    <th>12</th>
                </tr>
                <tr>
                    <th>03/21/22</th>
                    <th>Swansea Me In Bracket at Base Kamp #4</th>	
                    <th id="placement">5 </th>
                    <th>6</th>
                </tr>
                <tr>
                    <th>03/14/22</th>
                    <th>Swansea Me In Bracket at Base Kamp #3</th>	
                    <th id="placement">9</th>
                    <th>11</th>
                </tr>
                <tr>
                    <th>03/12/22</th>
                    <th>Backstage! #1</th>	
                    <th id="placement">25</th>
                    <th>37</th>
                </tr>
                <tr>
                    <th>03/07/22</th>
                    <th>Swansea Me In Bracket at Base Kamp #2</th>	
                    <th id="placement">9</th>
                    <th>14</th>
                </tr>
                <tr>
                    <th>02/28/22</th>
                    <th>Swansea Me In Bracket at Base Kamp #1</th>	
                    <th id="placement">7</th>
                    <th>11</th>
                </tr>
                <tr>
                    <th>02/05/22</th>
                    <th>Showtime! #3</th>	
                    <th id="placement">33</th>
                    <th>48</th>
                </tr>
                <tr>
                    <th>02/04/22</th>
                    <th>Rehearsal! #13 (Cardiff Weekly)	</th>
                    <th id="placement">13</th>
                    <th>15</th>
                </tr>
            </table>
  )
}

  

function SoundButton(){            
  return(
    <button onClick={toggleMute}>Unmute</button>
  )
}

function toggleMute() {
  var video =document.getElementById("video");
  if(video.muted){
    video.muted = false;
    }   else {
    video.muted = true;
    }  
}

function Video(){
  return(
    <video id="video" width="720" height="480" src={video} autoPlay muted type="video/mp4"></video>
  )
}

  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<div><Title /><GroupPhoto /><Background /><br></br><SubTitle /><br></br><LinkButton /><hr></hr><ActivityAPI /><Table /><SoundButton /><br></br><Video /></div>);

  