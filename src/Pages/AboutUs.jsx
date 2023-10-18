const AboutUs = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-3 my-10">
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
                alt="Alex Smith"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Alex Smith</h2>
              <p>CEO</p>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-44"
                src="https://i.ibb.co/fHDLc0B/Allura-Sitting.png"
                alt="May Brown"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">May Brown</h2>
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
                alt="Roxie Swanson"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-semibold">Roxie Swanson</h2>
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