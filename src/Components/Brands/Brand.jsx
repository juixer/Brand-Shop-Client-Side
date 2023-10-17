const Brand = ({brand}) => {
    const {name, img} = brand;

    const handleBrand = (name) => {
        console.log(name);
    }

  return (
    <div onClick={()=>handleBrand(name)} className="card  bg-base-100 hover:bg-gray-200 shadow-xl">
      <figure>
        <img
          src={img}
          alt={name}
        />
      </figure>
    </div>
  );
};

export default Brand;
