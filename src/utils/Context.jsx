/* eslint-disable react/prop-types */
import {prodAxios} from "../utils/Axios";
import { createContext, useEffect, useState } from "react";
import Data from "./Data";


export const ProductContext = createContext();
export const UserContext = createContext();
export const Postcontext = createContext();
export const Routecontext= createContext();

const Context = (props) => {


  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [route , setRoute] = useState("");
  const [like , setLike]=useState();


  const allUsers = () =>{
    prodAxios.get("/users").then((user) => setUser(user.data));
  }
  
  const allProducts = () =>{
    prodAxios.get("/products").then((prod) => setData(prod.data));
    

  }
      
  const allPosts=()=>{
    // postAxios.get("/posts").then((post) => setPost(post.data.posts));
    setPost(Data);
   
  }


  useEffect(() => {
    allProducts();
    allUsers();
    allPosts();
   
  },[]);



return (
    <>
    <ProductContext.Provider value={[data, setData]}>
    <UserContext.Provider value={[user, setUser]}>
      <Postcontext.Provider value={[post, setPost]}>
        <Routecontext.Provider value={[route, setRoute]}>
    {props.children}
    </Routecontext.Provider>
    </Postcontext.Provider>
    </UserContext.Provider>
    </ProductContext.Provider>
    </>
  );
};

export default Context;