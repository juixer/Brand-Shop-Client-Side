import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="my-44 flex justify-center flex-col items-center">
            <h1 className="text-8xl font-bold">Oops!</h1>
            <h1 className="text-5xl font-bold"><span className="text-6xl">{error.status}</span>  {error.statusText}</h1>
            <p className="text-xl font-semibold">{error.error?.message}</p>
            <Link to={'/'}><button className="btn bg-black text-white hover:bg-white hover:text-black mt-5">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;