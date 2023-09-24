import React, { useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import doc from '../images/doc1.png';

const SpeechPage = () => {
  const [text, setText] = useState(["tell me your symptoms"]);
  const { speak, voices } = useSpeechSynthesis();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
 

  const handleSpeak = () => {
    speak({ text });
  };
  const Submit1 = () => {
    setText(transcript)
    console.log({transcript})

  }
  const Submit = async  () =>{
    console.log({transcript})
    try {
      const response = await fetch('http://127.0.0.1:5000/api/data'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let result = await response.json();
      setText(result["message"]);
      console.log(result["message"])
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
      <img src={doc} alt='doctor' style={{width:'100px',height:'auto'}}></img>
      <div style={{display:'flex',flexDirection:'row',borderStyle:'solid',borderColor:'black',borderWidth:'1px',justifyContent:'space-around',width:'50vw',height:'auto',alignItems:'center'}}>
        <div style={{margin:'10px',display:'flex',flexDirection:'column',alignItems:'center',width:'300px'}}>
          <div style={{display:'block'}}>
          <h3 style={{textAlign:'center',color:'blue',fontSize:'50px',display:"block"}}>Tell me Your </h3>
          <p style={{textAlign:'center',color:'blue',fontSize:'50px'}}>Symptoms</p>
          </div>
        <button style={{borderRadius:'50%',aspectRatio:"1/1",width:"100px",backgroundColor:'red'}} onClick={handleSpeak}>Start</button>
        <button onClick={handleSpeak}>Get advise</button>
      </div>
      <div style={{margin:'10px',display:'flex',flexDirection:'column'}}>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={SpeechRecognition.startListening}>Speak</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Speaking</button>
        <button onClick={resetTranscript}>Reset</button>
        <button onClick={Submit}>Submit</button>
        
      </div>
      </div>
      <p style={{widht:'90px'}}>{transcript}</p>
    </div>
  );
};

export default SpeechPage;