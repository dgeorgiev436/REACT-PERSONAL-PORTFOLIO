import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './../components/ResumeItem';
import SkillsItem from './../components/SkillsItem';
function ResumePage() {
    return (
        <ResumePageStyled>
            {/* Resume Section Start Here */}
            <Title title={'Resume'} span={''} />
            <InnerLayout className="resumeSection">
                <div className="education">
                    <h4><SchoolIcon /><span>Education</span></h4>
                    <ResumeItem year={'2018-2022'} title={'BSc (Hons) Computing Technologies'} subTitle={'University of Roehampton (1st Class)'} text={'Graduate with a First Class Honours Degree. Multiple times project leader in group university projects involving Mobile Application Development, Web Application Development, Data Science and Cyber Security. '} />
					{ /* <ResumeItem year={'2008-2010'} title={'Bachleor Degree'} subTitle={'Kingdom University'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} />
                    <ResumeItem year={'2012-2015'} title={'Master Degree'} subTitle={'Hardvard Uiversity'} text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quisquam!'} /> */}
                </div>
                <div className="experience">
                    <h4> <BusinessCenterIcon /><span>Experience</span></h4>
                    <ResumeItem year={'2017-2018'} title={'Security Officer'} subTitle={'First Class Protection'} text={'•	Wrote detailed reports on property damage, theft, presence of unauthorized persons and unusual incidences.'} />
					<ResumeItem year={'2018-2019'} title={'Concierge'} subTitle={'Urbanest'} text={'•	Remedied issues quickly and effectively through active listening, conflict resolution and dynamic communication skills.'} />
                    <ResumeItem year={'2019-Present'} title={'Concierge'} subTitle={'James Andrew Residential'} text={'Work closely with guests, some of VIP or celebrity status and always respected their privacy.'} />
                </div>
            </InnerLayout>
            {/* Resume Section End Here */}

            {/* Skills Section Start Here */}
            <div className="my-skills">
                <Title title={'Technical'} span={'Skills'} />
                <InnerLayout>
                    <div className="skills">
                       <SkillsItem title={'JAVASCRIPT'} width={'75%'} text={'75%'} />
                       <SkillsItem title={'EXPRESS JS'} width={'70%'} text={'70%'} />
                       <SkillsItem title={'REACT JS'} width={'68%'} text={'68%'} />
                       <SkillsItem title={'NODE JS'} width={'75%'} text={'75%'} />
                       <SkillsItem title={'MONGO DB'} width={'70%'} text={'70%'} />
                       <SkillsItem title={'REDUX'} width={'65%'} text={'65%'} />
                       <SkillsItem title={'TYPESCRIPT'} width={'66%'} text={'66%'} />
					   <SkillsItem title={'HTML5'} width={'80%'} text={'90%'} />
                       <SkillsItem title={'CSS3'} width={'70%'} text={'70%'} />
                       <SkillsItem title={'JQUERY'} width={'65%'} text={'65%'} />
                       <SkillsItem title={'BOOTSTRAP'} width={'70%'} text={'70%'} />
                    </div>
                </InnerLayout>
            </div>
            {/* Skills Section End Here */}
        </ResumePageStyled>
    )
}

const ResumePageStyled = styled.div`
    .resumeSection{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:3rem;
        @media screen and (max-width:992px){
            grid-template-columns: repeat(1, 1fr);
        }
        .education, .experience{
            h4{
                padding: 1rem 0;
                font-size:1.8rem;
                @media screen and (max-width:600px){
                    font-size:1.5rem;
                }
                span{
                    margin-left:.5rem;
                }
            }
            svg{
                color:var(--primary-color);
                font-size:1.8rem;
            }
        }
    }

    .skills{
        display: grid;
        grid-template-columns:repeat(2, 1fr); 
        grid-gap:1.5rem;
        margin-top: 5rem;
        @media screen and (max-width:768px){
            grid-template-columns:repeat(1, 1fr); 
        }
    }
`;

export default ResumePage;
