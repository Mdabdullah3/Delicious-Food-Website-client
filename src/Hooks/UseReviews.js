import { useEffect, useState } from "react";

const UseReviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://delicious-food-djab.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
    setLoading(false);
  }, [loading]);
  return [review, loading];
};

export default UseReviews;
