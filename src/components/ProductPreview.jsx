import cartIcon from "../assets/images/icon-cart.svg";

export default function ProductPreview(props) {
  const { image, category, title, description, price } = props;

  return (
    <article className="bg-white">
      <picture>
        <source media="(width >= 1440px)" srcSet={image.thumbnailDesktop} />
        <source media="(width >= 375px)" srcSet={image.thumbnailMobile} />
        <img src={image.thumbnailDesktop} alt={image.alt} />
      </picture>
      <p>{category}</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        <span>
          {price.currency}
          {price.current}
        </span>{" "}
        <span>{price.original}</span>
      </p>
      <p>
        <button>
          <img src={cartIcon} alt="" />
          <span>Add to Cart</span>
        </button>
      </p>
    </article>
  );
}
