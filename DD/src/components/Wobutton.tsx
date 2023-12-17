import './Wobutton.modules.css';

interface IProps {
  className?: string;
  Text: string;
  buttonIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>; // ????????? ????? onClick ? ?????
}

export default function WoButton(props: IProps) {
  return (
    <div className={`${props.className} wobutton`} onClick={props.onClick}>
      <div className="butext">{props.Text}</div>
      {props.buttonIcon ? (
        <div className="buttonIcon">{props.buttonIcon}</div>
      ) : null}
    </div>
  );
}