import React, { useContext, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const SideBarCart = () => {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  // Dynamically load the PayPal script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AepO-tR6EyEcPgEdmcIJVpx9hM8TJTyu-iTDEQI_y8k7PkwMJM0T3KPur_HR2w62MvXzRfSRzT2Qephj&currency=USD";
    script.async = true;
    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total, // Amount from the cart total
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                "Payment successful, thank you " + details.payer.name.given_name
              );

              clearCart();
              toggleSidebar();
            });
          },
        })
        .render("#paypal-button-container"); // This renders the PayPal button in the specified container
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [total, clearCart, toggleSidebar]);

  return (
    <div className="flex items-center text-[20px] ml-8 justify-between w-full md:flex">
      <div
        onClick={toggleSidebar}
        className="cursor-pointer flex relative md:bg-transparent md:hover:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:text-blue-700"
      >
        <BsBag className="text-2xl" />
        <div className="bg-red-500 absolute flex justify-center -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full">
          {itemAmount}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35]px`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Bag({itemAmount})
          </div>
          <div
            onClick={toggleSidebar}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl md:bg-transparent md:hover:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:text-blue-700" />
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-y-2 h-[800px] lg:h-[640px] overflow-x-hidden border-b overflow-y-auto">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>

        {/* Cart Total and Clear Button */}
        <div className="flex gap-y-3 mt-2 w-full justify-between items-center text-xl">
          <div className="uppercase font-semibold">
            <span>Total :</span> ${parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={() => clearCart()}
            className="rounded-xl cursor-pointer py-4 w-12 h-12 flex items-center justify-center text-xl md:bg-transparent md:hover:bg-transparent md:p-0 md:hover:text-red-700 md:dark:text-red-700"
          >
            <FiTrash />
          </div>
        </div>

        {/* Checkout Links */}

        {/* PayPal Button Container */}
        <div
          id="paypal-button-container"
          className="mt-[80px] flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default SideBarCart;
