import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import PrimaryButton from './../components/PrimaryButton';
import ContactInfoItem from './../components/ContactInfoItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {ToastContainer, toast} from "react-toastify";
import firebaseDB from "../firebase/firebase"
import "react-toastify/dist/ReactToastify.css"
import emailjs from "emailjs-com"

function ContactPage() {
    const phoneIcon = <PhoneIcon />
    const emailIcon = <EmailIcon />
    const locationIcon = <LocationOnIcon />
		  
	const nameInput = useRef(null);
	const emailInput = useRef(null);
	const subjectInput = useRef(null);
	const messageInput = useRef(null);
		  
	const input = {
		name: nameInput,
		email: emailInput,
		subject: subjectInput,
		message: messageInput
	}
	
	
		  
	const submitHandler = (e) => {
		e.preventDefault();
// 		Check if all fields are filled
		if(!nameInput || !emailInput || !subjectInput || !messageInput){
			toast.error("Plesae provide value in each input field")
		}else{
			
			emailjs.sendForm(
				"service_6gbnzwa",
				"template_uby3cfu",
				e.target,
				"yDG1-YhtNnfFBe18H"
			).then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
// 			Initialize collection
			
// 			Set all fields back to empty
			// setInput({nameInput: "", emailInput: "", subjectInput: "", messageInput: ""});
			toast.success("Form Submitted Succesfully");
		}
		
	}

    return (
        <ContactPageStyled>
			<ToastContainer position="top-center"/>
            <Title title={'Contact'} span={'Me'} />
            <InnerLayout className="contact-section">
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ContactInfoItem icon={phoneIcon} heading={'Call Me'} text={'(+44) 7594 784916'} />
                    <ContactInfoItem icon={emailIcon} heading={'Email Me'} text={'dgeorgiev436@gmail.com'} />
                    <ContactInfoItem icon={locationIcon} heading={'Location'} text={'1 Joslin Avenue, NW9 5HW, London, United Kingdom'} />
                </div>
                <form onSubmit={submitHandler} className="form-part">
                    <h4>Get In Touch</h4>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input ref={nameInput}  type="text" id="name" value={nameInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input ref={emailInput} type="email" id="email" value={emailInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input ref={subjectInput} type="text" id="subject" value={subjectInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea ref={messageInput} id="message" cols="30" rows="5" value={messageInput}></textarea>
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
