import React, { useEffect, useState } from "react";
import Spinnner from "../Spinnner";
import Product from "../Product";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setLoading(false);
      setPost(data);
      console.log(data);
    } catch (err) {
      console.log("error fetching");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-[100vw] w-11/12 mx-auto pt-4 relative top-16">
      {loading ? (
        <Spinnner></Spinnner>
      ) : post.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6 pt-5">
          {post.map((post) => (
            <Product key={post.id} post={post}></Product>
          ))}
        </div>
      ) : (
        <div>no item found</div>
      )}
    </div>
  );
}
