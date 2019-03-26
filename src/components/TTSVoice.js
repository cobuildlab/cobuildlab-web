import React from 'react'
import {
  Button,
  Title
} from 'bloomer';


class TTSVoice extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const stripped = this.props.text.replace(/<(?:.|\n)*?>/gm, '');

    const speech = (text) => {
      try {
        const speech = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = speech.getVoices().filter(function (voice) {
          return voice.lang === 'en';
        })[0];
        // Set utterance properties
        utterance.voice = voice;
        utterance.pitch = 1;
        utterance.rate = 0.8;
        utterance.volume = 0.8;
        speech.speak(utterance);
      } catch (e) {
        console.log("SPEECH", e);
      }
    };

    return (
      <React.Fragment>
        <Title isSize={2}>Text to Speach:</Title>
        <Button isColor={"primary"} onClick={() => {
          speech(stripped);
        }}>Play</Button>
      </React.Fragment >
    );
  }

}

export default TTSVoice
