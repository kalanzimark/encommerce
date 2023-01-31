import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 90%;
    max-width: 430px;
    margin: auto;
    background: #dbd8da;
    overflow-y: scroll;
`;
export const ProductHeader = styled.div``;

export const ProductContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
export const TimeSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 0 0.4em 0;
    p {
        font-weight: 700;
    }
`;
export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0 0.6em 0;
    margin-bottom: 25px;
    p {
        font-size: 0.95rem;
        font-weight: 500;
    }
`;
export const CartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    p:last-child {
        font-size: 0.9rem;
        color: red;
        align-self: flex-start;
        font-weight: bold;
        margin-top: -7px;
    }
`;
export const ProductSection = styled.div`
    padding: 17px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
`;

export const MainProductWrapper = styled.div`
    box-shadow: 0px 6px 11px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #f3f3f3;
`;
export const MainProduct = styled.div`
    padding: 1.625em;
    display: flex;
    align-items: center;
    /* 
    box-shadow: 0px 6px 11px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px; */
`;
export const ImageWrapper = styled.div`
    width: 60%;
    margin: 15px auto 0 auto;
    display: flex;
    align-items: center;
    img {
        max-width: 100%;
    }
`;
export const ImageLapse = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    div {
        background-color: #403d3d;
        height: 8px;
        width: 8px;
        margin-bottom: 25px;

        border-radius: 100%;
    }
`;
export const ProductDetails = styled.div`
    h4 {
        font-size: 1rem;
        margin-bottom: 2px;
    }
    p {
        margin-top: 0;
        font-size: 0.85rem;
        color: #383737;
        opacity: 81%;
    }
`;
export const ProductFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border: 2px solid black;

    p {
        margin: 0;
        padding: 0;
        color: #6c2966;
    }

    button {
        color: #fffbfb;
        padding: 5px 1em;
        border-radius: 0.85em;
        background-color: #6c2966;
        border: none;
    }
`;
export const InfoSection = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 12px;
    margin-top: 7px;
`;
export const Rating = styled.div`
    display: flex;
    margin: 0;
    justify-content: flex-start;
    align-items: center;

    p {
        font-weight: 500;
        margin-right: 12px;
        margin-bottom: 5px;
        margin-top: 1.2em;
        font-size: 0.8rem;
    }
`;

export const ProductTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 700;

    h4 {
        margin: 0;
    }
`;
export const Favourite_icon = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h1 {
        margin-right: 8px;
    }
`;
export const Description = styled.div`
    p {
        font-size: 12px;
        color: #383737;
        opacity: 94%;
        margin: 0;
    }
`;
export const Reviews = styled.div`
    border-bottom: 0.5px solid #a7a6a7;
    margin-top: 15px;
    margin-bottom: 10px;

    h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1.87em;
    }
`;
export const OrderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: #6b2b68;
        font-weight: 700;
        font-size: 1.5rem;
    }
    div {
        background-color: #6b2b68;
        padding: 8px 3.5em;
        color: white;
        font-size: 11px;
        border-radius: 10px;
    }
`;
