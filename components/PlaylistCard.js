/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function PlaylistCard({ playlist, setLocalAudioList, localAudioList }) {
  const { name, thumbnail, desc } = playlist
  const handlePlay = () => {
    setLocalAudioList(playlist)
  }
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <div href="#">
          <img alt="Placeholder" className="block h-auto w-full" src={thumbnail} />
        </div>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <div className="no-underline text-gray">{name}</div>
          </h1>
        </header>
        <p className="text-gray-300 text-sm p-2">{desc}</p>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          {localAudioList.name === name ? (
            <img src="https://i.gifer.com/Z23b.gif" width={60} />
          ) : (
            <button
              className="bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full "
              onClick={handlePlay}
            >
              Play All
            </button>
          )}
        </footer>
      </article>
    </div>
  )
}
