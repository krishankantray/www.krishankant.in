import { useState, useEffect } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import { useTheme } from 'next-themes'
import 'react-jinke-music-player/assets/index.css'
import PlaylistCard from './PlaylistCard'
import { musicPlaylist } from '@/lib/musicPlaylist'

const ROMANTIC_PLAYLIST =
  'https://raw.githubusercontent.com/krishankantray/music-playlists/main/romantic/playlist.json'
const MEANINGFUL_PLAYLIST =
  'https://raw.githubusercontent.com/krishankantray/music-playlists/main/meaningful/playlist.json'
const LOFI_PLAYLIST =
  'https://raw.githubusercontent.com/krishankantray/music-playlists/main/lofi/playlist.json'
const PUNJABI_PLAYLIST =
  'https://raw.githubusercontent.com/krishankantray/music-playlists/main/punjabi/playlist.json'

export default function MusicBar() {
  const [localAudioList, setLocalAudioList] = useState([])
  const { theme } = useTheme()
  const [loadingPlaylist, setLoadingPlaylist] = useState(true)
  const [playlists, setPlaylists] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      setLoadingPlaylist(true)
      const romanticPlaylist = await musicPlaylist(ROMANTIC_PLAYLIST)
      const meaningfulPlaylist = await musicPlaylist(MEANINGFUL_PLAYLIST)
      const lofiPlaylist = await musicPlaylist(LOFI_PLAYLIST)
      const punjabiPlaylist = await musicPlaylist(PUNJABI_PLAYLIST)
      await setTimeout(() => {}, 300)
      setPlaylists({ romanticPlaylist, meaningfulPlaylist, lofiPlaylist, punjabiPlaylist })
      setLocalAudioList(romanticPlaylist)
      setLoadingPlaylist(false)
      console.log(playlists)
    }
    fetchData().catch(console.error)
  }, [])
  const options = {
    audioLists: localAudioList.list,
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

  return loadingPlaylist ? (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <PlaylistCard
          playlist={playlists.lofiPlaylist}
          setLocalAudioList={setLocalAudioList}
          localAudioList={localAudioList}
        />
        <PlaylistCard
          playlist={playlists.romanticPlaylist}
          setLocalAudioList={setLocalAudioList}
          localAudioList={localAudioList}
        />
        <PlaylistCard
          playlist={playlists.punjabiPlaylist}
          setLocalAudioList={setLocalAudioList}
          localAudioList={localAudioList}
        />
        <PlaylistCard
          playlist={playlists.meaningfulPlaylist}
          setLocalAudioList={setLocalAudioList}
          localAudioList={localAudioList}
        />
      </div>
      <ReactJkMusicPlayer {...options} />
    </div>
  )
}
