import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './../components/PrimaryButton';
function PricingCard({ plan, price, button, features, image }) {
    return (
        <PricinigCardStyled>
            <div className="icon">
                <img src={image} alt="" />
            </div>
            <h2>{plan}</h2>
            <h3>{price}</h3>
            {
                features.map((feature, i) => {
                    return <ul key={i}>
                        <li>{feature}</li>
                    </ul>
                })
            }
            <div className="button">
                <PrimaryButton btn={button} />
            </div>
        </PricinigCardStyled>
    )
}

const PricinigCardStyled = styled.div`
        background-color: var(--sidebar-color);
        border-left:1px solid var(--border-color);
        border-top:1px solid var(--border-color);
        border-right:1px solid var(--border-color);
        border-bottom:8px solid var(--border-color);
        transition: all .4s ease-in-out;
        padding:1.2rem;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover{
            border-bottom:8px solid var(--primary-color);
            transform: translateY(3px);
        }
        .icon{
            height:4rem;
            width:4rem;
            margin:1rem 0;
        }
        h2{
            font-size:1.6rem;
            margin-bottom:0.5rem;
        }
        h3{
            font-size:1.2rem;
            font-weight:400;
            margin-bottom:1rem;
        }
        ul{
            margin-bottom:0.5rem;
            li{
                color:var(--paragraph-color);
            }
        }
        .button{
            margin-top:0.5rem;
        }
`;

export default PricingCard;
