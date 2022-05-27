import React from 'react';
import styled from 'styled-components';

function ServiceItem({image, title, paragraph}) {
    return (
        <ServiceItemStyled>
            <div className="service-card">
                <h2>{image}</h2>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceItemStyled>
    )
}

const ServiceItemStyled = styled.div`
    background-color: var(--sidebar-color);
    border-left:1px solid var(--border-color);
    border-top:1px solid var(--border-color);
    border-right:1px solid var(--border-color);
    border-bottom:8px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-bottom:8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .service-card{
        padding:1.2rem;
        h2{
            svg{
                color:var(--primary-color);
                font-size:2.8rem;
            }
        }
        h4{
            color: var(--font-color);
            font-size:1.3rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content:'';
                position: absolute;
                left: 0;
                bottom: 0;
                height: 3px;
                width: 4rem;
                background-color: var(--border-color);
                border-radius:10px;
            }
        }
        p{
            padding:0.8rem 0;
        }
    }
`;

export default ServiceItem;
