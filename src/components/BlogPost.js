import React from 'react';
import styled from 'styled-components';
import Blog from './../images/Blog/blog.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function BlogPost() {
    return (
        <BlogPostStyled>
            <div className="blog-container">
                <div className="img-part">
                    <img src={Blog} alt="" />
                </div>
                <p className="date">Date: 30 June</p>
                <div className="details">
                    <h1> Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque cumque totam velit odio esse laudantium nam quae, dolores veritatis molestiae necessitatibus ducimus, quo magni aliquid autem tempora impedit. Totam asperiores quidem animi illum, maiores autem officiis suscipit accusamus quisquam, fugit, molestiae voluptatum modi nobis est optio sequi pariatur. Autem debitis deserunt, tempora, labore cupiditate corporis rem quae illo facilis omnis voluptatibus. Pariatur cumque aperiam obcaecati enim labore, impedit reiciendis accusantium quam ipsam libero culpa et quas iusto sed velit illum, dolore modi suscipit sequi eligendi? Ipsum earum illum iure praesentium molestiae neque corporis quos impedit blanditiis, perferendis nisi, rerum repellat itaque reiciendis? Recusandae perspiciatis distinctio explicabo repellat. Commodi at reprehenderit voluptate! Quis labore repellendus facilis officiis maxime tempora quaerat quo voluptate doloremque id! Deleniti natus ipsa voluptas eos a cupiditate molestias distinctio velit quidem veritatis dolor officia ducimus repudiandae similique voluptates sequi ipsam, tempore quam, tenetur ab iste commodi sunt dolorem! Adipisci asperiores, excepturi tenetur illum labore explicabo temporibus voluptatibus saepe nam cum perferendis impedit, officiis at fugiat voluptate illo dolorum molestiae inventore ipsa est recusandae quia, iste dolores deserunt! Quo officia impedit molestias ratione eligendi saepe tempora, minima molestiae, repudiandae sapiente dolorum alias. Deleniti expedita cum blanditiis vero!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ex, error veritatis facilis at, cum in fugit molestias asperiores sequi temporibus molestiae? Qui non eligendi totam voluptas sed, similique incidunt quam aliquam eaque fugiat repudiandae, dolorem quas praesentium a odit. Ad aliquid accusamus officia tempore! Cum placeat omnis ab dolor!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam a sed quos esse earum impedit doloremque velit! Dignissimos eaque deserunt, odio, beatae ad sit laudantium veniam mollitia fugit vel a quis, sapiente ullam quibusdam.</p>
                </div>

                <div className="share">
                    <p>Share : </p>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton>
                        <WhatsAppIcon />
                    </IconButton>
                </div>
            </div>
        </BlogPostStyled>
    )
}

const BlogPostStyled = styled.div`
    .blog-container{
        padding:4rem;
        margin:.5rem auto;
        @media screen and (max-width:768px){
            padding:2rem;
        }
        @media screen and (max-width:500px){
            padding:1rem;
        }
        .img-part{
            text-align:center;
            width:100%;
            height:400px;
            @media screen and (max-width:768px){
                height:300px;
            }
            @media screen and (max-width:500px){
                height:200px;
            }
            img{
                border:2px solid var(--border-color);
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }

        .date{
            padding:.1rem .4rem;
            background-color:var(--primary-color);
            display:inline-block;
            color:var(--sidebar-color);
        }

        .details{
            margin:1rem 0;
            h1{
                font-size:2rem;
                margin:.5rem 0;
                @media screen and (max-width:768px){
                    font-size:1.6rem;
                }
            }
            p{
                font-size:1rem;
                margin:1rem 0;
                @media screen and (max-width:768px){
                    font-size:0.8rem;
                }
            }
            .para{
                &::first-letter{
                    font-size:2rem;
                    color:var(--primary-color);
                    font-weight: bold;
                }
            }
        }

        .share{
            display:flex;
            align-items:center;
            p{
                color:var(--font-color);
                font-size:1rem;
                @media screen and (max-width:500px){
                    display:none;
                }

            }
            svg{
                color:var(--primary-color);
                font-size:1.4rem;
            }
        }
    }
`;

export default BlogPost;
