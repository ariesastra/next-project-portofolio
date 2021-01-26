import Link from 'next/link'

// COMPONENTS
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout title="About Page">
      <p>Javascript Next Framework</p>
      <img src="/static/js.jpeg" alt="javascript master react" height="100px"/>
    </Layout>
  )
}

export default about
