import './Blockheader.modules.css';

interface IProps {
  Title: string; Description: any; 
}

export default function BlockHeader(props: IProps) {
    return (
      <div className='blockheader'>
        <span className='header'>{props.Title}</span>
        <div className='divider' />
        <span className='description'>{props.Description}</span>
      </div>
    );
  }