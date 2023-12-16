import './Wobutton.modules.css';

interface IProps {
  className?: string;
  Text: string;
  buttonIcon?: React.ReactNode;
}

export default function WoButton(props: IProps) {
  return (
    <div className={`${props.className} wobutton`}>
      <div className="butext">{props.Text}</div>
      {props.buttonIcon ? (
        <div className="buttonIcon">{props.buttonIcon}</div>
      ) : null}
    </div>
  );
}