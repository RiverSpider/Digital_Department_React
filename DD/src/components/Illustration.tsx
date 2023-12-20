import "./Illustration.modules.css";

interface IProps {
  width: string; height: string; imageUrl: string;
}

export default function Illustration(props: IProps) {
  const style = {
    maxWidth: props.width,
    maxHeight: props.height,
    width: "41vw",
    height: "35vw",
    minWidth: "350px",
    minHeight: "300px",
    backgroundImage: `url('${props.imageUrl}')`,
  };

  return <div className='illustration' style={style} />;
}