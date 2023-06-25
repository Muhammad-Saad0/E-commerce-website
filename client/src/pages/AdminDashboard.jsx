import React from "react";
import {
  CurrencyDollarIcon,
  ShoppingBagIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import OrdersChart from "../components/OrdersChart";

const AdminDashboard = () => {
  const [orders, setOrders] = useState(34);
  const [products, setProducts] = useState(80);
  return (
    <div className="mt-[75px] px-4">
      <h1 className="text-3xl font-semibold py-4">
        Dashboard
      </h1>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col shadow-xl w-[300px] rounded-[4px] gap-4 border border-gray-400 border-opacity-70 overflow-hidden">
          <h4 className="font-semibold text-2xl px-3 pt-1">
            Earnings
          </h4>
          <div className="flex flex-row px-3 justify-between">
            <h5 className="font-light opacity-70 text-xl">
              ${7568}
            </h5>
            <CurrencyDollarIcon className="text-[#A829E0] w-6 h-6" />
          </div>
          <div className="bg-[#A829E0] pb-1"></div>
        </div>

        <div className="flex flex-col shadow-xl w-[300px] rounded-[4px] gap-4 border border-gray-400 border-opacity-70 overflow-hidden">
          <h4 className="font-semibold text-2xl px-3 pt-1">
            Products
          </h4>
          <div className="flex flex-row px-3 justify-between">
            <h5 className="font-light opacity-70 text-xl">
              {products}
            </h5>
            <ShoppingBagIcon className="text-[#65A0BB] w-6 h-6" />
          </div>
          <div className="bg-[#65A0BB] pb-1"></div>
        </div>

        <div className="flex flex-col shadow-xl w-[300px] rounded-[4px] gap-4 border border-gray-400 border-opacity-70 overflow-hidden">
          <h4 className="font-semibold text-2xl px-3 pt-1">
            Orders
          </h4>
          <div className="flex flex-row px-3 justify-between">
            <h5 className="font-light opacity-70 text-xl">
              {orders}
            </h5>
            <ClipboardDocumentIcon className="text-[#EF4609] w-6 h-6" />
          </div>
          <div className="bg-[#EF4609] pb-1"></div>
        </div>
      </div>
      <OrdersChart
        total={150}
        processing={30}
        shipped={70}
        delivered={50}
      />
    </div>
  );
};

export default AdminDashboard;
