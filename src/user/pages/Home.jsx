import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div
        style={{ height: "500px" }}
        className="flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white"
      >
        <div
          style={{ height: "500px", backgroundColor: "rgba(0,0,0,0.4)" }}
          className="w-full flex flex-col justify-center items-center"
        >
          <h1 className="text-6xl font-bold mb-2">Wonderful Books</h1>
          <p>Gift your family and friends a book</p>
          <div>
            <input
              type="text"
              placeholder="Search a Book"
              className="bg-white p-2 rounded-3xl w-100 text-black mt-2"
            />
            <FaSearch
              className="text-gray-500 cursor-pointer"
              style={{ marginTop: "-28px", marginLeft: "360px" }}
            />
          </div>
        </div>
      </div>
      {/* New Arrivals */}
      <section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h1 className="text-3xl my-2">Explore Our Latest Collections</h1>
        <div className="md:grid grid-cols-4 md:my-0">
          {/* Duplicating Card */}
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-blue-950 font-bold text-xl">Author</h2>
              <h3 className="text-lg">Title</h3>
              <p className="font-bold text-red-950">Price</p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="text-center my-10">
          <Link to={"/books"} className="bg-black p-3 text-white font-black">
            Explore More...
          </Link>
        </div>
      </section>
      {/* Authors */}
      <section className="md:grid grid-cols-2 items-center gap-10 p-5 md:px-40">
        <div className="text-center">
          <h2 className="text-2xl font-bold">FEATURED AUTHORS</h2>
          <h3>Captivates with every word.</h3>
          <p className="my-5 text-justify">
            Welcome to the Author Spotlight section of our bookstore website!
            This feature is designed to celebrate writers, showcase their
            creative journeys, and help readers discover the minds behind their
            favorite books.
          </p>
          <p className="text-justify">Our Author Features include:</p>
          <p className="text-justify my-3">
            <span className="font-black">✨ Author Profiles :</span>
            Get to know each author through detailed profiles that highlight
            their biography, writing style, achievements, and personal
            inspirations.
          </p>
          <p className="text-justify my-3">
            <span className="font-black">📖 Published Works :</span>
            Explore a curated list of books written by the author with quick
            access to book details, reviews, and purchase options.
          </p>
          <p className="text-justify my-3">
            <span className="font-black">🎤 Interviews & Insights :</span>
            Exclusive interviews, behind-the-scenes stories, and writing tips
            that offer a deeper look into the author’s creative world.
          </p>
        </div>
        <div className="p-5 flex items-center justify-center">
          <img
            src="https://t3.ftcdn.net/jpg/05/95/01/12/360_F_595011253_eKBTTflO6sC18iz0CV1mRRUtdKKxC0re.jpg"
            alt="Author"
          />
        </div>
      </section>
      {/* Testimony */}
      <section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
        <h1>TESTIMONIALS</h1>
        <h1>See What Others Are Saying</h1>
        <div className="my-5 flex flex-col justify-center items-center">
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/042/055/246/small/ai-generated-businessman-portrait-portrait-of-businessman-png.png" alt="" />
          <h3 className="my-3">Luca King</h3>
          <p className="text-justify">This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
        </div>
      </section>
    </>
  );
}

export default Home;
