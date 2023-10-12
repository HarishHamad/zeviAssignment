import React, { useEffect, useRef, useState } from "react";
import { Input, Carousel, Card, Row } from "antd";
import backgroundImage from "./images/girl.jpg"; // Import the image
import ProductList from "./ProductList";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false);

  const [trendingClothes] = useState([
    {
      id: 1,
      name: "Shirt with puffed sleeves",
      image:
        "https://blackberrys.com/cdn/shop/files/formal-shirt-in-white-alfed-blackberrys-clothing-1.jpg?v=1685949877",
    },
    {
      id: 2,
      name: "Linen jumpsuit",
      image:
        "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      id: 3,
      name: "White formal suit",
      image:
        "https://media.theeverygirl.com/wp-content/uploads/2020/07/fashion-girl-the-everygirl-3.jpg",
    },
    {
      id: 4,
      name: "Pattern dresses",
      image:
        "https://toyszoom.net/cdn/shop/products/Girls-Clothes-Sets-Summer-new-Kids-Clothes-Girls-Sets-Teens-T-Shirt-with-Denim-Pants-2pcs_e184c32c-e6f6-4e57-8b79-480e3c3d1c89_large.jpg?v=1627504938",
    },
    {
      id: 5,
      name: "Leather shirt dress",
      image:
        "https://toyszoom.net/cdn/shop/products/Girls-Clothes-Sets-Summer-new-Kids-Clothes-Girls-Sets-Teens-T-Shirt-with-Denim-Pants-2pcs_451bfde0-18de-4100-ac4a-cefb7b87d52f_grande.jpg?v=1627504927",
    },
  ]);

  const popularSuggestions = [
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dresses",
    "Solid tshirts",
  ];
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the background covers the entire viewport height
  };

  const handleSearch = () => {
    navigate("/product");
  };

  const handleSearchInputFocus = () => {
    setIsSearchFocused(true);
  };

  // const handleSearchInputBlur = () => {
  //   setIsSearchFocused(false);
  // };
  

  return (
    <div style={backgroundStyle}>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "900px",
          paddingTop: "20px",
        }}
      >
        <div className="col-sm-12">
          <Input
            placeholder="Search for clothes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onPressEnter={handleSearch}
            onFocus={handleSearchInputFocus}
            // onBlur={handleSearchInputBlur}
            style={{
              width: "100%", // Full width on small screens
              height: "40px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              padding: "10px",
              marginBottom: isSearchFocused ? "10px" : "0",
              marginLeft: 0, // Reset the margin
            }}
          />
        </div>

        {isSearchFocused && (
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Row gutter={16}>
              {trendingClothes.map((item) => (
                <div key={item.id} style={{ margin: "10px" }}>
                  <img
                    alt={item.name}
                    src={item.image}
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      width: "150px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/product");
                    }}
                  />
                  <h4>{item.name}</h4>
                </div>
              ))}
            </Row>
            <div style={{ flexDirection: "column", alignItems: "left" }}>
              <h3 style={{ textAlign: "left" }}>Popular suggestions</h3>
              <div style={{ textAlign: "left", padding: "10px" }}>
                {popularSuggestions.map((item, index) => (
                  <div key={index} style={{ padding: "5px" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
