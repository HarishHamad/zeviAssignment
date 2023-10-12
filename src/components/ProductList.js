import React, { useState, useEffect } from "react";
import { Input, Row, Col, Card, Rate, Select, Checkbox, Divider } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import { Collapse } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "../components/Product.css";

const { Meta } = Card;
const { Panel } = Collapse;

const productsData = [
  {
    id: 1,
    type: "Shirt with puffed sleeves",
    brand: "H&M",
    image:
      "https://blackberrys.com/cdn/shop/files/formal-shirt-in-white-alfed-blackberrys-clothing-1.jpg?v=1685949877",
    price: 19.99,
    rating: 4,
  },
  {
    id: 2,
    type: "Linen jumpsuit",
    brand: "H&M",
    image:
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    price: 29.99,
    rating: 3,
  },
  {
    id: 3,
    type: "White formal suit",
    brand: "H&M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Er25BehOPvuAiwpJ_8aRt3OHJuwJQk0LatN1Ux5a6TgSqlG5wXvnOtqHcXurib0i0bI&usqp=CAU",
    price: 39.99,
    rating: 5,
  },
  {
    id: 4,
    type: "Pattern dresses",
    brand: "H&M",
    image:
      "https://thumbs.dreamstime.com/b/smiling-fashionable-woman-bright-colorful-outfit-coquettish-young-female-model-elegant-vivid-multicolored-green-red-yellow-211304384.jpg",
    price: 49.99,
    rating: 1,
  },
  {
    id: 5,
    type: "Leather shirt dress",
    brand: "H&M",
    image:
      "https://thumbs.dreamstime.com/b/fashion-concept-elegance-simplicity-black-perfect-glamorous-style-fancy-clothes-shop-feather-decorations-elegant-woman-model-206874582.jpg",
    price: 59.99,
    rating: 4,
  },
  {
    id: 6,
    type: "Another product",
    brand: "Mango",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAmUh_k9P-bgtNGTtX2uKlImdanv-wYdwpOxOd9UbUw9L_DVBsOJC-bo8hfzrH7A0kOA&usqp=CAU",
    price: 39.99,
    rating: 3,
  },
  {
    id: 7,
    type: "Another product",
    brand: "Mango",
    image:
      "https://i.pinimg.com/736x/77/d0/9e/77d09ed34e72ed380b9dd6bd08c63cb8.jpg",
    price: 39.99,
    rating: 2,
  },
  {
    id: 8,
    type: "Another product",
    brand: "Mango",
    image:
      "https://as1.ftcdn.net/v2/jpg/02/08/05/42/1000_F_208054230_eQjcb6SLQApK1uBxS65XnPVtHg53JLDo.jpg",
    price: 39.99,
    rating: 3,
  },
];

