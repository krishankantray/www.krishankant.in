import dynamic from 'next/dynamic'

const MusicBar = dynamic(() => import('components/MusicBar'), {
  ssr: false,
})

export default MusicBar
