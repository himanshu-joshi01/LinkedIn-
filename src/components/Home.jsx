import { Link } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { RiArticleFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="flex justify-center w-full flex-wrap text-black gap-4 ">
      <aside className="rounded-lg w-[20%] h-full flex flex-col gap-2 text-xs">
        <div className="rounded-lg h-full bg-white flex  flex-col gap-3 text-xs border border-zinc-300 ">
        <div className="h-52 border-b-2 px-4">
          <div className="flex flex-col items-center py-2">
            <img src="" alt="" />
            <h1 className="text-base font-semibold">Himanshu Joshi</h1>
            <p className="text-xs opacity-90">
              Java | Full stack Web Developer | Mern Stack
            </p>
          </div>
        </div>
        <div className="border-b-2 py-2 flex flex-col justify-center px-4 gap-3" >
          <h4>
            Profile viewer <span className="mx-8">25</span>
          </h4>
          <h4 >
            Post Impressions <span className="mx-2">45</span>
          </h4>
        </div>
        <div className="py-2 border-b-2 px-4">
          <h4 className="">Boost your job search</h4>
          <h4 className="pb-2">
            <b> Try Premium for &#8377;0</b>
          </h4>
        </div>
        <div className="flex items-center gap-2 px-4 pb-3">
          <FaBookmark />
          <h4>Saved items</h4>
        </div>
        </div>
        <div className="rounded-lg bg-white p-5 flex flex-col gap-3 text-xs border border-zinc-300">
        <div className="flex flex-col gap-3 py-3 ">
          <Link className="text-sky-500 font-semibold">Groups</Link>
          <Link className="flex items-center justify-between text-sky-500 font-semibold">Events <FaPlus className="text-black" size={16}/></Link>
          <Link className="text-sky-500 font-semibold">Followed Hashtags</Link>
        </div>
        <div className="flex justify-center text-sm font-semibold text-zinc-800">
          <h4>Discover more</h4>
        </div>
        </div>
      </aside>
      <main className="rounded-lg w-[50%] ">
        <div id="mainHeader" className="px-5 py-4 h-30 bg-white border border-zinc-300 rounded rounded-xl">
          <div className="flex gap-2">
            <img
              className="rounded-full object-cover h-12 w-12 bg-green-500"
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creationhill-1681010.jpg&fm=jpg"
              alt=""
            />
            <form className=" w-[85%]">
              <input
                className="outline-none border border-zinc-400 w-[100%] h-12 rounded-3xl px-5 w-96"
                type="text"
                placeholder="Start a post, try writing with AI"
              />
            </form>
          </div>
          <div className="flex flex-wrap mt-4 justify-around">
            <Link
              className="flex items-center gap-2"
              to={"#"}
            >
              {" "}
              <AiFillPicture /> Media
            </Link>
            <Link
              className="flex items-center gap-2"
              to={"#"}
            >
              <SlCalender /> Event
            </Link>
            <Link
              className="flex items-center gap-2"
              to={"#"}
            >
              <RiArticleFill /> Write article
            </Link>
          </div>
         
        </div>
        <hr className="my-6 border border-zinc-300" />
        <Posts></Posts>
      </main>
      <aside className="rounded-lg w-[20%] border border-zinc-300 bg-white"></aside>
    </div>
  );
};

export default Home;
