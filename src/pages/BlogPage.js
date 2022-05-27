import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import Blogs from './../data/Blogs';
import { NavLink } from 'react-router-dom';
function BlogPage() {
    return (
        <BlogPageStyled>
            <Title title={'Recent'} span={'Blogs'} />
            <InnerLayout>
                <div className="all-blogs">
                    {
                        Blogs.map((blog) => {
                            return <div className='blog-part' key={blog.id}>
                                <div className="img">
                                    <img src={blog.image} alt="" />
                                    <p>
                                        {blog.month} {blog.date}
                                    </p>
                                </div>
                                <div className="title">
                                    <NavLink to='/blogPost' exact>{blog.title}</NavLink>
                                </div>
                            </div>
                        })
                    }
                </div>
            </InnerLayout>
        </BlogPageStyled>
    )
}

const BlogPageStyled = styled.div`
    .all-blogs{
        display:grid;
        grid-template-columns:repeat(2, 1fr);
        grid-gap:3rem;
        @media screen and (max-width:768px){
            grid-template-columns:repeat(1, 1fr);
        }
        .blog-part{
            padding:1.2rem;
            background: var(--border-color-2);
            .title{
                margin-top:.5rem;
                a{
                    font-size:1.3rem;
                    transition: all .4s ease-in-out;
                    &:hover{
                        color:var(--primary-color);
                    }
                }
            }
            .img{
                width:100%;
                position:relative;
                overflow: hidden;

                p{
                    position: absolute;
                    background-color: var(--primary-color);
                    color:var(--font-color);
                    display: inline-block;
                    padding:.5rem;
                    line-height:1rem;
                    left:0;
                    bottom:0;
                }
                img{
                    width:100%;
                    height:100%;
                    transition: all .4s ease-in-out;
                    &:hover{
                        transform: scale(1.1);
                    } 
                }
            }
        }
    }
`;

export default BlogPage;
