import ProductPreview from "./components/ProductPreview";
import thumbnailDesktop from "./assets/images/image-product-desktop.jpg";
import thumbnailMobile from "./assets/images/image-product-mobile.jpg";

const productData = {
  category: "Perfume",
  name: "Gabrielle Essence Eau De Parfum",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  price: {
    current: 149.99,
    original: 169.99,
    currency: "$",
  },
  image: {
    thumbnailDesktop,
    thumbnailMobile,
    alt: "Gabrielle Essence Eau De Parfum perfume bottle on a white surface with green leaves",
  },
};

export default function App() {
  return (
    <main className="flex items-center justify-center bg-cream min-h-screen">
      <ProductPreview {...productData} />
    </main>
  );
}
