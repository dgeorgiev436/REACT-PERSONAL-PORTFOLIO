import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import ServiceItem from './../components/ServiceItem';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PricingCard from './../components/PricingCard';
import Diamond from './../images/Service/diamond.svg';

function ServicePage() {
    const designtrends = <CodeIcon />
    const fullyResponsive = <WebIcon />
    const webDevelopment = <LanguageIcon />
    const appDevelopment = <DashboardIcon />
    const customerSupport = <SupervisorAccountIcon />
    const branding = <BuildIcon />

    return (
        <ServicePageStyled>
            <Title title={'My'} span={'Skills'} />
            <InnerLayout>
                <div className="services">
                    <ServiceItem image={designtrends} title={'APIs'} paragraph={'Skilled in creating and developing custom APIs by understanding client requirements. Proficient in testing new software and APIs to identify bugs and modify the codes for improving performance. '} />
                    <ServiceItem image={fullyResponsive} title={'Databases'} paragraph={'Experience in designing and developing application leveraging databases'} />
                    <ServiceItem image={webDevelopment} title={'Single Page Web Applications'} paragraph={'Experience in building single page web applications with the use of JavaScript frameworks such as React.js'} />
                    <ServiceItem image={appDevelopment} title={'Full-Stack Web Development'} paragraph={'Worked on multiple full-stack web application projects that included API building, Database designig, components building and front-end designing.'} />
                    <ServiceItem image={customerSupport} title={'Front-End Web Development'} paragraph={'Experienced in working with JavaScript frameworks such as React.js. Good understanding of HTML and CSS. Ability to implement responsive website design while delivering engaging user experience '} />
					{ /* <ServiceItem image={branding} title={'Branding'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} /> */}
                </div>
            </InnerLayout>

        </ServicePageStyled>
    )
}

const ServicePageStyled = styled.div`
    .services{
        display: grid;
        grid-template-columns:repeat(3, 1fr); 
        grid-gap:1.5rem;
        margin-top: 5rem;
        @media screen and (max-width:992px){
            grid-template-columns:repeat(2, 1fr); 
        }
        @media screen and (max-width:600px){
            grid-template-columns:repeat(1, 1fr); 
        }
    }
    .pricing-plans{
        display: grid;
        grid-template-columns:repeat(3, 1fr); 
        grid-gap:1.5rem;
        margin-top: 5rem;
        @media screen and (max-width:992px){
            grid-template-columns:repeat(2, 1fr); 
        }
        @media screen and (max-width:600px){
            grid-template-columns:repeat(1, 1fr); 
        }
    }
`;

export default ServicePage;
