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
import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";
import product4 from "./assets/product4.png";
import product5 from "./assets/product5.png";
import product6 from "./assets/product6.png";
import { Link } from "react-router-dom";

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
                                    <option></option>
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
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product1} alt="product1" />
                        </ImageWrapper>
                        <ProductDetails>
                            <h4>Beats by Dre</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Quis sit
                                non sociis leo vitae condimentum. Congue viverra
                                sit.
                                <Link
                                    to="/productinfo"
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
                                    onClick={() => setIsFavourite(!isFavourite)}
                                >
                                    {isFavourite ? (
                                        <i class="fa-solid fa-heart"></i>
                                    ) : (
                                        <i class="fa-regular fa-heart"></i>
                                    )}
                                </HeartIcon>
                                <Stars>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                </Stars>
                                <ProductButton>
                                    <p>Buy</p>
                                </ProductButton>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product2} alt="product2" />
                        </ImageWrapper>
                        <ProductDetails>
                            <h4>Sony XP400</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Quis sit
                                non sociis leo vitae condimentum. Congue viverra
                                sit.
                                <Link
                                    to="/productinfo"
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
                                    onClick={() => setIsFavourite(!isFavourite)}
                                >
                                    {isFavourite ? (
                                        <i class="fa-solid fa-heart"></i>
                                    ) : (
                                        <i class="fa-regular fa-heart"></i>
                                    )}
                                </HeartIcon>
                                <Stars>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                </Stars>
                                <ProductButton>
                                    <p>Buy</p>
                                </ProductButton>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product3} alt="product3" />
                        </ImageWrapper>
                        <ProductDetails>
                            <h4>Occulus 3000</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Quis sit
                                non sociis leo vitae condimentum. Congue viverra
                                sit.
                                <Link
                                    to="/productinfo"
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
                                    onClick={() => setIsFavourite(!isFavourite)}
                                >
                                    {isFavourite ? (
                                        <i class="fa-solid fa-heart"></i>
                                    ) : (
                                        <i class="fa-regular fa-heart"></i>
                                    )}
                                </HeartIcon>
                                <Stars>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                </Stars>
                                <ProductButton>
                                    <p>Buy</p>
                                </ProductButton>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product4} alt="product4" />
                        </ImageWrapper>
                        <ProductDetails>
                            <h4>Apple Airpods</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Quis sit
                                non sociis leo vitae condimentum. Congue viverra
                                sit.
                                <Link
                                    to="/productinfo"
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
                                    onClick={() => setIsFavourite(!isFavourite)}
                                >
                                    {isFavourite ? (
                                        <i class="fa-solid fa-heart"></i>
                                    ) : (
                                        <i class="fa-regular fa-heart"></i>
                                    )}
                                </HeartIcon>
                                <Stars>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                </Stars>
                                <ProductButton>
                                    <p>Buy</p>
                                </ProductButton>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product5} alt="product5" />
                        </ImageWrapper>
                        <ProductDetails>
                            <h4>Playstation 4</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Quis sit
                                non sociis leo vitae condimentum. Congue viverra
                                sit.
                                <Link
                                    to="/productinfo"
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
                                    onClick={() => setIsFavourite(!isFavourite)}
                                >
                                    {isFavourite ? (
                                        <i class="fa-solid fa-heart"></i>
                                    ) : (
                                        <i class="fa-regular fa-heart"></i>
                                    )}
                                </HeartIcon>
                                <Stars>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                </Stars>
                                <ProductButton>
                                    <p>Buy</p>
                                </ProductButton>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product6} alt="product6" />
                        </ImageWrapper>
                        <ProductDetails>
                            <h4>Lenovo</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Quis sit
                                non sociis leo vitae condimentum. Congue viverra
                                sit.
                                <Link
                                    to="/productinfo"
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
                                    onClick={() => setIsFavourite(!isFavourite)}
                                >
                                    {isFavourite ? (
                                        <i class="fa-solid fa-heart"></i>
                                    ) : (
                                        <i class="fa-regular fa-heart"></i>
                                    )}
                                </HeartIcon>
                                <Stars>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                    <i class="fa-solid fa-star fa-sm"></i>
                                </Stars>
                                <ProductButton>
                                    <p>Buy</p>
                                </ProductButton>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                </ProductSection>
            </Container>
        </>
    );
}

export default Products;
