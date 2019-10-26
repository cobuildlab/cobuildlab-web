import React from 'react'
import { Button, Title } from 'bloomer'

let speechSynthesis = null
const speech = (text) => {
  try {
    speechSynthesis = window.speechSynthesis
    const utterance = new SpeechSynthesisUtterance(text)
    // Set utterance properties
    utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
      return voice.lang === 'en'
    })[0]
    utterance.pitch = 1
    utterance.rate = 0.8
    utterance.volume = 0.8
    speechSynthesis.speak(utterance)
  } catch (e) {
    console.log('SPEECH', e)
  }
}
const pause = () => {
  if (speechSynthesis)
    speechSynthesis.pause()
}

const TTSVoice = (props) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const stripped = props.text.replace(/<(?:.|\n)*?>/gm, '')
  return (
    <React.Fragment>
      <Title isSize={2}>Text to Speech:</Title>
      {isPlaying ?
        <Button isColor={'primary'} onClick={() => {
          pause(stripped)
          setIsPlaying(false)
        }}>Pause</Button>
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
