import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'ContactLayout'

export async function getStaticProps() {
  const contactDetails = await getFileBySlug('authors', ['contact'])
  return { props: { contactDetails } }
}

export default function About({ contactDetails }) {
  const { mdxSource, frontMatter } = contactDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
