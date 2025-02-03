import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";
export default function CategoryList({ filterItems ,children }) {
  const [loading, setLoading] = useState(true);
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchcategorys = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategorys(response.data);
      setLoading(false);
    };
    fetchcategorys();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" onClick={() => filterItems("")} href="#">
              همه فست فودها
            </a>
          </li>

          {categorys.map((category) => (
            <>
              <li className="nav-item" key={category.id}>
                <a
                  className="nav-link"
                  onClick={() => filterItems(category.id)}
                  href="#"
                >
                  {category.name}
                </a>
              </li>
            </>
          ))}
        </ul>
       {children}
      </div>
    );
  };

  return (
    <nav className="container mt-n5">
      <div
        className="bg-white rounded-3 shadow-lg py-4 d-flex align-items-center"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
}
