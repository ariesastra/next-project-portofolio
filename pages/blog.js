import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({title, slug}) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const blog = () => (
  <Layout title='Blog Page'>
    <ul>
      <PostLink slug='react-post-lorem' title="React" />
      <PostLink slug='angular-post-lorem' title="Angular" />
      <PostLink slug='vue-post-lorem' title="Vue" />
    </ul>
  </Layout>
)


export default blog
