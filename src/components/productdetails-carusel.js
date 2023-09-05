import React from 'react'
import SliderImage from 'react-zoom-slider';



export const ProductdetailsCarusel = ({productDetails}) => {
    console.log(productDetails,'productDetails')


    const data = [
        {
            image:
            // productDetails?.image,
                "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg",
            text: "img1"
        },
        {
            image:
            // productDetails?.image,
                "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg",
            text: "img2"
        },
        {
            image:
            // productDetails?.image,
                "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
            text: "img3"
        }
    ];
  return (
    <div>
           <SliderImage
            data={data}
            width="500"
            showDescription={true}
            // height="200" 
            direction="right"
        />

    </div>
  )
}
