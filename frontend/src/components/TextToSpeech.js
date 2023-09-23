import React, { useState } from 'react';
import speak from 'speak-tts';

function TextToSpeech() {
  const [text, setText] = useState('');
  const speech = new speak({
    volume: 1,
    lang: 'en-US',
    rate: 1,
    pitch: 1,
    voice: 'Google UK English Male',
    splitSentences: true,
  });

  const handleSpeak = () => {
    if (text.trim() !== '') {
      speech
        .speak({
          text,
        })
        .then(() => {
          console.log('Success!');
        })
        .catch((e) => {
          console.error('An error occurred:', e);
        });
    }
  };

  return (
    <div>
      <h1>Text to Speech</h1>
      <textarea
        placeholder="Enter text to convert to speech..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
}

export default TextToSpeech;
