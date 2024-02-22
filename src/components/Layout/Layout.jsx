import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './Layout.styled'
import {NavBar} from 'components/NavBar/NavBar';



export const Layout = () => {
  return (
    <>
    <NavBar/>
    {/* <main> */}
    <Container>
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>
    </Container>
    </>
  )
}

export default Layout