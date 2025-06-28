import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import Newsletter from "../../components/defaults/Newsletter";

const BlogPost = () => {
  return (
    <Container>
      <div className="w-[90vw] mx-auto">
        <h2 className="lg:text-[66px] text-[32px] lg:w-[70%] font-bold mt-14 lg:mt-[10vh]">
          How One Transfer Sparked a Bakery in Nairobi
        </h2>
        <p className="text-[14px] lg:w-[60%]">
          When Daniel’s cousin in Kenya had a business idea but lacked startup
          cash, Daniel sent the first $700 through Transactor — and helped
          launch a thriving local bakery.
        </p>

        <img
          src="/assets/blog-img.png"
          alt="Blog Image"
          className="lg:h-[504px] mt-10 w-[100%]"
        />

        <div className="lg:w-[60%] mx-auto">
          <h2 className="lg:text-[42px] text-[28px] font-bold mt-10 lg:mt-20">
            Learn what you need to know before you invest in a virtual currency
          </h2>
          <p className="lg:text-[24px] mt-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="lg:text-[24px] mt-10">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

          <h2 className="text-[28px] lg:w-[70%] font-bold mt-20">
            How do I know how secure is my wallet?
          </h2>
          <p className="lg:text-[24px] mt-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="lg:text-[24px] mt-10">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <Newsletter />

      <div className="mt-20">
        <Footer />
      </div>
    </Container>
  );
};

export default BlogPost;
