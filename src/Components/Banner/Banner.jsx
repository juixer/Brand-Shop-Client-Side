import '../Banner/Banner.css'
const Banner = () => {
  return (
    <div className='my-10 mx-3'>
        <h1 className='text-center text-5xl font-semibold my-5'>Featured Products</h1>
      <div className="carousel rounded-xl w-full">
        <div
          id="slide1"
          className="carousel-item h-[550px] relative w-full"
        >
          <div className="absolute bottom-0 p-5 bg-black bg-opacity-50 w-full">
            <h1 className="text-3xl text-center text-white md:text-5xl font-bold">
               Apple Gadgets
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item h-[550px] relative w-full"
        >
          <div className="absolute bottom-0 p-5 bg-black bg-opacity-50 w-full">
            <h1 className="text-3xl text-center text-white md:text-5xl font-bold">
              Gaming Consoles
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item h-[550px]  relative w-full"
        >
          <div className="absolute bottom-0 p-5 bg-black bg-opacity-50 w-full">
            <h1 className="text-3xl text-center text-white md:text-5xl font-bold">
              MacBooks & Laptops
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item h-[550px]  relative w-full"
        >
         <div className="absolute bottom-0 p-5 bg-black bg-opacity-50 w-full">
            <h1 className="text-3xl text-center text-white md:text-5xl font-bold">
              SmartWatches
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item h-[550px]  relative w-full"
        >
          <div className="absolute bottom-0 p-5 bg-black bg-opacity-50 w-full">
            <h1 className="text-3xl text-center text-white md:text-5xl font-bold">
              AirPods & HeadPhones
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
