import React from 'react';
import styled from 'styled-components';

function TestimonialItem({ text, img }) {
    return (
        <TestimonialItemStyled>
            <p> {text}</p>
            <div className="client-img">
                <img src={img} alt="" />
            </div>
        </TestimonialItemStyled>
    )
}

const TestimonialItemStyled = styled.div`
    background-color: var(--border-color);
    margin:1rem 0;
    width:100%;
    margin:0.5rem auto;
    padding:2.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    p{
        margin:.5rem 0;
        text-align:center;
    }
    .client-img{
        margin-top:1rem;
        border-radius: 50%;
        border:2px solid var(--border-color);
        width:4rem;
        height:4rem;
        img{
            border:2px solid var(--border-color);
            width:100%;
            height:100%;
            border-radius:50%;
        }
    }
`;

export default TestimonialItem;
