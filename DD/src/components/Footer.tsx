import './Footer.modules.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerDots' /> 
      <div className='footerDotsW' />
      <div className='footerBG' />
      <div className="textwrap">
        <div className='headers'>
          <div className='footerCircle' />
          <span className='T'>T</span>
          <span className='H1'>HealthCare</span>
        
          <span className='S1' style={{ marginLeft: -50, lineHeight: "28px", top: "10px", width: "49%" }}>
            HealthCare provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
            <br />
            <br />
            (c)HealthCare PTY LTD 2023. All rights reserved
          </span>
        </div>

        <div className='headers'>
          <span className='H1'>Company</span>
          <span className='S1'>
              About
              <br />
              Testimonials
              <br />
              Find a doctor
              <br />
              Apps
            </span>
        </div>

        <div className='headers'>
          <span className='H1'>Region</span>
          <span className='S1'>
              Indonesia
              <br />
              Singapore
              <br />
              Hongkong
              <br />
              Canada
          </span>
        </div>

        <div className='headers'>
          <span className='H1'>Help</span>
          <span className='S1'>
              Help center
              <br />
              Contact support
              <br />
              Instructions
              <br />
              How it works
          </span>
        </div>
      </div>
    </div>
  );
}

