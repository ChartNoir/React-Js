import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="order border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transitionb">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-0 right-0   p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-900">
          <button>
            <div
              onClick={() => addToCart(product, id)}
              className="flex justify-center bg-slate-50 items-center text-black w-12 h-12"
            >
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 flex justify-center  bg-slate-50 items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1 ">{category}</div>
        <Link to={"/product/${id}"} className="font-bold">
          <h2>{title}</h2>
        </Link>
        <h2>{price}$</h2>
      </div>
    </div>
  );
};
export default Product;
