import { logo } from './banner.module.css';

const subtitleStyle = {
  fontStyle: 'italic',
  fontSize: 'x-large',
  color: 'coral',
};

const Banner = (props) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./GloboLogo.png" alt="logo" className={logo} />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {props.headerText}
      </div>
    </header>
  );
};

export default Banner;
