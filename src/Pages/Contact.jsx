import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div data-aos="flip-left" className="max-w-screen-xl mx-auto px-3 my-16">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1 className="text-center text-5xl font-semibold  my-5">Contact US</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 md:my-16">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/mTJpdr3/Croods-Keeping-in-Touch-1.png"
              alt="Sales Team"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Talk to a member of our sales team</h2>
            <p>We will help you find the right product and pricing for your budget.</p>
            <div className="card-actions">
              <button className="btn w-full hover:bg-black hover:text-white">Contact Sales</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/MSGLSX5/Croods-Keeping-in-Touch.png"
              alt="Support"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Product and Account Support</h2>
            <p>Our help center is fresh and always open for business. If you can not find the answer you are looking for, we are here to lend a hand</p>
            <div className="card-actions">
              <button className="btn w-full hover:bg-black hover:text-white">Go to help center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
