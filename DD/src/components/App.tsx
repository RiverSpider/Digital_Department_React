import { useState } from "react";
import Logo from './Logo.tsx'
import TopNav from './Topnav.tsx'
import Dots from './Dots.tsx'
import HeaderText from './Headertext.tsx'
import Illustration from './Illustration.tsx'
import BlockHeader from './Blockheader.tsx'
import Services from './Services.tsx'
import Oval from './Oval.tsx'
import WoButton from './Wobutton.tsx'
import HeaderText2 from './Headertext2.tsx'
import Review from './Review.tsx'
import Slider from './Slider.tsx'
import Articles from './Articles.tsx'
import Footer from './Footer.tsx'

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [buttonText, setButtonText] = useState("View all");

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks % 2 === 0) {
      setButtonText("Hide");
    } else {
      setButtonText("View all");
    }
  };


    return (
        <div style={{ display:  'flex', flexDirection: 'column', gap: '70px', overflow: 'hidden'}}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '2%', marginLeft: '10%', marginRight: '10%', flexWrap: 'wrap' }}>
          <div style={{ flex: 'none' }}><Logo /></div>
          <TopNav />
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%', flexWrap: 'wrap' }}>
          <div style={{ position: 'absolute', left: '-50px' }}>
            <Dots />
          </div>
          <div style={{ flex: 'none', marginTop: '9%', marginBottom: "50px"}}><HeaderText /></div>
          <div style={{ flex: 'none' }}>
            <Illustration Width="693px" Height="598px" ImageUrl= "src/assets/images/HeaderIllustration.png" />
          </div>
        </div>
        <div style={{justifyContent: 'center', marginTop: '-10%',}}>
        <BlockHeader
          Title="Our Services"
          Description="We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        />
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%' }}>
          <Services />
        </div>
        <div style={{ position: 'absolute', top: 1000, marginLeft: -10, overflow: 'hidden' }}>
          <Oval />
        </div>
        <div style={{ position: 'absolute', top: 1407, right:265, zIndex: -1}}>
          <Dots />
        </div>
        <WoButton Text={"Learn more"} />
  
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '10%', marginRight: '15%', flexWrap: 'wrap' }}>
          <div style={{ flex: 'none' }}>
            <Illustration Width="650px" Height="477px" ImageUrl= "src/assets/images/HeaderIllustration2.png" />
          </div>
          <div style={{ flex: 'none', marginTop: '5%'}}>
            <HeaderText2 textH={"Leading healthcare providers"} textS={"We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"} textB={"Learn more"} showDivider={true} /></div>
            <div style={{ position: 'absolute', right: "5%", marginTop: "27%"}}>
              <Dots />
            </div>
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '15%', marginRight: '10%', marginTop: '-10%', marginBottom: '-10%', flexWrap: 'wrap' }}>
          <div style={{ flex: 'none', marginTop: '5%'}}>
            <HeaderText2 textH={"Download our mobile apps"} textS={"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"} textB="Download" buttonIcon={ <img src="src/assets/images/Arrowdown.svg" />} showDivider={true}/></div>
                
            <div style={{ flex: 'none' }}>
            <Illustration Width="665px" Height="434px" ImageUrl= "src/assets/images/HeaderIllustration3.png" />
          </div>
        </div>
        <Slider />
        <div style={{justifyContent: 'center'}}>
        <BlockHeader
          Title="Check out our latest article"
          Description
        />
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '10%', marginRight: '10%', marginTop: '-50px' }}>
          <div style={{position: 'absolute', top: '-8%', left: "1%"}}>
            <Dots />
          </div>
          <Articles />
          {clicks % 2 === 1 && <Articles />}
          <div style={{ position: 'absolute', top: "-16%", transform: 'rotateX(180deg) rotateY(180deg)', right: "-20%", zIndex: -1 }}>
            <Oval />
          </div>
        </div>
        <WoButton Text={buttonText} onClick={handleClick} />
        <Footer />
      </div>
    );
  }