import { useState } from "react";
import Article from "./Article";
import './Articles.modules.css';
import WoButton from "./Wobutton";

export default function Articles() {
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
        <div className="article-container">
            <Article 
            ImageSrc={"src/assets/images/Article1.png"} 
            HeaderText={"Disease detection, check up in the laboratory"} 
            SubText={"In this case, the role of the health laboratory is very important to do a disease detection..."} 
            ButtonText={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
                Read more
                <img 
                    src="src/assets/images/Arrowright.svg" 
                    style={{ width: '14px', height: '9px' }}   
                />
                </div>
            }
            />
            <Article 
            ImageSrc={"src/assets/images/Article2.png"} 
            HeaderText={"Herbal medicines that are safe for consumption"} 
            SubText={"Herbal medicine is very widely used at this time because of its very good for your health..."} 
            ButtonText={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
                Read more
                <img 
                    src="src/assets/images/Arrowright.svg" 
                    style={{ width: '14px', height: '9px' }}   
                />
                </div>
            }
            />
            <Article 
            ImageSrc={"src/assets/images/Article3.png"} 
            HeaderText={"Natural care for healthy facial skin"} 
            SubText={"A healthy lifestyle should start from now and also for your skin health. There are some..."} 
            ButtonText={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
                Read more
                <img 
                    src="src/assets/images/Arrowright.svg" 
                    style={{ width: '14px', height: '9px' }}  
                />
                </div>
            }
            />
            {clicks % 2 === 1 && <><Article
                ImageSrc={"src/assets/images/Article3.png"}
                HeaderText={"Natural care for healthy facial skin"}
                SubText={"A healthy lifestyle should start from now and also for your skin health. There are some..."}
                ButtonText={<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
                    Read more
                    <img
                        src="src/assets/images/Arrowright.svg"
                        style={{ width: '14px', height: '9px' }} />
                </div>} /><Article
                    ImageSrc={"src/assets/images/Article3.png"}
                    HeaderText={"Natural care for healthy facial skin"}
                    SubText={"A healthy lifestyle should start from now and also for your skin health. There are some..."}
                    ButtonText={<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
                        Read more
                        <img
                            src="src/assets/images/Arrowright.svg"
                            style={{ width: '14px', height: '9px' }} />
                    </div>} /><Article
                    ImageSrc={"src/assets/images/Article3.png"}
                    HeaderText={"Natural care for healthy facial skin"}
                    SubText={"A healthy lifestyle should start from now and also for your skin health. There are some..."}
                    ButtonText={<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
                        Read more
                        <img
                            src="src/assets/images/Arrowright.svg"
                            style={{ width: '14px', height: '9px' }} />
                    </div>} /></>
            }
        </div>
            <WoButton Text={buttonText} onClick={handleClick} />
            </div>
    );
}