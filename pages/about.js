import Link from 'next/link'
import React, { Component } from 'react'
import Fetch from 'isomorphic-unfetch'

// COMPONENTS
import Layout from '../components/Layout'

// PAGES
import Error from './_error'

export default class about extends Component {

  static async getInitialProps(){
    const res = await Fetch('https://api.github.com/users/ariesastra')
    const data = await res.json()
    const statusCode = res.status > 200 ? res.status : false
    return {
      user: data,
      statusCode
    }
  }
   
  render() {
    const {user, statusCode} = this.props
    
    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return (
      <Layout title="About Page">
        <p>{user.login}</p>
        <small>{user.location}</small>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt={user.bio} height="100px"/>
      </Layout>
    )
  }
}
