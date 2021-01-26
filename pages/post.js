import React from 'react'
import Layout from '../components/Layout'
import {withRouter} from 'next/router'

const post = ({router}) => (
  <Layout title={router.query.title}>
      <p>Ex veniam sit dolore cillum quis ipsum. Ea ullamco consequat veniam est aliqua aute ipsum eiusmod dolore esse ullamco ex eiusmod pariatur. Laboris aliquip aliqua amet deserunt ut commodo dolor officia. Enim consectetur et esse mollit duis voluptate officia consectetur fugiat sint dolor nostrud. Tempor ea nisi commodo aute ut esse aliqua sit id Lorem consequat fugiat nostrud aute. Id magna cupidatat proident elit ut ea culpa nostrud magna eu tempor fugiat quis qui. Velit fugiat anim proident deserunt.

      Anim pariatur est nostrud irure occaecat commodo velit irure fugiat est ut dolore duis. Anim consectetur laborum amet pariatur laboris minim mollit in ea excepteur proident minim pariatur. Aliqua fugiat nisi labore excepteur ullamco Lorem. In cillum dolore voluptate ipsum tempor deserunt tempor reprehenderit laboris sunt. Nulla pariatur do nostrud cupidatat ea quis. Eu proident non culpa labore deserunt quis elit qui Lorem irure esse Lorem anim mollit.

      Adipisicing veniam exercitation commodo velit elit ex ut. Consectetur dolor excepteur nulla ad excepteur qui labore deserunt est nulla occaecat labore qui sit. Fugiat esse occaecat aliquip eu sit.</p>
    <style jsx>{`
      p{
        width: 80vw
      }
    `}</style>
  </Layout>
)


export default withRouter(post)