const ProductList = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [likedProducts, setLikedProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(null);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState(null);

  useEffect(() => {
    applyFilters();
  }, [brandFilter, priceFilter, selectedRatingFilter]);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filtered = productsData.filter((product) =>
      product.type.toLowerCase().includes(searchText)
    );
    setQuery(searchText);
    setFilteredProducts(filtered);
  };

  const applyFilters = () => {
    let filtered = productsData;

    console.log(brandFilter, priceFilter, selectedRatingFilter);

    // Apply brand filter
    if (brandFilter.length > 0) {
      filtered = filtered.filter((product) =>
        brandFilter.includes(product.brand)
      );
    }

    // Apply price range filter
    if (priceFilter && priceFilter.length > 0) {
      filtered = filtered.filter((product) => {
        const price = product.price;
        if (priceFilter.includes("range1") && price <= 30) return true;
        if (priceFilter.includes("range2") && price > 30 && price <= 60)
          return true;
        if (priceFilter.includes("range3") && price > 60 && price <= 90)
          return true;
        return false;
      });
    }

    // Apply rating filter
    if (selectedRatingFilter && selectedRatingFilter.length > 0) {
      filtered = filtered.filter((product) =>
        selectedRatingFilter.includes(product.rating)
      );
    }

    setFilteredProducts(filtered);
  };

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };
  const goBack = () => {
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Sidebar for filters */}
      <div
        style={{
          marginLeft: "30px",
          marginTop: "100px",
          width: "100%",
          maxWidth: "300px",
        }}
      >
        {/* <button onClick={()=>{navigate("/")}}><ArrowLeftOutlined /></button> */}
        <h3>Search Result</h3>
        <Collapse
          accordion
          defaultActiveKey={["brandFilter"]}
          bordered={false}
          style={{ margin: 0, marginBottom: 16 }}
        >
          <Panel
            header="Brand"
            key="brandFilter"
            style={{ border: "none", backgroundColor: "white" }}
          >
            <Checkbox.Group
              value={brandFilter}
              onChange={(values) => setBrandFilter(values)}
            >
              <Col span={12}>
                <Checkbox value="H&M">H & M</Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value="Mango">Mango</Checkbox>
              </Col>
              {/* Add more brand checkboxes as needed */}
            </Checkbox.Group>
          </Panel>
        </Collapse>
        <hr style={{ width: "200px", marginRight: "220px", color: "silver" }} />
        <Collapse
          accordion
          defaultActiveKey={["priceFilter"]}
          bordered={false}
          style={{ margin: 0, marginBottom: 16 }}
        >
          <Panel
            header="Price Ranges"
            key="priceFilter"
            style={{ border: "none", backgroundColor: "white" }}
          >
            <Checkbox.Group
              style={{ width: "130px", margin: "10px 0" }}
              placeholder="Filter by Price"
              type="number"
              value={priceFilter}
              onChange={(values) => setPriceFilter(values)}
            >
              <Checkbox value="range1">0-30</Checkbox>
              <Checkbox value="range2">30-60</Checkbox>
              <Checkbox value="range3">60-90</Checkbox>
            </Checkbox.Group>
          </Panel>
        </Collapse>
        <hr style={{ width: "200px", marginRight: "220px", color: "silver" }} />
        <Collapse
          accordion
          defaultActiveKey={["ratingFilter"]}
          bordered={false}
          style={{ margin: 0, marginBottom: 16 }}
        >
          <Panel
            header="Ratings"
            key="ratingFilter"
            style={{ border: "none", backgroundColor: "white" }}
          >
            <Checkbox.Group
              value={selectedRatingFilter}
              onChange={(values) => setSelectedRatingFilter(values)}
            >
              <Col span={12}>
                <Checkbox value={5} style={{ color: "yellow" }}>
                  ★ ★ ★ ★ ★
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value={4} style={{ color: "yellow" }}>
                  ★ ★ ★ ★
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value={3} style={{ color: "yellow" }}>
                  ★ ★ ★
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value={2} style={{ color: "yellow" }}>
                  ★ ★
                </Checkbox>
              </Col>
              <Col span={12}>
                <Checkbox value={1} style={{ color: "yellow" }}>
                  ★
                </Checkbox>
              </Col>
            </Checkbox.Group>
          </Panel>
        </Collapse>
      </div>

      {/* Main content */}
      <div style={{ marginRight: "150px", width: "100%" }}>
        <Input
          placeholder="Search for products..."
          value={query}
          onChange={handleSearch}
          style={{
            width: "80%",
            height: "40px",
            border: "1px solid #ccc",
            borderRadius: "20px",
            padding: "10px",
            marginBottom: "50px",
            marginLeft: "30px",
          }}
        />
        <Row gutter={16}>
          {filteredProducts.map((product, index) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <div className="product-container" style={{marginBottom:"90px"}}>
  <img className="product-image" alt={product.type} src={product.image} />
  <label className="product-heading">View Product</label>



                <Meta
                  style={{ fontWeight: "bold" }}
                  title={product.type}
                  description={`$${product.price}`}
                />
                <Rate
                  style={{ fontSize: "16px" }}
                  allowHalf
                  defaultValue={product.rating}
                  disabled
                />
                {likedProducts.includes(product.id) ? (
                  <HeartFilled
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "20px",
                      color: "red",
                      marginRight: "01px",
                    }}
                    onClick={() => toggleLike(product.id)}
                  />
                ) : (
                  <HeartOutlined
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "20px",
                      marginRight: "01px",
                    }}
                    onClick={() => toggleLike(product.id)}
                  />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductList;
