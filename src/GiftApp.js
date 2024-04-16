import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { BuscaGift } from "./components/BuscaGift";

const GiftApp = () => {
  const [categorias, setCategorias] = useState([
    "One Piece"
   
  ]);

  return (
    <>
      <h2 className="title">GiftApp</h2>
      <AddCategory  setCategorias={setCategorias}/>
      <hr />

      
        {categorias.map((e) => {
          return <BuscaGift  key={e}  e={e} />;
        })}
      
    </>
  );
};

export default GiftApp;
