import { useState } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import { useTheme } from 'next-themes'
import 'react-jinke-music-player/assets/index.css'

const audioLists = [
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
]

export default function MusicBar() {
  const [localAudioList, setLocalAudioList] = useState(audioLists)
  const { theme, resolvedTheme } = useTheme()
  const options = {
    audioLists: localAudioList,
    toggleMode: false,
    showDestroy: false,
    showReload: false,
    showDownload: false,
    showLyric: false,
    drag: false,
    showThemeSwitch: false,
    quietUpdate: true,
    clearPriorAudioLists: true,
    showMediaSession: true,
    responsive: false,
    mode: 'full',
    theme: theme,
    autoPlay: false,
    spaceBar: true,
    sortableOptions: {
      disabled: true,
    },
  }

  return (
    <div>
      <ReactJkMusicPlayer {...options} />
    </div>
  )
}
