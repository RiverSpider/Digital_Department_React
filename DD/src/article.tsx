import './article.css';

export default function Article(props: { imageSrc: any, headerText: any, subText: any, buttonText: any }) {
  return (
    <div className='article'>
      <div className='articlecontainer' />
      <span className='articleH'>
        {props.headerText}
      </span>
      <span className='articleS'>
        {props.subText}
      </span>
      <div
            className='articleimg'
            style={{ backgroundImage: `url(${props.imageSrc})`, }}
        />
      <span className='articleBT'>{props.buttonText}</span>
    </div>
  );
}