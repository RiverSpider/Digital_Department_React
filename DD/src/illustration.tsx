import "./illustration.css";

export default function Illustration(props: { width: any; height: any; imageUrl: any; }) {
  const style = {
    width: props.width,
    height: props.height,
    backgroundImage: `url('${props.imageUrl}')`,
  };

  return <div className='illustration' style={style} />;
}