/* eslint-disable react/prop-types */

// import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Card({values,index,handleStock}) {
 
  const {image ,productname,description,isStock} = values;


  return (
  
        <div className="w-60 flex flex-col justify-center items-center border-2 border-zinc-300">
          <div className="h-32 w-full bg-zinc-200">
            <img className="h-full w-full object-center" src={image} alt="" />
          </div>
          <div className="w-full px-5 py-3 bg-zinc-400">
            <h3 className="font-semibold py-2">{productname}</h3>
            <p className="text-xs">
             {description}
            </p>
            <button onClick={()=>handleStock(index)}  className={`mt-4 px-2 py-1 g text-xs rounded ${isStock?"bg-green-500":"bg-red-500"}`}>
              {isStock ? "In Stock" : "Out of Stock"}
            </button>
            <Link to={`/card/${index}`} className={"px-2 py-1 text-xs mx-4 rounded bg-zinc-500"}>Know More </Link>

          </div>
        </div>
  );
}

export default Card;
