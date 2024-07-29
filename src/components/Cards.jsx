import { useContext } from "react";
import Card from "./Card";
import { ProductContext } from "../utils/Context";

const Cards = () => {
 
  const products = useContext(ProductContext);

  const [data, setData] = products;

  const handleStock = (cardIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === cardIndex) return { ...item, isStock: !item.isStock };
        return item;
      });
    });
  };

  return (
    <>
      <div className="h-auto w-auto py-10 mt-10 gap-20 flex justify-center flex-wrap items-center ">
        {data.map((item, index) => (
          <Card
            key={index}
            index={index}
            values={item}
            handleStock={handleStock}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
