import React, { useState } from 'react';
import SpeechRecognition, {  useSpeechRecognition,} from 'react-speech-recognition';
import speak from 'speak-tts';
import doc from '../images/doc1.png';

function TexttoSpeech() {
  const [text, setText] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();
  const speech = new speak({
    volume: 1,
    lang: 'en-IN',
    rate: 1,
    pitch: 1,
    voice: 'Google English India',
    splitSentences: true,
  });

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

  const handleStartListening = () => {
    SpeechRecognition.startListening();
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
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
          <button onClick={handleStartListening}>Start Listening</button>
          <button onClick={handleStopListening}>Stop Listening</button>
          <p>Transcript: {transcript}</p>
          <button onClick={resetTranscript}>Clear Transcript</button>
        </div>
        </div>
    </div>
  );
}

export default TexttoSpeech;
