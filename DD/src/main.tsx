import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './logo.tsx'
import TopNav from './topnav.tsx'
import Dots from './dots.tsx'
import HeaderText from './headertext.tsx'
import Illustration from './illustration.tsx'
import BlockHeader from './blockheader.tsx'
import Services from './services.tsx'
import Oval from './oval.tsx'
import WoButton from './wobutton.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ display:  'flex', flexDirection: 'column', gap: '70px'}}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '2%', marginLeft: '10%', marginRight: '10%' }}>
        <div style={{ flex: 'none' }}><Logo /></div>
        <div style={{ flex: 'none', marginTop: '1%' }}><TopNav /></div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%' }}>
        <div style={{ position: 'absolute', left: '-50px' }}>
          <Dots />
        </div>
        <div style={{ flex: 'none', marginTop: '9%' }}><HeaderText /></div>
        <div style={{ flex: 'none' }}>
          <Illustration width="693px" height="598px" imageUrl= "src/assets/images/HeaderIllustration.png" />
        </div>
      </div>

      <BlockHeader
        title="Our Services"
        description="We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
      />
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%' }}>
        <Services />
      </div>
      <div style={{ position: 'absolute', top: 1000, marginLeft: -10 }}>
        <Oval />
      </div>
      <div style={{ position: 'absolute', top: 1360, right:325, zIndex: -1}}>
        <Dots />
      </div>
      <WoButton Text={"Learn more"} />
    </div>
  </React.StrictMode>,
)
