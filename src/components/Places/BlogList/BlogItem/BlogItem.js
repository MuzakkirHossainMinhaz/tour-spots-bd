import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.css'
import Chip from '../../Chip/Chip'

const BlogItem = ({
    blog: {
        id,
        img,
        name,
        division,
        district,
        subDistrict,
        description,
        wiki,
    },
}) => {
    return (
        <div className='blogItem-wrap'>
            <img className='blogItem-cover' src={img} alt='cover' />
            <div className='chip-divide'>
                <Chip className='chip-item' label={division} />
                <Chip className='chip-item' label={district} />
                <Chip className='chip-item' label={subDistrict} />
            </div>
            <h3>{name}</h3>
            <p className='blogItem-desc'>{description}</p>
            <footer>
                <div className='blogItem-author'>
                    {/* <img src={authorAvatar} alt='avatar' />
                    <div>
                        <h6>{authorName}</h6>
                        <p>{createdAt}</p>
                    </div> */}
                </div>
                <Link className='blogItem-link' to={`/places/place/${id}`}>
                    <strong>More Information </strong> ➝
                </Link>
            </footer>
        </div>
    );
};

export default BlogItem;