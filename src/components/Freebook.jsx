import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CS from "../../public/CS.json"
import EEE from "../../public/EEE.json"
import ME from "../Books/ME";
import MT from "../Books/MT";
import CE from "../Books/CE"
import Cards from "./Cards";

function FreeBook(){
    const filterData=CS.filter((data)=>data.category==="Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    console.log(filterData)
    return (
        <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
            <h1 className="font-bold text-xl pb-2 text-blue-700">Free Offered Records And Question Papers</h1>
            <p className="text-xl pb-2">Free records and question papers are offered below you can also head to the search bar and look for books
                relevant to your semester/year
            </p>
        </div>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item = {item} key={item.id}/>
        ))}
      </Slider>
        </div>
        </>
    );
}

export default FreeBook