import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedProductDetails = useLoaderData();
  const { name, brand, photo, details, type, price } = loadedProductDetails;

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

    const updateInfo = { name, photo, brand, type, price, details, rating };
    console.log(updateInfo);
  };
  return (
    <div className="my-10 mx-3">
      <h1 className="text-center text-5xl font-semibold my-5">
        Update Product
      </h1>

      <form onSubmit={handleFormData} className="max-w-3xl mx-auto">
        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Name</h1>
          <input
            type="name"
            name="name"
            defaultValue={name}
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
            defaultValue={photo}
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
            defaultValue={brand}
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
            defaultValue={type}
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
            type="number"
            required
            name="price"
            defaultValue={price}
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
            defaultValue={details}
          ></textarea>
        </div>

        <div className="mb-5">
          <h1 className="text-lg font-semibold ml-2">Product Rating</h1>

          <div className="flex gap-2 md:flex-row flex-col md:ml-5">
            <label className="label cursor-pointer">
              <span className="label-text mr-2 font-bold text-base">
                1 Star
              </span>
              <input type="radio" name="rating" className="radio" value="1" />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text mr-2 font-bold text-base">
                2 Star
              </span>
              <input type="radio" name="rating" className="radio " value="2" />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text mr-2 font-bold text-base">
                3 Star
              </span>
              <input type="radio" name="rating" className="radio" value="3" />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text mr-2 font-bold text-base">
                4 Star
              </span>
              <input type="radio" name="rating" className="radio " value="4" />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text mr-2 font-bold text-base">
                5 Star
              </span>
              <input type="radio" name="rating" className="radio " value="5" />
            </label>
          </div>
        </div>

        <button className="btn btn-active w-full hover:bg-black hover:text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
