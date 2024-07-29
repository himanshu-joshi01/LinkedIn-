import { useContext } from "react"
import { Postcontext } from "../utils/Context"
import Post from "./Post";





const Posts = () => {
    
    const [post,setPost]=useContext(Postcontext);
    const handleLike=(postIndex)=>{
      setPost((prev)=>{
       return prev.map((item,index)=>{
        // return (index===postIndex)?{...item, likes:item.likes+1} : {item};
        if (index+1 === postIndex) return { ...item, likes: item.likes+1,like:!item.like  };
        return item;
        })
      // return post.map((post,index)=> (index==postIndex)?{setPost((prev)=>({...prev,post.likes:{likes+1}})}:{})
    })
    }

    const handleUnlike=(postIndex)=>{
      setPost((prev)=>{
       return prev.map((item,index)=>{
        // return (index===postIndex)?{...item, likes:item.likes+1} : {item};
        if (index+1 === postIndex) return { ...item, likes: item.likes-1 , like: !item.like };
        return item;
        })
      // return post.map((post,index)=> (index==postIndex)?{setPost((prev)=>({...prev,post.likes:{likes+1}})}:{})
    })
    }
  return (
  <>
  {post.map((post)=><Post key={post.id} index={post.id} handleUnlike={handleUnlike} handleLike={handleLike} post={post}/>)}
  </>
  )
}

export default Posts