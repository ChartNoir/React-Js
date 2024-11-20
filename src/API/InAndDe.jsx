import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const InAndDe = (item) => {
  const { id, price, amount } = item;
  const { increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <div className=" flex gap-x-2 h-[36px] text-sm">
      <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
        <div
          onClick={() => decreaseAmount(id)}
          className="flex-1 flex justify-center items-center cursor-pointer"
        >
          <IoMdRemove />
        </div>
        <div className="h-full flex justify-center items-center px-2">
          {amount}
        </div>
        <div
          onClick={() => increaseAmount(id)}
          className="flex-1 flex justify-center items-center cursor-pointer"
        >
          <IoMdAdd />
        </div>
      </div>
    </div>
  );
};

export default InAndDe;
