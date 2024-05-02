import { FaLocationDot } from "react-icons/fa6";
// import { BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col justify-between mb-5 md:flex-row print:flex-row">
      <div>
        <h1 className="mb-1 text-3xl font-medium md:text-4xl">
          Rishita Srivastava
        </h1>
        <div className="mb-1 text-lg font-medium text-gray-600">Full Stack Developer</div>
        <a
          className="flex mb-1 font-medium"
          href="https://maps.app.goo.gl/XK16j7aB3cP7B5J39"
          target="_blank"
        >
          <FaLocationDot className="my-auto mr-1 text-[color:var(--primary)]" />
          Ghaziabad, Uttar Pradesh
        </a>
        <div className="flex flex-col md:flex-row print:flex-row">
          <a
            className="flex mb-1 mr-4 font-medium"
            href="mailto:rishitasrivastava04@gmail.com"
          >
            <FaEnvelope className="my-auto mr-1 text-[color:var(--primary)]" />
            rishitasrivastava04@gmail.com
          </a>
          {/* <a className="flex mb-1 font-medium" href="tel:+918726127335">
            <BsTelephoneFill className="my-auto mr-1 text-[color:var(--primary)]" />
            +91 87955 14511
          </a> */}
        </div>
      </div>
      <div className="flex flex-col mr-5">
        <a
          className="flex mb-2 font-medium md:mt-8 print:mt-8"
          href="https://github.com/rishita1304/"
          target="_blank"
        >
          <FaGithub className="my-auto mr-1 text-[color:var(--primary)]" />
          <div>github.com/rishita1304</div>
        </a>
        <a
          className="flex mb-2 font-medium"
          href="https://linkedin.com/in/rishita1304/"
          target="_blank"
        >
          <FaLinkedin className="my-auto mr-1 text-[color:var(--primary)]" />
          <div>linkedin.com/in/rishita1304</div>
        </a>
        <a
          className="flex font-medium"
          href="https://rishita-srivastava.vercel.app/"
          target="_blank"
        >
          <FaGlobe className="my-auto mr-1 text-[color:var(--primary)]" />
          <div>rishita-srivastava.vercel.app</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
