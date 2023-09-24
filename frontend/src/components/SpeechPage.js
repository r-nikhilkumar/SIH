import React, { useState , useEffect} from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import doc from '../images/doc1.png';


const SpeechPage = () => {
  const text = "tell symptoms";
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
    speak({text});
  };


  

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>

      <img src={doc} alt='doctor' style={{width:'100px',height:'auto'}}></img>
      <div style={{display:'flex',flexDirection:'row',borderStyle:'solid',borderColor:'black',borderWidth:'1px',justifyContent:'space-      between',width:'20vw',height:'auto',alignItems:'center'}}>
        <div style={{margin:'10px',display:'flex',flexDirection:'column'}}>
        <button onClick={handleSpeak}>Speak</button>
      </div>
      <div style={{margin:'10px',display:'flex',flexDirection:'column'}}>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
      </div>
    </div>
  );
};

export default SpeechPage;
