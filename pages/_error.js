import Layout from '../components/Layout'

const error = ({statusCode}) => (
  <Layout title='error'>
    {statusCode && `Could not load your user data: status code ${statusCode}`}
    <p>Cloudn't Get that Page, Sowri !</p>
  </Layout>
)

export default error