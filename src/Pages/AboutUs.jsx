import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div data-aos="flip-left" className="max-w-screen-2xl mx-auto px-3 my-10">
      <Helmet><title>About us</title></Helmet>
      <h1 className="text-center text-5xl font-semibold  my-5">About US</h1>
      <p className="text-xl">
        Welcome to Tech Buddy, where technology and innovation converge to bring
        you the latest in electronics and gadgets. We are passionate about all
        things tech and are committed to providing you with the best information
        and products in the world of electronics.
      </p>
      <div>
        <h1 className="text-center text-3xl font-semibold  my-5">
          Meet The Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-44"
                src="https://i.ibb.co/cczNjfw/Allura-Avatar-1.png"
                alt="Maharob Sazin"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Maharob Sazin</h2>
              <p>CEO</p>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-44"
                src="https://i.ibb.co/fHDLc0B/Allura-Sitting.png"
                alt="Tonmoy Khandakar"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Tonmoy Khandakar</h2>
              <p>Sales Manager</p>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-44"
                src="https://i.ibb.co/cTs0fVW/Allura-Avatar.png"
                alt="Ashfakul Islam"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Ashfakul Islam</h2>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-44"
                src="https://i.ibb.co/JRjVFzV/Dayflow-Sitting.png"
                alt="Mr Juixer"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Ms. Juixer</h2>
              <p>Web Designer</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl font-semibold  my-5">Our Mission</h1>
      <p className="text-xl">
        Our mission is to keep you up-to-date with the ever-evolving world of
        technology. We aim to be your go-to source for information on the latest
        gadgets, electronics, and trends. Whether you are a tech enthusiast, a
        casual user, or a professional, we are here to empower you with the
        knowledge you need to make informed decisions about your tech purchases.
      </p>
    </div>
  );
};

export default AboutUs;
