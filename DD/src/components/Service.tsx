import './Service.modules.css';

interface IProps {
    ImageSrc: string; HeaderText: string; ServiceText: string;
  }

export default function Service(props: IProps) {
    return (
        <div className='service'>
        <div
            className='pic'
            style={{ backgroundImage: `url(${props.ImageSrc})`, }}
        />
        <span className='serviceH'>{props.HeaderText}</span>
        <span className='serviceS'>{props.ServiceText}</span>
        </div>
    );
}
