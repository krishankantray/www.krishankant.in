import { TwitterFollowButton, TwitterDMButton } from 'react-twitter-embed'
import Link from '@/components/Link'
import ProfileCard from '@/components/ProfileCard'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import Twemoji from '@/components/Twemoji.js'
import TypedBios from '@/components/TypedBios'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 15

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 mt-8 md:mt-16">
        <div className="my-4 pt-6 pb-8 space-y-2 md:space-y-5 xl:grid xl:grid-cols-3">
          <div className="xl:col-span-2 pr-8">
            <p className={`text-teal-400 font-fira text-5xl`}>
              Hi there <i className="twa twa-waving-hand"></i>
            </p>

            <div className="font-fira text-lg leading-8 text-gray-600 dark:text-gray-400">
              <p className="mt-4 mb-8">
                <span className="font-medium">
                  My name is Krishankant and I'm a software engineer based in India{' '}
                </span>
                <span className="align-middle flag-in">
                  <Twemoji emoji="flag-india" />.
                </span>
                <br />I have around three years of experience and I currently work as a Software
                Engineer in a fintech company -{' '}
                <Link href="https://www.paisabazaar.com/">Paisabazaar</Link> .
                <br />
                And previously I worked at <Link href="https://www.cvent.com/">Cvent</Link> for 1
                year and also a startup called{' '}
                <Link href="https://www.breachlock.com/">Breachlock</Link> for 1.5 years.
                <br />I likes writing blogs and document whatever knowledge I have in Software
                Engineering.
              </p>
              <div className="flex flex-col">
                <Link href="/projects" className="hover:underline">
                  <Twemoji emoji="hammer-and-wrench" /> My Works
                </Link>
                <Link href="/blog" className="hover:underline">
                  <Twemoji emoji="memo" /> My writings
                </Link>
                <Link href="/about" className="hover:underline">
                  <Twemoji emoji="face-with-monocle" /> More about me and myself
                </Link>
                <Link href="/music" className="hover:underline">
                  <Twemoji emoji="music" /> My songs playlist
                </Link>
                {/* <Link href="/resume" className="hover:underline">
                  <Twemoji emoji="briefcase" /> My resume
                </Link> */}
              </div>
              <br />
              <b>DM on twitter: </b> <TwitterDMButton id={402005073} options={{ size: 'large' }} />
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-1 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
