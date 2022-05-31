import React, {useState} from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import image from './../images/Awatar/awatar.jpg';
import PrimaryButton from './../components/PrimaryButton';
import Carousel from 'react-elastic-carousel';
import TestimonialItem from './../components/TestimonialItem';

function AboutPage() {
	
	
    return (
        <AboutPageStyled>
            <Title title={'About'} span={'Me'} />
            <InnerLayout className="about-section">
                <div className="image-part">
                    <img src={image} alt="" />
                </div>
                <div className="info-part">
                    <h4>Who am i?</h4>
                    <h3>I am <span>Denis Georgiev</span></h3>
                    <p>Motivated computer technologies graduate from University of Roehampton with 2 years of non-commercial experience in using MERN stack technologies. </p>
                    <br></br>
					<p>Multiple times project leader in group university projects involving mobile application development, web application development, data science and cyber security. 
						Seeking to implement skills in JavaScript, Node.js, Express.js, React.js and MongoDB to provide value and meet business needs.</p>
                    <br></br>
                    <div className="information">
                        <ul>
                            <li>Full Name</li>
                            <li>Age</li>
                            <li>Nationality</li>
                            <li>Languages</li>
                            <li>Address</li>
                        </ul>
                        <ul className="details">
                            <li>: Denis Georgiev</li>
                            <li>: 25 Years</li>
                            <li> : Bulgarian</li>
                            <li> : English , Bulgarian</li>
                            <li> : 1 Joslin Avenue, NW9 5HW, London</li>
                        </ul>
                    </div>
                    <br></br>

                    
                    <a title="Download Resume" target="_blank" href="https://drive.google.com/file/d/1KQ87QQi1Hdq3o2ShSIMeCepiQc7W9Qmj/view?usp=sharing" download>
                    <PrimaryButton btn={'Download Cv'} />
                    </a>
                  
				
				
			
	
                </div>
            </InnerLayout>
        </AboutPageStyled>
    )
}


const AboutPageStyled = styled.div`
    .about-section{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:.8rem;
        @media screen and (max-width:800px){
            grid-template-columns: repeat(1, 1fr);
            grid-gap:1.5rem;
        }
        .image-part{
            height:100%;
            width:100%;
            img{
                width:90%;
                height:90%;
                border:2px solid var(--border-color);
				object-fit: cover;
            }
        }
        .info-part{
            h4{
                color:var(--primary-color);
                font-size:1.3rem;
            }
            h3{
                margin:1rem 0;
                font-size:1.9rem;
                span{
                    color:var(--primary-color);
                }
            }
            p{
                font-size:.9rem;
            }
            .information{
                margin:.5rem 0;
                width:90%;
                display:flex;
                justify-content: space-between;
                @media screen and (max-width:500px){
                    width:100%;
                }
                ul{
                    li{
                        margin:.5rem 0;
                        @media screen and (max-width:500px){
                            margin:1rem 0;
                            font-size:.9rem;
                        }
                    }
                }
                .details{
                    color:var(--paragraph-color);
                }
            }
           
        }
    }

    .rec-arrow{
        background-color: var(--border-color);
        &:hover{
            background-color: var(--primary-color);
        }
        &:active,&:focus{
            background-color: var(--primary-color);
        }
    }
    .rec-dot_active{
            box-shadow:none;
            background-color:var(--primary-color);
    }
    @media screen and (max-width:500px){
        .rec.rec-arrow{
            display:none;
        } 
    }
`;

export default AboutPage;
