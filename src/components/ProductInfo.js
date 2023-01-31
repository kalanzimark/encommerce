import React, { useState } from "react";
import {
    Container,
    ProductHeader,
    ProductContainer,
    TimeSection,
    TopSection,
    ProductSection,
    MainProduct,
    MainProductWrapper,
    ImageWrapper,
    ImageLapse,
    InfoSection,
    Rating,
    ProductTitle,
    Description,
    Favourite_icon,
    Reviews,
    OrderSection,
    CartWrapper,
} from "./css/productInfo_styled";

import product1 from "./assets/product1.png";

function ProductInfo() {
    const [trimInfo, setTrimInfo] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);
    const info =
        "Lorem ipsum dolor sit amet consectetur. Massa ut innon sollicitudin volutpat sit convallis orcipellentesque. Accumsan ipsum velit maecenas pretium pretium ac. Etiam dolor eget netus venenatis ametenim nunc urna. Elit at scelerisque quis ultricies sagittis maecenas pellentesque";

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
                        <TopSection>
                            <p
                                style={{
                                    fontSize: "1.56em",
                                    color: "#603872",
                                }}
                            >
                                <i class="fa-solid fa-chevron-left"></i>
                            </p>
                            <p>Product Details</p>
                            <CartWrapper>
                                <p
                                    style={{
                                        fontSize: "1.56em",
                                        color: "#603872",
                                    }}
                                >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </p>
                                <p>3</p>
                            </CartWrapper>
                        </TopSection>
                    </ProductHeader>
                </ProductContainer>
                <ProductSection>
                    <MainProductWrapper>
                        <MainProduct>
                            <p
                                style={{
                                    color: "#603872",
                                    fontSize: "25px",
                                    opacity: "55%",
                                }}
                            >
                                <i class="fa-solid fa-chevron-left"></i>
                            </p>
                            <ImageWrapper>
                                <img src={product1} alt="product1" />
                            </ImageWrapper>
                            <p
                                style={{
                                    color: "#603872",
                                    fontSize: "25px",
                                    opacity: "55%",
                                }}
                            >
                                <i class="fa-solid fa-chevron-right"></i>
                            </p>
                        </MainProduct>
                        <ImageLapse>
                            <div></div>
                            <div></div>
                            <div></div>
                        </ImageLapse>
                    </MainProductWrapper>
                    <InfoSection>
                        <div>
                            <Rating>
                                <p style={{ fontWeight: "bold" }}>Rating</p>
                                <p
                                    style={{
                                        color: "gold",
                                    }}
                                >
                                    <i class="fa-solid fa-star fa-lg"></i>
                                    <i class="fa-solid fa-star fa-lg"></i>
                                    <i class="fa-solid fa-star fa-lg"></i>
                                    <i class="fa-solid fa-star fa-lg"></i>
                                    <i class="fa-solid fa-star fa-lg"></i>
                                </p>
                            </Rating>
                            <ProductTitle>
                                <h4>Beats by Dre</h4>
                            </ProductTitle>
                        </div>
                        <Favourite_icon
                            style={{
                                fontSize: "3.43rem",
                                marginTop: "6px",
                                cursor: "pointer",
                                color: "red",
                            }}
                            onClick={() => setIsFavourite(!isFavourite)}
                        >
                            {isFavourite ? (
                                <i class="fa-solid fa-heart"></i>
                            ) : (
                                <i class="fa-regular fa-heart"></i>
                            )}
                        </Favourite_icon>
                    </InfoSection>
                    <Description>
                        <p>
                            {trimInfo ? info : `${info.substring(0, 150)}.....`}
                        </p>
                        <span
                            style={{
                                fontSize: "0.75rem",
                                color: "blue",
                                fontWeight: "500",
                                cursor: "pointer",
                            }}
                            onClick={() => setTrimInfo(!trimInfo)}
                        >
                            {trimInfo ? "Show less" : "Read more..."}
                        </span>
                    </Description>
                    <Reviews>
                        <h3>Reviews</h3>
                    </Reviews>
                    <OrderSection>
                        <p>$200</p>
                        <div>Buy</div>
                    </OrderSection>
                </ProductSection>
            </Container>
        </>
    );
}

export default ProductInfo;
