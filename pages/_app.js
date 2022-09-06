import Header from '../Components/Header'
import Layout from '../Components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Header />
    <Component {...pageProps} />

  </Layout>
}

export default MyApp
