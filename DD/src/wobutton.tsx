import './wobutton.css';

export default function WoButton(props: { Text: any }) {
  return (
    <div className='wobutton'>
      <span className='butext'>{props.Text}</span>
      <div className='buborders' />
    </div>
  );
}