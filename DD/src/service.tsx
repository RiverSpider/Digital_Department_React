import './service.css';

export default function Service(props: { imageSrc: any, headerText: any, serviceText: any }) {
    return (
        <div className='service'>
        <div
            className='pic'
            style={{ backgroundImage: `url(${props.imageSrc})`, }}
        />
        <span className='serviceH'>{props.headerText}</span>
        <span className='serviceS'>{props.serviceText}</span>
        </div>
    );
}
