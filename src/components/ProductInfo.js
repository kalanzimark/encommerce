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
} from "./css/productInfo_styled";

import product1 from "./assets/product1.png";

function ProductInfo() {
    const info =
        "Lorem ipsum dolor sit amet consectetur. Massa ut innon sollicitudin volutpat sit convallis orcipellentesque. Accumsan ipsum velit maecenas pretium pretium ac. Etiam dolor eget netus venenatis ametenim nunc urna. Elit at scelerisque quis ultricies sagittis maecenas pellentesque";

    const [trimInfo, setTrimInfo] = useState(false);

    return (
        <>
            <Container>
                <ProductContainer>
                    <ProductHeader>
                        <TimeSection>
                            <p>19:20</p>
                            <p>others</p>
                        </TimeSection>
                        <TopSection>
                            <p>lefticon</p>
                            <p>Product Details</p>
                            <p>rightcart</p>
                        </TopSection>
                    </ProductHeader>
                </ProductContainer>
                <ProductSection>
                    <MainProductWrapper>
                        <MainProduct>
                            <p>left</p>
                            <ImageWrapper>
                                <img src={product1} alt="product1" />
                            </ImageWrapper>
                            <p>right</p>
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
                                <p>Rating</p>
                                <p>stars icons</p>
                            </Rating>
                            <ProductTitle>
                                <h4>Beats by Dre</h4>
                            </ProductTitle>
                        </div>
                        <Favourite_icon>
                            <h1>Heart</h1>
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
                                cursor: "pointer",
                            }}
                            onClick={() => setTrimInfo(!trimInfo)}
                        >
                            {trimInfo ? "show less" : "read more..."}
                        </span>
                    </Description>
                    <Reviews>
                        <h3>Reviews</h3>
                    </Reviews>
                    <OrderSection>
                        <p>$200</p>
                        <button>Buy</button>
                    </OrderSection>
                </ProductSection>
            </Container>
        </>
    );
}

export default ProductInfo;
