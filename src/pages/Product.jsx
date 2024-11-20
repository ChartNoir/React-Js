import React from "react";
import Displayprodut from "../API/displayproduct";
import TopSellingProducts from "../components/TopSellingProducts ";
export default function Product() {
  return (
    <div>
      <div
        style={{
          fontFamily: "en10",
        }}
      >
        <div className="ml-[100px]">
          <h1 className="flex justify-start max-sm:[450px]  mt-4 mb-6 text-[3rem] font-serif:Georgia items-center">
            Product
          </h1>
        </div>

        <TopSellingProducts />
      </div>
      <Displayprodut />
    </div>
  );
}
