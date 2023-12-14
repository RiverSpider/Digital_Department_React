import Article from "./article";
import './articles.css';

export default function Articles() {
    return (
        <div className="article-container">
            <Article 
            imageSrc={"src/assets/images/Article1.png"} 
            headerText={"Disease detection, check up in the laboratory"} 
            subText={"In this case, the role of the health laboratory is very important to do a disease detection..."} 
            buttonText={
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
            imageSrc={"src/assets/images/Article2.png"} 
            headerText={"Herbal medicines that are safe for consumption"} 
            subText={"Herbal medicine is very widely used at this time because of its very good for your health..."} 
            buttonText={
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
            imageSrc={"src/assets/images/Article3.png"} 
            headerText={"Natural care for healthy facial skin"} 
            subText={"A healthy lifestyle should start from now and also for your skin health. There are some..."} 
            buttonText={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15%' }}>
                Read more
                <img 
                    src="src/assets/images/Arrowright.svg" 
                    style={{ width: '14px', height: '9px' }}  
                />
                </div>
            }
            />
        </div>
    );
}