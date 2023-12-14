import './headertext2.css';
import WoButton from './wobutton';

export default function HeaderText2() {
  return (
    <div className='headertext2'>
      <span className='textH'>Leading healthcare providers</span>
      <div className='dividerH' />
      <span className='textS'>
        We provides progressive, and affordable healthcare, accessible on mobile
        and online for everyone. To us, it’s not just work. We take pride in the
        solutions we deliver
      </span>
      <WoButton Text={"Learn more"} />
    </div>
  );
}