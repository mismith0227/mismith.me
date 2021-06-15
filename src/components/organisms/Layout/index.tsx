/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { Global } from '@emotion/react'
 import { globalStyle } from '../../../styles/globalStyles'
 import { Header } from "../Header"
 
 type Props = {
   children: React.ReactNode
 }
 
 export const Layout = ({ children }: Props) => {
   const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <Global styles={globalStyle} />
       <Header />
       <div
         style={{
           margin: `0 auto`,
           maxWidth: 960,
           padding: `0 1.0875rem 1.45rem`,
         }}
       >
         <main>{children}</main>
         <footer
           style={{
             marginTop: `2rem`,
           }}
         >
           © {new Date().getFullYear()}, Built with
           {` `}
           <a href="https://www.gatsbyjs.com">Gatsby</a>
         </footer>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 