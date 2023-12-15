import './Review.modules.css';

export default function Review(props: { reviewH: any, reviewText: any, reviewName: any, reviewW: any, avatar: any }) {
  return (
    <div className='review'>
      <div className='dotsW' />
      <div className='reviewbackground'>
        <div className='reviewtextbox'>
          <span className='reviewH'>{props.reviewH}</span>
          <div className='reviewDivider' />
          <span className='reviewText'>
          {props.reviewText}
          </span>
          <span className='reviewName'>{props.reviewName}</span>
          <span className='reviewW'>{props.reviewW}</span>
        </div>
        <div className='circle' />
        <div
            className='avatar'
            style={{ backgroundImage: `url(${props.avatar})`, }}
        />
      </div>
      <div className='dotsB' />
    </div>
  );
}