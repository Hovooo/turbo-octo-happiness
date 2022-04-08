import React, { useState } from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch";

export default function Shop() {
  const {get, loader} = useFetch();
  const [items, setItems] = useState([]);
  get("https://covid-shop-mcs.herokuapp.com/")
  .then(data => setItems(data))
  return (
    <div className="shop">
      {loader && "Загружаю"}
      {items.map((item) => (
        <Item class="bg-fuchsia-100" key={item.id} info={item}  />
      ))}
    </div>
  );
}
