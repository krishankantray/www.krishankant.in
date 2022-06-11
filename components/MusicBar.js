import { useState } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import { useTheme } from 'next-themes'
import 'react-jinke-music-player/assets/index.css'
import PlaylistCard from './PlaylistCard'
import romanticPlaylist from 'https://raw.githubusercontent.com/krishankantray/music-playlists/main/romantic/playlist.json'

const meaningfulPlaylist = {
  name: 'Meaningful',
  thumbnail: '',
  desc: 'Songs with deep meaning lyrics',
  list: [
    {
      name: 'Kali Kali Zulfo Ke',
      singer: 'Nusrat Fateh',
      cover: '/static/images/default_track.png',
      musicSrc:
        'https://raw.githubusercontent.com/krishankantray/music-playlists/main/meaningful/Kali_Kali_Zulfon_Ke.mp3',
    },
  ],
}

const lofiPlaylist = {
  name: 'Romantic',
  thumbnail: '',
  desc: '',
  list: [
    {
      name: 'Kali Kali Zulfo Ke',
      singer: 'Nusrat Fateh',
      cover: '/static/images/default_track.png',
      musicSrc:
        'https://raw.githubusercontent.com/krishankantray/music-playlists/main/meaningful/Kali_Kali_Zulfon_Ke.mp3',
    },
  ],
}

export default function MusicBar() {
  const [localAudioList, setLocalAudioList] = useState(meaningfulPlaylist)
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
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <PlaylistCard playlist={meaningfulPlaylist} />
        <PlaylistCard playlist={lofiPlaylist} />
        <PlaylistCard playlist={romanticPlaylist} />
        <PlaylistCard />
        <PlaylistCard />
      </div>
      <ReactJkMusicPlayer {...options} />
    </div>
  )
}
