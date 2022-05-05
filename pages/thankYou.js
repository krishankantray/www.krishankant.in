/* eslint-disable @next/next/no-html-link-for-pages */
import Twemoji from '@/components/Twemoji'

export default function ThankYou() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl">Thank You</h1>
        <br />
        <br />
        <p className="text-xl">
          <a href="/contact">
            <Twemoji emoji="back" /> BACK
          </a>
        </p>
      </div>
    </div>
  )
}
