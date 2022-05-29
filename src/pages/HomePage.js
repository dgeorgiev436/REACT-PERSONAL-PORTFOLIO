import React from 'react';
import styled from 'styled-components';
import Particle from './../components/Particle';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function HomePage() {
    return (
        <HomePageStyled>
            <Particle />
            <div className="typography">
                <h1>Hi, I am <span>Denis Georgiev</span></h1>
                <p>I am a full stack web developer. I have Experience in building Websites, Single Page Web Applications, APIs and Databases.</p>

                <div className="social-icons">
					{ /* <a href="https://www.facebook.com/" target='__blank'> <FacebookIcon /></a> */}
                    {/* <a href="https://twitter.com/?lang=en" target='__blank'> <TwitterIcon /></a> */}
                    <a href="https://github.com/dgeorgiev436/" target='__blank'> <GitHubIcon /></a>
                    <a href="https://linkedin.com/in/denis-georgiev-87b310213/" target='__blank'> <LinkedInIcon /></a>
                	{ /*  <a href="https://www.instagram.com/" target='__blank'> <InstagramIcon /></a> */}
                </div>
            </div>

        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
   width: 100%;
    height: 90vh;
    position: relative;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align:center;
        width: 80%;
        @media screen and (max-width:600px){
            width: 100%;
        }
        p{
            padding:0.5rem 0 1rem 0;
            @media screen and (max-width:600px){
                font-size:0.8rem;
            }
        }
    }
    .social-icons{
        display:flex;
        align-items: center;
        justify-content: center;
        a{
            display:flex;
            align-items: center;
            justify-content: center;
            padding:0.7rem;
            border-radius:50%;
            border:2px solid var(--border-color);
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            margin:0 .5rem;
            @media screen and (max-width:625px){
                margin:0 .1rem;
                padding:0.5rem;
            }
            svg{
                color:var(--font-color);
                font-size:1.4rem;
                @media screen and (max-width:625px){
                    font-size:1.1rem;
                }
            }
            &:hover{
                    border: 2px solid var(--primary-color);
                    &:hover svg{
                        color:var(--primary-color);
                        opacity:0.5;
                    }
            }
        }
        
    }
`;

export default HomePage;
