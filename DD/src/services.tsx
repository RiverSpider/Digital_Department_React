import Service from "./service";
import './services.css';

export default function Services() {
    return (
        <div className="services-container">
            <Service imageSrc={'src/assets/images/Search.svg'} headerText={'Search doctor'} serviceText={'Choose your doctor from thousands of specialist, general, and trusted hospitals'}  />
            <Service imageSrc={'src/assets/images/Pharmacy.svg'} headerText={'Online pharmacy'} serviceText={'Buy your medicines with our mobile application with a simple delivery system'}  />
            <Service imageSrc={'src/assets/images/Consultation.svg'} headerText={'Consultation'} serviceText={'Free consultation with our trusted doctors and get the best recomendations'}  />
            <Service imageSrc={'src/assets/images/Details.svg'} headerText={'Details info'} serviceText={'Free consultation with our trusted doctors and get the best recomendations'}  />
            <Service imageSrc={'src/assets/images/Care.svg'} headerText={'Emergency care'} serviceText={'You can get 24/7 urgent care for yourself or your children and your lovely family'}  />
            <Service imageSrc={'src/assets/images/Tracking.svg'} headerText={'Tracking'} serviceText={'Track and save your medical history and health data'}  />
        </div>
    );
}