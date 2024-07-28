import './index.scss';

const FooterComponent = () => {

  const LetsConnect = () => {
    return (
      <div id="box">
        <p id="flashlight">
          <span id="flash">Let's</span>
          <span id="light">Connect</span>
        </p>
      </div>
    );
  }
  return (
    <div className="footer-container">
      <div className="custom-shape-divider-bottom-1721997595">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(219)">
              <stop offset="0%" stopColor="rgba(127, 127, 213, 1)" />
              <stop offset="100%" stopColor="rgba(145, 234, 228, 1)" />
            </linearGradient>
          </defs>
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="url(#myGradient)" className="shape-fill"></path>
        </svg>
      </div>
      <div className="footer-content">
        <div className='social-media-container'>
          <LetsConnect />
          <div className='social-media-icons'>
          <div className='social-media-icon'>
                <a href="https://www.linkedin.com/in/jayanth-rajanna/"> <i className="fa fa-linkedin fa-3x"></i> </a>
            </div>
            <div className='social-media-icon'>
                <a href="https://github.com/RJayanth"> <i className="fa fa-github fa-3x" target="_blank"></i> </a>
            </div>
            <div className='social-media-icon'>
                <a href="https://twitter.com/r_jayanth7"> <i className="fa fa-twitter fa-3x"></i> </a>
            </div>
            <div className='social-media-icon'>
                <a href="https://www.facebook.com/Jaynth.R/"> <i className="fa fa-facebook fa-3x"></i> </a>
            </div>
            <div className='social-media-icon'>
                <a href="https://www.youtube.com/channel/UC3MM8dMG-aB7q7XbUWTx00Q"> <i className="fa fa-youtube fa-3x"></i> </a>
            </div>
            <div className='social-media-icon'>
                <a href="https://www.instagram.com/r_jayanth7/"> <i className="fa fa-instagram fa-3x"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
