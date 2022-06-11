/* eslint-disable @next/next/no-img-element */
export default function PlaylistCard({ playlist }) {
  return (
    <div className="p-10">
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://raw.githubusercontent.com/krishankantray/music-playlists/main/meaningful/meaningful.png"
          alt="Meaningful"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Meaningful</div>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  )
}
