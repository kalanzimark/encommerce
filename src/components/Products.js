// added use context here
import React, { useState } from "react";

import {
    Container,
    ProductHeader,
    ProductContainer,
    TimeSection,
    InputSection,
    CartSection,
    SearchDetails,
    ProductSection,
    MainProduct,
    ProductPrice,
    ImageWrapper,
    ProductDetails,
    ProductFooter,
    CartWrapper,
    HeartIcon,
    Stars,
    ProductButton,
} from "./css/products_styled";
// import product1 from "./assets/product1.png";
// import product2 from "./assets/product2.png";
// import product3 from "./assets/product3.png";
// import product4 from "./assets/product4.png";
// import product5 from "./assets/product5.png";
// import product6 from "./assets/product6.png";
import products from "../data";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Products() {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <>
            <Container>
                <ProductContainer>
                    <ProductHeader>
                        <TimeSection>
                            <p>19:20</p>
                            <p className="header_icons">
                                <i class="fa-solid fa-wifi fa-sm"></i>
                                <i class="fa-solid fa-signal fa-sm"></i>
                                <i class="fa-solid fa-battery-half fa-lg"></i>
                            </p>
                        </TimeSection>
                        <CartSection>
                            <p>
                                <i class="fa-solid fa-chevron-left"></i>
                            </p>
                            <CartWrapper>
                                <p>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </p>
                                <p>3</p>
                            </CartWrapper>
                        </CartSection>
                        <InputSection>
                            <input
                                type="text"
                                name=""
                                placeholder="search..."
                                id=""
                            />
                            <p>
                                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                            </p>
                        </InputSection>
                        <SearchDetails>
                            <p>200 products</p>
                            <div>
                                <label for="items">Sort By</label>

                                <select name="items" id="items">
                                    <option disabled selected></option>
                                    <option value="price">Highest Price</option>
                                    <option value="price">Lowest Price</option>
                                    <option value="date">Oldest</option>
                                    <option value="date">Newest</option>
                                </select>
                            </div>
                        </SearchDetails>
                    </ProductHeader>
                </ProductContainer>
                <ProductSection>
                    {products.map((product) => {
                        const {
                            pid,
                            title,
                            subDescription,
                            price,
                            description,
                            isfavourite,
                            rating,
                            img,
                        } = product;
                        return (
                            <MainProduct>
                                <ProductPrice>
                                    <p>${price}</p>
                                </ProductPrice>
                                <ImageWrapper>
                                    <img src={img} alt={title} />
                                </ImageWrapper>
                                <ProductDetails>
                                    <h4>{title}</h4>
                                    <p>
                                        {subDescription}
                                        <Link
                                            to={`/productinfo/${pid}`}
                                            style={{
                                                color: "blue",
                                                marginLeft: "3px",
                                                cursor: "pointer",
                                                textDecoration: "none",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Details...
                                        </Link>
                                    </p>
                                    <ProductFooter>
                                        <HeartIcon
                                            onClick={() =>
                                                setIsFavourite(!isFavourite)
                                            }
                                        >
                                            {isFavourite ? (
                                                <i class="fa-solid fa-heart"></i>
                                            ) : (
                                                <i class="fa-regular fa-heart"></i>
                                            )}
                                        </HeartIcon>
                                        <Stars>
                                            {Array(rating)
                                                .fill()
                                                .map((_, i) => {
                                                    return (
                                                        <i class="fa-solid fa-star "></i>
                                                    );
                                                })}
                                        </Stars>
                                        <ProductButton>
                                            <p>Buy</p>
                                        </ProductButton>
                                    </ProductFooter>
                                </ProductDetails>
                            </MainProduct>
                        );
                    })}
                </ProductSection>
                <Footer />
            </Container>
        </>
    );
}

export default Products;
