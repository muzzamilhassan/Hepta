import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Gallery = () => {

  
  return (
    <div>
      <Hero  image='/images/slider-4.jpg.webp' title={'Gallery'}/>
      {/* <!-- section_1 -->  */}
<div>
  <div className="max-w-screen-2xl mx-auto px-4 pt-16 lg:pt-24 relative bg-gray-50">
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-1 flex-col">
          {/* img_01 */} 
          <img className="object-cover h-full" src="https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80" />
        </div>
        <div className="hidden md:flex flex-1 flex-row gap-2">
          <div className="flex flex-1 flex-col">
            {/* img_02 */} 
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1666433723497-38d1d053185b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEwNDU&ixlib=rb-4.0.3&q=80" />
          </div>
          <div className="hidden md:flex flex-1 flex-col">
            {/* img_03 */} 
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1665048110211-91d0b74c421c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="hidden md:flex flex-1 flex-row gap-2">
          <div className="flex flex-1 flex-col">
            {/* img_04 */}
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1666297599033-09b318f2c8b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExMjk&ixlib=rb-4.0.3&q=80" />  
          </div>
          <div className="hidden md:flex flex-1 flex-col">
            {/* img_05 */}
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1664713815297-9ce06950c022?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80" />
          </div>
        </div>                        
        <div className="flex flex-1 flex-col">
          {/* img_06 */}
          <img className="object-cover h-full" src="https://images.unsplash.com/photo-1666060519824-796d5638d809?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDExOTQ&ixlib=rb-4.0.3&q=80" />
        </div>
      </div>
    </div>
  </div>
  {/* section_2 */} 
  <div className="max-w-screen-2xl mx-auto px-4 pt-2 pb-10 lg:pt-2 lg:pb-10 relative bg-white">
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          {/* img_01 */} 
          <img className="object-cover h-full" src="https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80" alt />
        </div>
      </div>
      <div className="flex flex-1">
        <div className="grid grid-cols-2 gap-2">
          <div>
            {/* img_02 */}
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400" alt />
          </div>
          <div>
            {/* img_03 */}
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400" alt />
          </div>
          <div>
            {/* img_04 */}
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400" alt />
          </div>
          <div>
            {/* img_05 */}
            <img className="object-cover h-full" src="https://images.unsplash.com/photo-1666303349374-c4cf8bc9eaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer/>
    </div>

  );
};

export default Gallery;
