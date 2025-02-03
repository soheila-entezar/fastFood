import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loading";
export default function CategoryList() {
    const [loading, setLoading] = useState(true)
    const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchcategorys = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategorys(response.data);
setLoading(false)
    };
    fetchcategorys();
  }, []);

  const renderContent=()=>{
    if(loading){
        return <Loading/>
    }
    return(<ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            همه فست فودها
          </a>
        </li>
       
        {categorys.map((category)=>(
          <>
           <li className="nav-item" key={category.id}>
            <a className="nav-link" href="#">
              {category.name}
            </a>
          </li>
          </>
        ))}
      </ul>)
       
   
  }

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
