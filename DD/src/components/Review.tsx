import './Review.modules.css';

interface IProps {
  ReviewH: string, ReviewText: string, ReviewName: string, ReviewW: string, Avatar: string
}

export default function Review(props: IProps) {
  return (
    <div className='review'>
      <div className='dotsW' />
      <div className='reviewbackground'>
        <div className='reviewtextbox'>
          <span className='reviewH'>{props.ReviewH}</span>
          <div className='reviewDivider' />
          <span className='reviewText'>
          {props.ReviewText}
          </span>
          <span className='reviewName'>{props.ReviewName}</span>
          <span className='reviewW'>{props.ReviewW}</span>
        </div>
        <div className='circle' />
        <div
            className='avatar'
            style={{ backgroundImage: `url(${props.Avatar})`, }}
        />
      </div>
      <div className='dotsB' />
    </div>
  );
}