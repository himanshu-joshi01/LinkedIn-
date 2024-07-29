/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BiLike,BiSolidLike  } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { LiaShareSolid } from "react-icons/lia";
import { FaRegBookmark } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdOutlinePhoto } from "react-icons/md";
import { BsThreeDots,BsEmojiSmile  } from "react-icons/bs";
// eslint-disable-next-line react/prop-types
const Post = ({post , handleLike ,index , handleUnlike }) => {
  return (
    <>
      <div className="h-50 border border-zinc-300 px-5 py-3 mb-2 rounded rounded-xl bg-white  ">
      <div className="flex gap-5 justify-end items-center">
      <BsThreeDots size={18} />
          <RxCross2 size={24}/>
          </div>
        <postheader className="flex items-center justify-between mt-5">
          
          <div className="flex items-center gap-3" >
      
              <img className="h-12 w-12 bg-red-300 object-cover rounded rounded-full" src={post.user.profile_picture} alt="" />
          
             <h1 className="font-semibold capitalize
             ">{post.user.name}</h1>
          </div>
          <Link to={""} className="font-semibold text-sky-600">
            Follow
          </Link>
        </postheader>
        <postmain className="flex flex-col w-[100%] gap-5" >
          <h1 className="font-semibold uppercase">{post.title}</h1>
          <p className="text-sm">{post.content}</p>
          <img  className=" mt-5 h-60 w-[100%] " src={post.image} alt="" />
        </postmain>
        <socialdetails className="flex justify-between mt-3">
          <div className="flex gap-2 items-center">
<h1 className="text-xs">{post.likes}</h1> <BiLike size={14}/>

          </div>
          <div className="flex items-center gap-2">
        <h2 className="text-xs">96 Comment</h2>
          </div>
        </socialdetails>
        <socialactions className="flex justify-around mt-8">
  
          <button onClick={()=>(post.like)?handleLike(index):handleUnlike(index)} className="flex items-center gap-1">{(post.like)?<BiLike size={18}/>:<BiSolidLike size={18} /> }Like</button>
          <div className="flex items-center gap-1"><FaRegCommentDots  size={18}/> Comment</div>
          <div className="flex items-center gap-1"><LiaShareSolid  size={18}/> Share</div>
          <div className="flex items-center gap-1"><FaRegBookmark  size={18}/> Save</div>

        </socialactions>

        <postfooter className="flex items-center gap-2 mt-8 w-full">
        
          <img className="h-8 w-8 bg-red-300 object-cover rounded rounded-full" src={post.user.profile_picture} alt="" />
          
          <div className="flex rounded-3xl items-center justify-between border border-zinc-400 w-[90%]">
         <form className="w-[100%]"action="">
          <input className="outline-none p-5 h-10  w-full rounded rounded-3xl" type="text" placeholder="Add a comment...." name="" id="" />
         </form>
       <div className="flex items-center gap-4 px-5">
         <BsEmojiSmile size={18}/>
         <MdOutlinePhoto size={20}/>
         </div>
         </div>
        </postfooter>
      </div>
    </>
  );
};

export default Post;
