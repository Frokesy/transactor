import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import Newsletter from "../../components/defaults/Newsletter";
import { ArrowLeft, ArrowRight } from "../../components/svgs/Icons";

const Blog = () => {
  const repeatedItem = {
    title: "From Sydney to Soweto: How one Transfer changed a life",
    excerpt:
      "When Joseph moved from Johannesburg to Sydney for a better job, he never imagined he’d be able to fund his sister’s university dream back home.",
    image: "/assets/blog-img.png",
    tag: "Transfer",
    author: "Joseph",
    date: "August 2, 2025",
    avatar: "/assets/avatar.png",
  };

  const blogItems = Array(6).fill(repeatedItem);

  return (
    <Container>
      <h2 className="text-[66px] text-center w-[80%] mx-auto font-bold mt-[15vh]">
        Where every transfer tells a story - your story.
      </h2>

      <div className="mt-[20vh] w-[90vw] mx-auto">
        {/* Header & Filter Buttons */}
        <div className="flex justify-between flex-col lg:flex-row mb-20 space-y-6 lg:space-y-0">
          <h2 className="text-[42px] font-semibold">Latest Posts</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#EF2D57] py-4 px-6 rounded-full">All</button>
            <button className="bg-gray-800 py-4 px-6 rounded-full text-white">
              Transactions
            </button>
            <button className="bg-gray-800 py-4 px-6 rounded-full text-white">
              Beneficiaries
            </button>
            <button className="bg-gray-800 py-4 px-6 rounded-full text-white">
              Tutorials
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogItems.map((item, index) => (
            <div
              key={index}
              className="space-y-6 bg-[#000] text-[#fff] p-6 rounded-[40px]"
            >
              <img
                src={item.image}
                alt="Blog"
                className="w-full h-[215px] object-cover"
              />
              <button className="bg-[#EF2D57] text-[18px] font-semibold py-2 px-4 rounded-full">
                {item.tag}
              </button>
              <h2 className="text-[22px] font-semibold">{item.title}</h2>
              <p className="text-[14px] pb-10">{item.excerpt}</p>

              {/* Author section */}
              <div className="flex items-center space-x-3 p-4 border-t-2 border-[#404040]">
                <img
                  src={item.avatar}
                  alt="Author"
                  className="w-[60px] h-[60px] rounded-full object-cover"
                />
                <div>
                  <p className="text-[16px] font-semibold uppercase">
                    {item.author}
                  </p>
                  <p className="text-[14px] uppercase">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dummy Pagination */}
        <div className="mt-16 flex justify-center items-center space-x-4">
          <ArrowLeft />
          <button className="bg-[#EF2D57] text-white px-4 py-2 rounded-full">
            1
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
            2
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
            3
          </button>
          <ArrowRight />
        </div>
      </div>

      <Newsletter />

      <div className="mt-20">
        <Footer />
      </div>
    </Container>
  );
};

export default Blog;
