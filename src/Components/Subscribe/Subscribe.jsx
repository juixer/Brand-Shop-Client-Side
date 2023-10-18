import Swal from "sweetalert2";

const Subscribe = () => {
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const email = form.email.value;
    const subscribe = {name, email };

    fetch("http://localhost:5000/subscribers", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(subscribe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thank you for your subscription",
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="my-16 max-w-screen-2xl mx-auto bg-indigo-300 bg-opacity-40 p-10 rounded-xl flex flex-col justify-center items-center ">
      <span className="text-center text-5xl border-black border-b font-semibold mb-5">
        Subscribers
      </span>
      <p className="mb-5 text-2xl text-center">
        Subscribe to us and get the latest news and updates
      </p>
      <form
        onSubmit={handleFormData}
        className="w-full flex justify-center items-center"
      >
        <div className="flex justify-center flex-col items-center gap-5 w-full lg:w-1/3">
          <input
            type="name"
            name="name"
            placeholder="Type Name here"
            className="input w-full"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Type Your Email here"
            className="input w-full"
          />
          <button className="btn hover:bg-black hover:text-white font-bold">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
