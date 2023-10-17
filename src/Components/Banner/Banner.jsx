const Banner = () => {
  return (
    <div className="">
      <div
        className="hero h-[750px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/c80V42x/norbert-levajsics-d-Ux0gw-Lbhzs-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-5xl font-bold">SALE! SALE!</h1>
            <p className="mb-5 font-bold text-3xl">
              <span className="">Limited Time Offers: </span>Our gaming console sales won't last forever.
              Act fast to seize these incredible savings before they're gone!
            </p>
            <button className="btn hover:bg-black hover:text-white border-none">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
