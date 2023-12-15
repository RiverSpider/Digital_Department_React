import './Headertext2.modules.css';
import WoButton from './Wobutton';

export default function HeaderText2(props: { TextH: any, TextS: any, TextB: any }) {
  return (
    <div className='headertext2'>
      <span className='textH'>{props.TextH}</span>
      <div className='dividerH' />
      <span className='textS'>
      {props.TextS}
      </span>
      <div style={{ position: 'relative', marginRight: "58%", marginTop: '14%' }}>
      <WoButton Text={props.TextB} />
      </div>
    </div>
  );
}