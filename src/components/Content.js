import React, { useEffect, useState, useRef } from "react";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import { slice } from 'lodash'
import Button from 'react-bootstrap/Button';



function Content(props) {
  const [news, setNews] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(10)
  const initialNews = slice(news, 0, index)

  const searchRef = useRef(null);
  const [query, setQuery] = useState('tesla');
  const apiKey = "f9ef95604f2940e2b4ffb0f359f3fc90";
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-12-13&sortBy=publishedAt&apiKey=${apiKey}`;

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setNews(data.articles);
    } catch (e) {
      console.log(e, "Error occured");
    }
  }

  useEffect(() => {
    fetchData();
  }, [query]);

  useEffect(() => {
        setQuery(props.category);
        setIndex(10);
        setIsCompleted(false);

  }, [props.category]);

  function handleSearch(){
    const q = searchRef.current.value;
    setQuery(q);
    setIndex(10);
    setIsCompleted(false);
  }

  const loadMore = () => {
    setIndex(index + 5)
    if (index >= news.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          {initialNews.map((data, index) => {
            return <Cards key={index} data={data} />;
          })}
          {isCompleted?<Button className="btn btn-danger" disabled>All Done</Button>:<Button className="btn btn-warning" onClick={loadMore}>Load More</Button>}
        </div>
        <div className="offset-md-1 col-md-3">
          <Sidebar searchRef={searchRef} handleSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default Content;
