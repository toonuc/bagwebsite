import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.tsx' */
import Header from './header.tsx'
import Brag from './brag.tsx'
import Collections from './collections.tsx'
import Catagory from './catagory.tsx'
import Footer from './footer.tsx'
import CatagoryNarrow from './catagory_narrow.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Brag />
    <Collections />
    <Catagory />
    <CatagoryNarrow />
    <Footer />
  </React.StrictMode>,
)
