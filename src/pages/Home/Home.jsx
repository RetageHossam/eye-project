import { Link } from "react-router-dom";
import HomeContent from "./HomeContent/HomeContent";
import HomeCatogory from "./HomeContent/HomeCatogory";
import HomeNews from "./HomeContent/HomeNews";
import HomeSubscribe from "./HomeContent/HomeSubscribe";


export default function Home() {

  return( <>
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl "></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl "></div>

      <div className=" relative flex flex-col justify-center items-center  w-full  py-24">
        <div className="bg-transparent border-amber-700 rounded-3xl border-2 px-4 py-2.5">
          <span className="flex items-center gap-3">
            <span className="relative inline-flex size-3 rounded-full bg-amber-600"></span>
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-amber-600"></span>
            </span>
            <span className="text-white font-medium">مرحباً بك في عدسة</span>
          </span>
        </div>
        <h1 class="text-center mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6  ">
          اكتشف <span class="text-amber-600"> فن </span> <br />
          التصوير الفوتوغرافي
        </h1>
        <p className="text-2xl text-neutral-400 mt-4 text-center ">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br />
          التصوير.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <a
            class="bg-amber-700 p-4 rounded-3xl text-white inline-flex items-center justify-center gap-2 group"
            href="/blog"
            data-discover="true"
          >
            <span>استكشف المقالات</span>
            <svg
              class="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
          <a
            class="bg-transparent border-2 border-neutral-400 hover:border-amber-500 hover:bg-amber-500/20 transition-all p-4 rounded-3xl text-white inline-flex items-center justify-center gap-2"
            href="/about"
            data-discover="true"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>اعرف المزيد</span>
          </a>
        </div>
        <div className="grid grid-cols-4 m-12 gap-3  ">
          <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center">
            <i class="fa-solid fa-newspaper text-2xl mb-2 text-amber-500 "></i>
            <h2 className="text-3xl font-bold text-amber-400">+50</h2>
            <p className="text-amber-400">مقالة</p>
          </div>
          <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center">
            <i class="fa-solid fa-users text-2xl mb-2 text-amber-500 "></i>
            <h2 className="text-3xl font-bold text-amber-400">+10ألف</h2>
            <p className="text-amber-400">قارئ</p>
          </div>
          <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center">
            <i class="fa-solid fa-folder-open text-2xl mb-2 text-amber-500 "></i>
            <h2 className="text-3xl font-bold text-amber-400">4</h2>
            <p className="text-amber-400">تصنيفات</p>
          </div>
          <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center">
            <i class="fa-solid fa-pen-nib text-2xl mb-2 text-amber-500 "></i>
            <h2 className="text-3xl font-bold text-amber-400">6</h2>
            <p className="text-amber-400">كاتب</p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
<div className="container">
  <HomeContent/>

</div>
<div className="container">
  <HomeCatogory/>

</div>
<div className="container">
  <HomeNews/>

</div>
<div className="container">
  <HomeSubscribe/>

</div>
    </section>
    </>
  );
}
