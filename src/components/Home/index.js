import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct } from "../../Redux/Slice/productdata";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);
  console.log(items);
  useEffect(() => {
    let dispatchedata = dispatch(fetchproduct());
    console.log("UseEffect");
  }, []);
  return (
    <>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-200">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            Hurry Up...!!
          </h1>
          <p className="mb-8 leading-relaxed ">
            Shopping is like a treasure hunt, where you explore the aisles and
            racks, searching for that perfect item that will make your heart
            skip a beat.
          </p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Scroll Down Faster...!!!
          </h1>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone_8087-3877.jpg?w=2000"
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mt-20">All Products </h1>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto  ">
          <div className="flex flex-wrap -m-4 ">
            {items.data?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full h-55 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200"
                >
                  <Link to={`/product/${item.id}`}>
                    <div className="block relative h-48  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        src={item.image}
                        className="object-Cover object-center block  rounded"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">{item.price}Rs</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
