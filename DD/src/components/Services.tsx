import Service from "./Service";
import './Services.modules.css';

export default function Services() {
    return (
        <div className="services-container">
            <Service ImageSrc={'src/assets/images/Search.svg'} HeaderText={'Search doctor'} ServiceText={'Choose your doctor from thousands of specialist, general, and trusted hospitals'}  />
            <Service ImageSrc={'src/assets/images/Pharmacy.svg'} HeaderText={'Online pharmacy'} ServiceText={'Buy your medicines with our mobile application with a simple delivery system'}  />
            <Service ImageSrc={'src/assets/images/Consultation.svg'} HeaderText={'Consultation'} ServiceText={'Free consultation with our trusted doctors and get the best recomendations'}  />
            <Service ImageSrc={'src/assets/images/Details.svg'} HeaderText={'Details info'} ServiceText={'Free consultation with our trusted doctors and get the best recomendations'}  />
            <Service ImageSrc={'src/assets/images/Care.svg'} HeaderText={'Emergency care'} ServiceText={'You can get 24/7 urgent care for yourself or your children and your lovely family'}  />
            <Service ImageSrc={'src/assets/images/Tracking.svg'} HeaderText={'Tracking'} ServiceText={'Track and save your medical history and health data'}  />
        </div>
    );
}