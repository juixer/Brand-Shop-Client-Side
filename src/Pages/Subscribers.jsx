import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Subscribers = () => {
  const loadedSubscribers = useLoaderData();
  
  return (
    <div className="max-w-screen-2xl mx-auto my-16 px-3">
        <Helmet><title>Subscribers</title></Helmet>
      <div
        className="hero rounded-xl bg-indigo-300"
        
      >
        <div className="hero-overlay rounded-xl bg-opacity-50"></div>
        <div className="hero-content text-center  text-neutral-content py-16">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Total Subscribers : <span className="text-teal-400">{loadedSubscribers.length}</span></h1>
            <ul>
                {loadedSubscribers.map(sub => {
                    return(
                        <li key={sub._id}>{sub.name}</li>
                    )
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
