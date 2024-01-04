import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";

const FeaturedProducts = () => {
  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid />
    </section>
  );
};

export default FeaturedProducts;
