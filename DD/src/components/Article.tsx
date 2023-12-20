import './Article.modules.css';

interface IProps {
  ImageSrc: string; HeaderText: string; SubText: string; ButtonText: any;
}

export default function Article(props: IProps) {
  return (
    <div className='article'>
      <div className='articlecontainer' />
      <span className='articleH'>
        {props.HeaderText}
      </span>
      <span className='articleS'>
        {props.SubText}
      </span>
      <div
            className='articleimg'
            style={{ backgroundImage: `url(${props.ImageSrc})`, }}
        />
      <span className='articleBT'>{props.ButtonText}</span>
    </div>
  );
}