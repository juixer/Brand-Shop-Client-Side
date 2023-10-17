import Swal from "sweetalert2";

const AddBrand = () => {
    const handleFromData = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const logo = form.logo.value;
        const ad1 = form.ad1.value;
        const ad2 = form.ad2.value;
        const ad3 = form.ad3.value;
        
        const brand ={name, logo, ad1, ad2, ad3}
        console.log(brand);

        fetch('http://localhost:5000/brands',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(brand),
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Product Added to Database",
                  timer: 1500,
                });
                form.reset();
              }
        })
    }
  return (
    <div className="my-10 mx-3">
      <h1 className="text-center text-5xl font-semibold my-5">Add Brand</h1>

      <form onSubmit={handleFromData} className="max-w-3xl mx-auto">
        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Brand Name</h1>
          <input
            type="name"
            name="name"
            required
            placeholder="Type Brand Name Here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Logo URL</h1>
          <input
            type="text"
            name="logo"
            required
            placeholder="Type Brand Logo URL Here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product AD No 1 URL</h1>
          <input
            type="text"
            name="ad1"
            placeholder="Type Brand AD URL Here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product AD No 2 URL</h1>
          <input
            type="text"
            name="ad2"
            placeholder="Type Brand AD URL Here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product AD No 3 URL</h1>
          <input
            type="text"
            name="ad3"
            placeholder="Type Brand AD URL Here"
            className="input input-bordered w-full"
          />
        </div>

        <button className="btn btn-active w-full hover:bg-black hover:text-white">
          Add Brand
        </button>
      </form>
    </div>
  );
};

export default AddBrand;
