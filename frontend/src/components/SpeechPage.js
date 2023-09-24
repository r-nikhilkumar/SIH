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
  const Submit = () => {
    setText(transcript)
    console.log({transcript})
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