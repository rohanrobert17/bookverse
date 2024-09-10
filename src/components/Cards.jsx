import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl h-full hover:scale-105 duration-200"> {/* Added h-full for consistent height */}
          <figure className="p-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover" /* Fixed height and object-cover */
            />
          </figure>
          <div className="card-body min-h-[200px] flex flex-col justify-between"> {/* min-h for consistency */}
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary bg-blue-700 border-blue-700">NEW</div>
            </h2>
            <p>Price: ₹{item.price}</p>
            <div className="card-actions justify-between cursor-pointer">
              <div className="badge badge-outline hover:bg-blue-700 hover:text-white duration-200">{item.category}</div>
              <div className="badge badge-outline hover:bg-blue-700 hover:text-white duration-200">Buy</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
