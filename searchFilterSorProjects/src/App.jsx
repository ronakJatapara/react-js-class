import React from 'react'
import { useState } from 'react';

export default function Operations() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("asc");
    const data = [
        { id: 1, title: "Backpack", price: 109.95, category: "men's clothing" },
        { id: 2, title: "Slim Fit T-Shirt", price: 22.3, category: "men's clothing" },
        { id: 3, title: "Cotton Jacket", price: 55.99, category: "men's clothing" },
        { id: 4, title: "Gold Bracelet", price: 695, category: "jewelery" },
        { id: 5, title: "Micropave Ring", price: 168, category: "jewelery" },
        { id: 6, title: "External Hard Drive", price: 64, category: "electronics" },
      ];
    const fd = data.filter((item) =>category === "all" ? data : item.category === category)
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sort == "asc" ? a.price - b.price : b.price - a.price));
  return (
    <div>
        <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
     <select onChange={(e) => setSort(e.target.value)}>
        <option value="asc">asc</option>
        <option value="desc">des</option>
      </select>
      {
       fd.map((e,i)=>{
            return (
            <p>{e.title} - {e.price}</p>
            )
        })
      }
    </div>

  )
}