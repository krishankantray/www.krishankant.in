import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'
import ScrollTop from '@/components/ScrollTop'

export default function ContactLayout({ children, frontMatter }) {
  const {
    name,
    title,
    avatar,
    occupation,
    company,
    email,
    twitter,
    facebook,
    linkedin,
    github,
  } = frontMatter

  return (
    <>
      <PageSeo
        title={`Contact - ${name} - ${title}`}
        description={`Contact - ${name} - ${title}`}
      />
      <ScrollTop />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <div className="items-start space-y-2 xl:space-y-0 pt-8">
          <div className="pb-8 xl:pl-8 prose prose-lg dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
