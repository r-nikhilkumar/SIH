import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import speak from 'speak-tts';
import doc from '../images/doc1.png';

function consult() {
  const [text, setText] = useState('');
  const { transcript, resetTranscript, listening, startListening, stopListening } = useSpeechRecognition();
  const speech = new speak({
    volume: 1,
    lang: 'en-US',
    rate: 1,
    pitch: 1,
    voice: 'Google UK English Male', // Adjust voice as needed
    splitSentences: true,
  });

  const handleStartListening = () => {
    startListening();
  };

  const handleStopListening = () => {
    stopListening();
  };

  const handleSpeak = () => {
    if (text.trim() !== '') {
      speech
        .speak({
          text,
        })
        .then(() => {
          console.log('Text-to-speech success!');
        })
        .catch((e) => {
          console.error('Text-to-speech error:', e);
        });
    }
  };


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
      <img src={doc} alt='doctor' style={{width:'100px',height:'auto'}}></img>
      <div style={{display:'flex',flexDirection:'row',borderStyle:'solid',borderColor:'black',borderWidth:'1px',justifyContent:'space-between',width:'20vw',height:'auto'}}>
        <div style={{margin:'10px',display:'flex',flexDirection:'column'}}>
          <textarea
            placeholder="Enter text to convert to speech..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSpeak}>Speak</button>
        </div>
        <div style={{margin:'10px',display:'flex',flexDirection:'column'}}>
        <button onClick={handleStartListening} disabled={listening}>
        Start Listening
      </button>
      <button onClick={handleStopListening} disabled={!listening}>
        Stop Listening
      </button>
      <p>Transcript: {transcript}</p>
        </div>
        </div>
    </div>
  );
}


export default consult;
