import styled from "styled-components";

export const AppFooter = styled.div`
    background: rgb(171, 24, 127);
    background: linear-gradient(
        180deg,
        #ffffff 0%,
        #e950dd 0.01%,
        #1992b8 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 20px;
    position: sticky;
    bottom: 0;
    div {
        margin: 0 0.75em;
        font-size: 1.5rem;
    }
`;
