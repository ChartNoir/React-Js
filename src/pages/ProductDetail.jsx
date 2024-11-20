import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:p">
      <div className=" 'container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm " src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-3 max-w-[450px] mx-auto">
              {title}
            </h1>
            <p className="mb-3 max-w-[450px] mx-auto">{description}</p>
            <div className="text-x1 items-center  max-w-[450px] mx-auto  text-red-500 mb-6 font-semibold">
              $ {price}
            </div>
            <div>
              <button
                onClick={() => addToCart(product, product.id)}
                className="button position"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
