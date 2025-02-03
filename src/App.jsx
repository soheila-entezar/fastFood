import { useEffect, useReducer, useState } from "react";
import Header from "./component/Header/header";
import CategoryList from "./component/CategoryList/categoryList";
import Loading from "./component/Loading/loading";
import FastFoodList from "./component/FastFoodList/fastFoodList";
import "./App.css";
import axios from "./axios";
import SearchBar from "./component/SearchBar/searchBar";
import notFound from "./assets/images/404.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);
  const fetchData = async (categoryId = null) => {
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(true);
    setFastFoodItems(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme={"dark"} />;
    }
    if (fastFoodItems.length===0) {
      return (
        <>
          <div className="alert alert-warning text-center">ایتم مورد نظر شما یافت نشد</div>

          <img className="mx-auto mt-5 d-block" src={notFound} alt="not found" />
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  return (
    <>
      <div className="wrapper bg-faded-dark">
        <Header />
        <CategoryList filterItems={filterItems}>
          <SearchBar search={searchItems} />
        </CategoryList>
        <div className="container mt-4">{renderContent()}</div>
      </div>
    </>
  );
}

export default App;
