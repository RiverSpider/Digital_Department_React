import './Footer.modules.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerDotsW' />
      <div className='footerBG'>
        <div className='headers'>
          <span className='H1'>Company</span>
          <span className='H2'>Region</span>
          <span className='H3'>Help</span>
          <div className='footerCircle' />
          <span className='T'>T</span>
          <span className='name'>HealthCare</span>
        </div>
        <div className='sub'>
          <span className='S1'>
            About
            <br />
            Testimonials
            <br />
            Find a doctor
            <br />
            Apps
          </span>
          <span className='S2'>
            Indonesia
            <br />
            Singapore
            <br />
            Hongkong
            <br />
            Canada
          </span>
          <span className='S3'>
            Help center
            <br />
            Contact support
            <br />
            Instructions
            <br />
            How it works
          </span>
          <span className='nameS'>
            HealthCare provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </span>
          <span className='reg'>
            (c)HealthCare PTY LTD 2023. All rights reserved
          </span>
        </div>
      </div>
      <div className='footerDots' />
    </div>
  );
}

