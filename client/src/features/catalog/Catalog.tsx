import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog(){
    const [products,setProducts] = useState<product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    },[])
    return(
       <div>
        <ProductList products={products} />
       </div>
    )
}