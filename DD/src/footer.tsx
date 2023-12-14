import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='1' />
      <div className='2'>
        <div className='group'>
          <span className='text'>Company</span>
          <span className='text-2'>Region</span>
          <span className='text-3'>Help</span>
          <div className='img-3' />
          <span className='T'>T</span>
          <span className='name'>HealthCare</span>
        </div>
        <div className='wrapper'>
          <span className='text-6'>
            About
            <br />
            Testimonials
            <br />
            Find a doctor
            <br />
            Apps
          </span>
          <span className='text-7'>
            Indonesia
            <br />
            Singapore
            <br />
            Hongkong
            <br />
            Canada
          </span>
          <span className='text-8'>
            HealthCare provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </span>
          <span className='text-9'>
            ©HealthCare PTY LTD 2023. All rights reserved
          </span>
        </div>
      </div>
      <span className='text-a'>
        Help center
        <br />
        Contact support
        <br />
        Instructions
        <br />
        How it works
      </span>
      <div className='pic' />
    </div>
  );
}
