import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/posts", {
      method: "Get",
    });
    const res = await response.json();
    if (res) {
      setData(res.posts);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data &&
        data.map((postData) => {
          return <PostCard key={postData.id} data={postData} />;
        })
      )}
    </>
  );
};

export default Home;
