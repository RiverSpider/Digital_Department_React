import './Headertext2.modules.css';
import WoButton from './Wobutton';

interface IProps {
  textH: string;
  textS: string;
  textB: string;
  buttonIcon?: React.ReactNode;
  showDivider: boolean;
}

export default function HeaderText2({
  textH,
  textS,
  textB,
  buttonIcon,
  showDivider
}: IProps) {
  return (
    <div className="headertext2">
      <span className="textH">{textH}</span>
      {showDivider ? <div className="dividerH" /> : null}
      <span className="textS">{textS}</span>
      <WoButton className="HTbutton" text={textB} buttonIcon={buttonIcon} />
    </div>
  );
}