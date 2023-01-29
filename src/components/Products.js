import React from "react";

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
} from "./css/products_styled";
import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";
import product4 from "./assets/product4.png";
import product5 from "./assets/product5.png";
import product6 from "./assets/product6.png";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Products() {
    return (
        <>
            <Container>
                <ProductContainer>
                    <ProductHeader>
                        <TimeSection>
                            <p>19:20</p>
                            <p>others</p>
                        </TimeSection>
                        <CartSection>
                            <p>lefticon</p>
                            <p>rightcart</p>
                        </CartSection>
                        <InputSection>
                            <input
                                type="text"
                                name=""
                                placeholder="search..."
                                id=""
                            />
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
                                <i class="fa-solid fa-user"></i>
                                <div>
                                    <p>staricon</p>
                                </div>
                                <button>Buy</button>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product2} alt="product1" />
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
                                <FavoriteIcon />
                                <div>
                                    <p>staricon</p>
                                </div>
                                <button>Buy</button>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product3} alt="product1" />
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
                                <i class="fa-solid fa-user"></i>
                                <div>
                                    <p>staricon</p>
                                </div>
                                <button>Buy</button>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product4} alt="product1" />
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
                                <i class="fa-solid fa-coffee fa-xl"></i>
                                <div>
                                    <p>staricon</p>
                                </div>
                                <button>Buy</button>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product5} alt="product1" />
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
                                <i class="fas fa-heart"></i>

                                <div>
                                    <p>staricon</p>
                                </div>
                                <button>Buy</button>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                    <MainProduct>
                        <ProductPrice>
                            <p>$200</p>
                        </ProductPrice>
                        <ImageWrapper>
                            <img src={product6} alt="product1" />
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
                                <i class="fa-solid fa-user"></i>
                                <div>
                                    <p>staricon</p>
                                </div>
                                <button>Buy</button>
                            </ProductFooter>
                        </ProductDetails>
                    </MainProduct>
                </ProductSection>
            </Container>
        </>
    );
}

export default Products;
