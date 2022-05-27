import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import PrimaryButton from './../components/PrimaryButton';
import ContactInfoItem from './../components/ContactInfoItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    return (
        <ContactPageStyled>
            <Title title={'Contact'} span={'Me'} />
            <InnerLayout className="contact-section">
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ContactInfoItem icon={phone} heading={'Call Me'} text={'077 1031 XXXX'} />
                    <ContactInfoItem icon={email} heading={'Email Me'} text={'demo@gmail.com'} />
                    <ContactInfoItem icon={location} heading={'Location'} text={'11 Jedburgh Road,Lethanhill, United Kingdom.'} />
                </div>
                <form onSubmit={(e)=>e.preventDefault()} className="form-part">
                    <h4>Get In Touch</h4>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" cols="30" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <PrimaryButton btn={'Send Message'} />
                    </div>
                </form>
            </InnerLayout>
        </ContactPageStyled>
    )
}

const ContactPageStyled = styled.div`
    .contact-section{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:3rem;
        @media screen and (max-width:768px){
            grid-template-columns: repeat(1, 1fr);
        }
        .contact-info{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            width:100%;
            h4{
                padding: 1rem 0;
                font-size:1.8rem;
                @media screen and (max-width:600px){
                    font-size:1.5rem;
                }
            }
        }
        .form-part{
            width:100%;
            h4{
                padding: 1rem 0;
                font-size:1.8rem;
                @media screen and (max-width:600px){
                    font-size:1.5rem;
                }
            }
            .form-group{
                margin-top:2rem;
                position: relative;
                width:100%;
                label{
                    position: absolute;
                    left:20px;
                    top: -17px;
                    display: inline-block;
                    background-color: var(--background-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color-2);
                    outline: none;
                    background-color: transparent;
                    padding: 10px 15px;
                    width:100%;
                    color: inherit;
                    border-radius: .2rem;
                    background-color: transparent;
                }
                textarea{
                    resize: none;
                    background-color: transparent;
                    border: 1px solid var(--border-color-2);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    border-radius: .2rem;
                }
            }
        }
    }
`;

export default ContactPage;
