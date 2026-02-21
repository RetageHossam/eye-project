import Fqr from './Fqr';
import KnowUs from './KnowUs';
import RateUs from './RateUs';

export default function WhoAreWe() {
  return (
    <div>
<section className="relative py-24 overflow-hidden">
  <div className="absolute inset-0 bg-[#0a0a0a]" />
  <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
  </div>
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="text-center mb-12 ">
     <div className=" justify-center flex items-center  ">
         <span className=" text-amber-600 bg-transparent border-amber-700 rounded-3xl border-2 px-4 py-2.5text-small w-[15%]  justify-center flex items-center    py-2.5 ">
            <span className="relative flex h-2 w-2 ml-2 mt-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
               <span className="relative flex h-2 w-2 ml-2 mt-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
من نحن

          </span>
     </div>
      </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
      مهمتنا هي <span className="text-amber-600">الإعلام والإلهام</span>
    </h1>
    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
      مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
      ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
      المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
    </p>
       
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center text-white">
        <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block" />
        <div className="text-3xl font-bold gradient-text mb-1">+2مليون</div>
        <div className="text-sm text-neutral-500">قارئ شهرياً</div>
      </div>
      <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center text-white">
        <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block" />
        <div className="text-3xl font-bold gradient-text mb-1">+500</div>
        <div className="text-sm text-neutral-500">مقالة منشورة</div>
      </div>
      <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center text-white">
        <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block" />
        <div className="text-3xl font-bold gradient-text mb-1">+50</div>
        <div className="text-sm text-neutral-500">كاتب خبير</div>
      </div>
      <div className="border-2 bg-neutral-800/20  hover:scale-105 transition-transform duration-300 border-neutral-600 rounded-3xl px-10 py-5 text-center text-white">
        <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block" />
        <div className="text-3xl font-bold gradient-text mb-1">+15</div>
        <div className="text-sm text-neutral-500">تصنيف</div>
      </div>
    </div>
  </div>
</section>
<RateUs/>
<KnowUs/>
<Fqr/>
    </div>
  );
}
