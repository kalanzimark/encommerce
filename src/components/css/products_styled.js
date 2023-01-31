import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 90%;
    max-width: 430px;
    margin: auto;
    background: #dbd8da;
    overflow-y: scroll;
    position: relative;
    z-index: 2;
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
export const CartSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 0 0.6em 0;
    p {
        font-size: 25px;
        color: #603872;
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

export const InputSection = styled.div`
    display: flex;
    border-radius: 15px;
    background-color: white;
    justify-content: space-between;
    align-items: center;

    input {
        width: 80%;
        margin: auto;
        font-size: 0.95rem;
        padding: 0.8em 0 0.8em 0;
        border: none;
    }
    ::placeholder {
        color: #000000;
        opacity: 45%;
    }
    p {
        margin: auto;
        color: #4d4d4d;
        opacity: 55%;
    }
`;

export const SearchDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    padding: 10px;
    font-size: 12px;
    select {
        border: none;
        background-color: transparent;
    }
`;

export const ProductSection = styled.div`
    padding: 17px;
    margin-top: 5px;
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(182px, 1fr));
    justify-items: center;
    gap: 7px;
`;

export const ProductPrice = styled.div`
    width: fit-content;
    height: 30px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin-top: -15px;
    margin-bottom: 1.25em;
    align-items: center;
    padding: 0 15px;
    background-color: #f3f3f3;
    border: 1px solid #dbd8da;
    font-size: 0.75em;
    font-weight: bold;
`;
export const MainProduct = styled.div`
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    background: #f3f3f3;
    box-shadow: 0px 6px 11px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;
export const ImageWrapper = styled.div`
    width: 100%;
    min-width: 100px;
    height: 150px;
    border-radius: 10px;
    display: flex;

    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    img {
        max-width: 100%;
        object-fit: contain;
        max-height: 100%;
    }
`;
export const ProductDetails = styled.div`
    h4 {
        font-size: 0.9rem;
        margin-bottom: 2px;
    }
    p {
        margin-top: 0;
        font-size: 0.65rem;
        color: #383737;
        opacity: 81%;
    }
`;
export const ProductFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 7px 0;
    margin-bottom: 5px;
`;
export const HeartIcon = styled.div`
    color: red;
    cursor: pointer;
`;
export const Stars = styled.div`
    color: gold;
`;
export const ProductButton = styled.div`
    padding: 5px 1em;
    border-radius: 0.85em;
    background-color: #6c2966;
    border: none;
    p {
        color: white;
        font-weight: 700;
        opacity: 100%;
    }
`;

export const Footer = styled.div``;
