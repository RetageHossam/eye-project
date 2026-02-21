import { Input, Pagination } from "@heroui/react";
import SearchIcon from "./SearchIcon";
import { useEffect, useState } from "react";
import { getHome } from "../../Home/HomeFetch";
import Loader from "../../../compontents/Loader";
import ArticlesView from "./ArticlesView";

export default function BlogContent() {
  const [article, setArticle] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const displayedArticles =filteredArticles.length > 0 ? filteredArticles : article;
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    getHome(setArticle, setLoading);
  }, []);
  if (isloading === true) {
    return (
      <div className="bg-[#0a0a0a]">
        <Loader />
      </div>
    );
  }
  function filterCategory(category) {
    if (activeCategory !== category) {
      setActiveCategory(category);

      const filtered = article.filter((item) => item.category === category);

      setFilteredArticles(filtered);
    }
  }

  return (
    <section className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="w-full lg:w-auto">
            <Input
              classNames={{
                base: "w-full lg:w-[250px] h-10",
                mainWrapper: "h-full",
                input: "text-sm",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder=" ابحث عن مقال... "
              size="sm"
              endContent={<SearchIcon size={18} />}
              type="search"
            />
          </div>

          <div className="flex flex-wrap justify-start lg:justify-center gap-2">
            <button
              onClick={() => {
                setActiveCategory(null);
                setFilteredArticles([]);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border 
    ${
      activeCategory === null
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/30 hover:text-white"
    }`}
            >
              جميع المقالات
            </button>

            {["إضاءة", "بورتريه", "موبايل", "تقنيات", "فن"].map(
              (category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    filterCategory(category);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border 
    ${
      activeCategory === category
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-[#161616] text-neutral-400 border-[#262626] hover:border-orange-500/30 hover:text-white"
    }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
      <ArticlesView displayedArticles={displayedArticles} page={page} />

      <div className="flex justify-center my-10">
        <Pagination
          color={"warning"}
          total={Math.ceil(article.length / 6)}
          page={page}
          onChange={setPage}
        />
      </div>
    </section>
  );
}
