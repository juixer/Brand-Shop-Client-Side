import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddProducts = () => {
  const handleFormData = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const rating = form.rating.value;

    const productInfo = { name, photo, brand, type, price, details, rating };

    fetch("https://server-side-jet.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Product Added to Database",
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div data-aos="flip-left" className="my-10 mx-3">
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <h1 className="text-center text-5xl font-semibold my-5">Add Product</h1>

      <form onSubmit={handleFormData} className="max-w-3xl mx-auto">
        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Name</h1>
          <input
            type="name"
            name="name"
            required
            placeholder="Type Product Name Here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Photo URL</h1>
          <input
            type="text"
            name="photo"
            required
            placeholder="Type Product PhotoURL Here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Brand</h1>
          <select
            className="select select-bordered w-full"
            name="brand"
            required
          >
            <option value="">Select Product Brand Here</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Google Pixel">Google Pixel</option>
            <option value="Microsoft">Microsoft</option>
          </select>
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Type</h1>
          <select
            className="select select-bordered w-full"
            name="type"
            required
          >
            <option value="">Select Product Type Here</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="HeadPhone">HeadPhone</option>
            <option value="SmartWatch">SmartWatch</option>
            <option value="Gaming Console">Gaming Console</option>
            <option value="TV">TV</option>
          </select>
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Price</h1>
          <input
            type="text"
            required
            name="price"
            placeholder="Type Product Price Here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Details</h1>
          <textarea
            className="textarea textarea-bordered w-full h-44"
            placeholder="Type Product Details Here"
            name="details"
            required
          ></textarea>
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Rating</h1>
          <select className="select select-bordered w-full" name="rating">
            <option value="">Select Product Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
          </select>
        </div>

        <button className="btn btn-active w-full hover:bg-black hover:text-white">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
