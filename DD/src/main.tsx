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
import HeaderText2 from './headertext2.tsx'
import Review from './review.tsx'
import Slider from './slider.tsx'
import Articles from './articles.tsx'
import Footer from './footer.tsx'

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
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%' }}>
        <Services />
      </div>
      <div style={{ position: 'absolute', top: 1000, marginLeft: -10 }}>
        <Oval />
      </div>
      <div style={{ position: 'absolute', top: 1360, right:325, zIndex: -1}}>
        <Dots />
      </div>
      <WoButton Text={"Learn more"} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '10%', marginRight: '15%' }}>
        <div style={{ flex: 'none' }}>
          <Illustration width="650px" height="477px" imageUrl= "src/assets/images/HeaderIllustration2.png" />
        </div>
        <div style={{ flex: 'none', marginTop: '5%'}}>
          <HeaderText2 TextH={"Leading healthcare providers"} TextS={"We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"} TextB={"Learn more"} /></div>
          <div style={{ position: 'absolute', right: "8%", marginTop: "27%" }}>
            <Dots />
          </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '15%', marginRight: '10%', marginTop: '10%' }}>
        <div style={{ flex: 'none', marginTop: '5%'}}>
          <HeaderText2 TextH={"Download our mobile apps"} TextS={"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"} TextB={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
            Download
            <img src="src/assets/images/Arrowdown.svg"/>
          </div>
              } /></div>
              
          <div style={{ flex: 'none' }}>
          <Illustration width="665px" height="434px" imageUrl= "src/assets/images/HeaderIllustration3.png" />
        </div>
      </div>
      <Review reviewH={"What our customer are saying"} reviewText={"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"} reviewName={"Edward Newgate"} reviewW={"Founder Circle"} avatar={"src/assets/images/Avatar.png"} />
      <Slider />

      <BlockHeader
        title="Check out our latest article"
        description
      />
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%', marginTop: '-5%' }}>
        <div style={{position: 'absolute', top: '-8%', left: "7%"}}>
          <Dots />
        </div>
        <Articles />
        <div style={{ position: 'absolute', top: "-16%", transform: 'rotateX(180deg) rotateY(180deg)', marginRight: "-100%", zIndex: -1 }}>
          <Oval />
        </div>
      </div>
      <WoButton Text={"View all"} />
      <Footer />
    </div>
  </React.StrictMode>,
)
