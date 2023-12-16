import "./Topnav.modules.css";

export default function TopNav() {
  return (
    <div className="topnav">
      <div className="navbar">
        <div className="topnavtext" style={{opacity: 1, fontWeight: "700"}}>Home</div>
        <div className="topnavtext">Find a doctor</div>
        <div className="topnavtext">Apps</div>
        <div className="topnavtext">Testimonials</div>
        <div className="topnavtext">About us</div>
      </div>
    </div>
  );
};
