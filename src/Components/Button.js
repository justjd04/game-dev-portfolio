import styled from "styled-components";

export const ButtonContainer = styled.button`
    color: black;
    background: transparent;
    font-size: 1.4rem;
    FONT-WEIGHT: 700;
    outline: none;
    border: solid black .05rem;
    padding: 0.3rem 0.4rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transiton: all hover 0.5s linear;
    &:hover {
        text-decoration-color: rgba(207, 0, 15, 1);
        border: solid black .05rem;
        transform: scale(1.05);
    }
    &:focus {
        outline: none;
    }
`