import styled from "styled-components";

export const Container = styled.div`
    * {
        all: revert;
    }
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
`;
export const CartSection = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const InputSection = styled.div`
    display: flex;
    input {
        width: 100%;
        margin: auto;
        font-size: 0.9rem;
        border-radius: 15px;
        padding: 12px;
        border: none;
    }
    ::placeholder {
        color: #000000;
        opacity: 45%;
    }
`;

export const SearchDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;

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
    width: 60%;
    min-width: 100px;
    min-height: 150px;
    object-fit: contain;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        max-width: 100%;
    }
`;
export const ProductDetails = styled.div`
    h4 {
        font-size: 1rem;
        margin-bottom: 2px;
    }
    p {
        margin-top: 0;
        font-size: 0.75rem;
        color: #383737;
        opacity: 81%;
    }
`;
export const ProductFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

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
export const Footer = styled.div``;