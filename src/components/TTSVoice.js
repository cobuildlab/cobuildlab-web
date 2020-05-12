import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'bloomer';
import playCircleIcon from '../resources/icons/play-circle-solid.svg';
import stopCircleIcon from '../resources/icons/stop-circle-solid.svg';

const TTSVoice = (props) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const stripped = props.text.replace(/<(?:.|\n)*?>/gm, '');
  const speech = (text) => {
    console.log('TTSVoice:SPEECH:', text);
    try {
      const speechSynthesis = window.speechSynthesis;
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      // Set utterance properties
      utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
        return voice.lang === 'en';
      })[0];
      utterance.pitch = 1;
      utterance.rate = 0.8;
      utterance.volume = 0.8;
      console.log('TTSVoice:SPEECH:', speechSynthesis, utterance);
      speechSynthesis.speak(utterance);
    } catch (e) {
      console.log('SPEECH', e);
    }
  };
  const cancel = () => {
    console.log('TTSVoice:PAUSE:', speechSynthesis);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  };

  return (
    <div style={{ marginBottom: 10 }}>
      {/* <Title isSize={2}>Text to Speech:</Title> */}
      {isPlaying ? (
        <Button
          isColor={'primary'}
          onClick={() => {
            cancel(stripped);
            setIsPlaying(false);
          }}>
          <img
            style={{ maxWidth: 35, height: '100%', color: 'white' }}
            src={stopCircleIcon}
            alt=""
          />{' '}
          Cancel{' '}
        </Button>
      ) : (
        <Button
          isColor={'primary'}
          onClick={() => {
            speech(stripped);
            setIsPlaying(true);
          }}>
          <img
            style={{ maxWidth: 35, height: '100%', color: 'white' }}
            src={playCircleIcon}
            alt=""
          />{' '}
          Text to Speech{' '}
        </Button>
      )}
    </div>
  );
};

TTSVoice.defaultProps = {
  text: '',
};

TTSVoice.propTypes = {
  text: PropTypes.string,
};

export default TTSVoice;
