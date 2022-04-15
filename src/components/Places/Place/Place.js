import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogList } from '../../Config/data';
import Chip from '../Chip/Chip';
import EmptyList from '../EmptyList/EmptyList';
import './Place.css'

const Place = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, []);

    return (
        <>
            <Link className='blog-goBack' to='/places'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {blog ? (
                <div className='blog-wrap'>
                    <header>
                        {/* <p className='blog-date'>Published {blog.createdAt}</p> */}
                        <h1>{blog.name}</h1>
                        <div className='chip-div'>
                            <Chip className='chip-item' label={blog.division} />
                            <Chip className='chip-item' label={blog.district} />
                            <Chip className='chip-item' label={blog.subDistrict} />
                        </div>
                    </header>
                    <img src={blog.img} alt='cover' />
                    <p className='blog-desc'>{blog.description}</p>
                    <div className='footer-a'>
                        <a href={blog.maps}>Google Map &#10145;</a>
                        <a href={blog.wiki}>Wikipedia</a>
                    </div>
                </div>
            ) : (
                <EmptyList />
            )}
        </>
    );
};

export default Place;