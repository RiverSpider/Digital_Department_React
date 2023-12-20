import './Review.modules.css';

interface IProps {
  reviewH: string, reviewText: string, reviewName: string, reviewW: string, avatar: string
}

export default function Review(props: IProps) {
  return (
    <div className='review'>
      <div className='dotsW' />
      <div className='reviewbackground'>
      <div className='reviewContainer'>
  <div className='reviewtextbox'>
    <span className='reviewH'>{props.reviewH}</span>
    <div className='reviewDivider' />
    <span className='reviewText'>{props.reviewText}</span>
    <span className='reviewName'>{props.reviewName}</span>
    <span className='reviewW'>{props.reviewW}</span>
  </div>
  <div className='circle' />
  <div className='avatar' style={{ backgroundImage: `url(${props.avatar})` }} />
</div>
      </div>
      <div className='dotsB' />
    </div>
  );
}