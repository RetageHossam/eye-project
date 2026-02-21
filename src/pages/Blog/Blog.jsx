import React from "react";
import BlogContent from "./BlogContent/BlogContent";

export default function Blog() {
  return ( <>
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto mt-10  px-4 sm:px-6 lg:px-8 text-center">
        <div className=" flex justify-center items-center gap-2 mb-6">
          <span className=" text-white w-[10%] rounded-3xl py-2 bg-amber-700/45 ">
        <i className="fa-solid fa-book"></i>
          مدونتنا
        </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          استكشف <span className="text-amber-600">مقالاتنا</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
        
      </div>
    </div>
   <BlogContent/>
  
</>
  )
    
}
