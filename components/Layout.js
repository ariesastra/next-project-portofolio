import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

// START NPROGRESS
/*
  For starting and finishing loading status using nprogress base on
  loading of routes in each url
*/
Router.onRouteChangeStart = url => {
  console.log(url)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
// FINISH NPROGRESS

const Layout = ({children, title}) => {
  return (
    <div className='root'>
      <Head>
        <title>Next | {title}</title>
      </Head>
      <header>
        <Link href='/'>
          <a>Homepage</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/hireme'>
          <a>Hire Me</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </header>
      <h1>{title}</h1>
      {children}
      <footer>
        &copy; {new Date().getFullYear()}
      </footer>
      <style jsx>
      {`         
        @import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
        .root {
          font-family: 'Yusei Magic', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        header {
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 1em;
          font-size: 1.2 rem;
          background: indigo;
        }
        header a {
          color:darkgrey;
          text-decoration:none;
        }
        header a:hover{
          font-weight: bold;
          color: lightgrey;
        } 
        footer{
          padding: 1em;
        }
      `}
      </style>
      <style global jsx>
      {`
        body{
          padding: 0;
          margin: 0;
          font-size: 110%;
          background: #f0f0f0;

        }
      `}</style>
    </div>
  )
}

export default Layout
