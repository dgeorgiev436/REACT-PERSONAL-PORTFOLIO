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
            {/* Service Start Here */}
            <Title title={'Our'} span={'Services'} />
            <InnerLayout>
                <div className="services">
                    <ServiceItem image={designtrends} title={'Design Trends'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                    <ServiceItem image={fullyResponsive} title={'Fully Responsive'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                    <ServiceItem image={webDevelopment} title={'Web Development'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                    <ServiceItem image={appDevelopment} title={'App Development'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                    <ServiceItem image={customerSupport} title={'Customer Support'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                    <ServiceItem image={branding} title={'Branding'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit'} />
                </div>
            </InnerLayout>
            {/* Service End Here */}

            {/* Pricing And Plan Start Here */}
            <div className="plans">
                <Title title={'Choose A'} span={'Plan'} />
                <InnerLayout>
                    <div className="pricing-plans">
                        <PricingCard image={Diamond} plan={'Basic'} price={'$10 /Month'} button={'Get Started'} features={['Mobile App Desgin','Responsive design', 'Database Development', 'Web Design', '24/7 Support' ]}/>
                        <PricingCard image={Diamond}  plan={'Standard'} price={'$20 /Month'} button={'Get Started'} features={['Mobile App Desgin','Responsive design', 'Database Development', 'Web Design', '24/7 Support' ]}/>
                        <PricingCard image={Diamond}  plan={'Premium'} price={'$40 /Month'} button={'Get Started'} features={['Mobile App Desgin','Responsive design', 'Database Development', 'Web Design', '24/7 Support' ]}/>
                    </div>
                </InnerLayout>
            </div>
            {/* Pricing And Plan End Here */}


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
