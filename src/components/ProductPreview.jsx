import cartIcon from "../assets/images/icon-cart.svg";

export default function ProductPreview(props) {
  const { image, category, name, description, price } = props;

  return (
    <article className="bg-white grid desktop:grid-cols-2 desktop:max-w-150 w-[90%] max-w-90 shadow-lg rounded-xl font-montserrat text-grey font-normal overflow-hidden">
      {/* Left */}
      <picture>
        <source media="(width >= 1024px)" srcSet={image.thumbnailDesktop} />
        <img
          className="min-h-full w-full object-cover block"
          src={image.thumbnailMobile}
          alt={image.alt}
        />
      </picture>

      {/* Right */}
      <div className="p-8">
        <p className="uppercase tracking-[5px] mb-3 text-sm font-semibold">
          {category}
        </p>
        <h2 className="font-extrabold leading-[1.2] font-fraunces text-3xl text-black mb-4">
          {name}
        </h2>
        <p className="mb-5">{description}</p>
        <p className="flex items-center gap-2.5 font-bold mb-5 ">
          <span className="text-green-500 font-fraunces text-2xl">
            {price.currency}
            {price.current}
          </span>{" "}
          <span className="line-through">{price.currency}{price.original}</span>
        </p>

        <button className="flex gap-2 justify-center items-center w-full font-semibold bg-green-500 transition-colors duration-100 hover:bg-green-700 focus-visible:bg-green-700 text-white p-3.5 rounded-lg">
          <img className="w-4 h-4" src={cartIcon} alt="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
}
