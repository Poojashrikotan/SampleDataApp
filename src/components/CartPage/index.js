import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function CartPage() {
  const param = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);
  const filteredData = items.data?.filter((item) => item.id == param.id);
  console.log(filteredData);
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {filteredData?.map((item) => {
            return (
              <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      <img
                        alt="product"
                        className="lg:w-1/2 w-full lg:h-50 object-cover object-center rounded"
                        src={item.image}
                      />
                    </span>
                    <span className="mt-1 text-gray-500 text-sm"></span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {" "}
                      {item.title}
                    </h2>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                    {/* <p className="leading-relaxed">{item.description}</p> */}
                    {/* <a className="text-indigo-500 inline-flex items-center mt-4">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
