import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import image from './../images/Awatar/awatar.jpg';
import PrimaryButton from './../components/PrimaryButton';
import Carousel from 'react-elastic-carousel';
import TestimonialItem from './../components/TestimonialItem';
import client1 from './../images/Testimonials/client.jpg';
import client2 from './../images/Testimonials/client.jpg';
import client3 from './../images/Testimonials/client.jpg';

function AboutPage() {
    return (
        <AboutPageStyled>
            {/* about Start Here */}
            <Title title={'About'} span={'Me'} />
            <InnerLayout className="about-section">
                <div className="image-part">
                    <img src={image} alt="" />
                </div>
                <div className="info-part">
                    <h4>Who am i?</h4>
                    <h3>I am <span>Aaron Smith</span></h3>
                    <p>I am full stack web developer. I have Experience in Developing Websites, Web Applications, Mobile Games (Android & IOS), and Flutter Mobile Applications.</p>
                    <div className="information">
                        <ul>
                            <li>Full Name</li>
                            <li>Age</li>
                            <li>Nationality</li>
                            <li>Languages</li>
                            <li>Address</li>
                            <li>Freelance</li>
                        </ul>
                        <ul className="details">
                            <li>: Antron Smith</li>
                            <li>: 25 Years</li>
                            <li> : United Kingdom</li>
                            <li> : English , French</li>
                            <li> : 11 Jedburgh Road,Lethanhill</li>
                            <li> : Available</li>
                        </ul>
                    </div>
                    <PrimaryButton btn={'Download Cv'} />
                </div>
            </InnerLayout>
            {/* About End Here */}

            {/* TEstimonials Start Here */}
            <div className="testimonials">
                <Title title={'Testimonials'} span={''} />
                <InnerLayout>
                    <Carousel>
                        <TestimonialItem text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, est quae? Rem natus sunt vitae esse eum possimus nulla quam'} img={client1} />
                        <TestimonialItem text={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, est quae? Rem natus sunt vitae esse eum possimus nulla quam'} img={client2} />
                        <TestimonialItem text={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, est quae? Rem natus sunt vitae esse eum possimus nulla quam'} img={client3} />
                    </Carousel>
                </InnerLayout>
            </div>
            {/* TEstimonials End Here */}
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
