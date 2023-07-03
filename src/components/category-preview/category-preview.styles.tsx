import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
        }
    `

export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    `

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 20px;
        column-gap: 15px;
        }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
    }
    `
