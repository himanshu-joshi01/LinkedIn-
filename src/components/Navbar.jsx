
import { NavLink } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs"
import { FaSearch, FaUserFriends, FaSuitcase, FaBell    } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaSquarePiedPiper } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
    <nav className=" h-12  bg-white flex justify-center items-center font-semibold gap-8 text-black fixed top-0 left-0 right-0 z-10">
    <NavLink
          className={(e) => {
            return e.isActive
              ? "underline underline-offset-4 text-xs"
              : "underline underline-offset-4 text-xs";
          }}
          to="/"
        >
          <BsLinkedin className='rounded-md' size={36} />
        </NavLink>

       <NavLink  className={(e) => {
            return e.isActive
              ? "flex items-center  bg-slate-100 text-xs"
              : "flex items-center text-xs";
          }}
          to="#">
       <form className='flex gap-2 items-center border border-zinc-300 px-3 w-80'>
        <FaSearch size={20}/>
       <input className='h-8 bg-slate-100 w-full outline-none ' placeholder='Search' type="text" />
        </form>
          
        </NavLink>

      <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center border-b-[3px] border-black text-xs "
              : "flex flex-col items-center text-xs";
          }}
          to="/"
        >
            <BiSolidHome size={28}/>
          Home
        </NavLink>

        <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center border-b-[3px] border-black text-xs"
              : "flex flex-col items-center text-xs";
          }}
          to="/MyNetwork"
        >
            <FaUserFriends size={28}/>
          My Network
        </NavLink>

        <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center text-red-0 border-b-[3px] border-black text-xs"
              : "flex flex-col items-center text-xs";
          }}
          to="https://www.linkedin.com/jobs/"
        >
            <FaSuitcase size={28}/>
          Jobs
        </NavLink>


        <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center border-b-[3px] border-black text-xs"
              : "flex flex-col items-center text-xs ";
          }}
          to="/Messaging"
        >
            <AiFillMessage size={28}/>
          Messaging
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center border-b-[3px] border-black text-xs"
              : "flex flex-col items-center text-xs";
          }}
          to="/Notifications"
        >
            <FaBell size={28} />
          Notifications
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center border-b-[3px] border-black  text-xs"
              : "flex flex-col items-center text-xs";
          }}
          to="/Himanshu"
        >
   <img className="h-7 w-7 object-cover rounded rounded-full" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creationhill-1681010.jpg&fm=jpg" alt="" />

         <h1 className='text-xs'>Me</h1> 
        </NavLink>

        <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center border-b-[3px] border-black text-xs "
              : "flex flex-col items-center text-xs";
          }}
          to="/cards"
        >

         <HiMiniSquares2X2 size={28}/>
          For Business
        </NavLink>

        <NavLink
          className={(e) => {
            return e.isActive
              ? "flex flex-col items-center border-b-[3px] border-black text-xs"
              : "flex flex-col items-center text-xs";
          }}
          to="https://www.linkedin.com/premium/survey/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F&referenceId=rKyVEccpS3i1cLFBlklWZQ%3D%3D&upsellOrderOrigin=premium_nav_upsell_text&utype=job"
        >
            <FaSquarePiedPiper size={28}/>
          Try Premium for &#8377; 0 
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar