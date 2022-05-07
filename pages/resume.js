import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Link from 'next/link'

const DEFAULT_LAYOUT = 'ResumeLayout'

export async function getStaticProps() {
  const resumeDetails = await getFileBySlug('authors', ['resume'])
  return { props: { resumeDetails } }
}

export default function About({ resumeDetails }) {
  const { mdxSource, frontMatter } = resumeDetails

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl">
          for resume, mail me at- <code>krishankant_rai@rediffmail.com</code>{' '}
        </h1>
      </div>
    </div>
  )

  // return (
  //   <MDXLayoutRenderer
  //     layout={frontMatter.layout || DEFAULT_LAYOUT}
  //     mdxSource={mdxSource}
  //     frontMatter={frontMatter}
  //   />
  // )
}
