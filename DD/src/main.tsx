import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './logo.tsx'
import TopNav from './topnav.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{float: 'left', marginLeft: '200px', marginTop: '50px'}}><Logo /></div>
    <div style={{float: 'right', marginRight: '200px', marginTop: '60px'}}><TopNav /></div>
  </React.StrictMode>,
)
