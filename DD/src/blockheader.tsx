import './blockheader.css';

export default function BlockHeader(props: { title: any, description: any }) {
    return (
      <div className='blockheader'>
        <span className='header'>{props.title}</span>
        <div className='divider' />
        <span className='description'>{props.description}</span>
      </div>
    );
  }