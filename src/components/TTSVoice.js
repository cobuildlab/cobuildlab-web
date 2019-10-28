import React from 'react'
import { Button, Title } from 'bloomer'

const TTSVoice = (props) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const stripped = props.text.replace(/<(?:.|\n)*?>/gm, '')
  const speech = (text) => {
    console.log('TTSVoice:SPEECH:', text)
    try {
      const speechSynthesis = window.speechSynthesis
      speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      // Set utterance properties
      utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
        return voice.lang === 'en'
      })[0]
      utterance.pitch = 1
      utterance.rate = 0.8
      utterance.volume = 0.8
      console.log('TTSVoice:SPEECH:', speechSynthesis, utterance)
      speechSynthesis.speak(utterance)
    } catch (e) {
      console.log('SPEECH', e)
    }
  }
  const cancel = () => {
    console.log('TTSVoice:PAUSE:', speechSynthesis)
    if (window.speechSynthesis)
      window.speechSynthesis.cancel()
  }

  return (
    <React.Fragment>
      <Title isSize={2}>Text to Speech:</Title>
      {isPlaying ?
        <Button isColor={'primary'} onClick={() => {
          cancel(stripped)
          setIsPlaying(false)
        }}>Cancel</Button>
        :
        <Button isColor={'primary'} onClick={() => {
          speech(stripped)
          setIsPlaying(true)
        }}>Play</Button>
      }

    </React.Fragment>
  )
}

export default TTSVoice
