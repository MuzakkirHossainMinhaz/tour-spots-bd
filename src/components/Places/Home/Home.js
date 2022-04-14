import React, { useState } from 'react';
import { blogList } from '../../Config/data';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar'
import BlogList from '../BlogList/BlogList'
import EmptyList from '../EmptyList/EmptyList'
import BlogItem from '../BlogList/BlogItem/BlogItem';

const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.district.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    return (
        <div>
            <Header></Header>
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />

            {/* Blog List & Empty View */}
            {blogs.length ?
                <div className='blogList-wrap'>
                    {
                        blogs.map(blog => (
                            <BlogItem
                                key={blog.id}
                                blog={blog}
                            ></BlogItem>
                        ))
                    }
                </div> : <EmptyList />}
        </div>
    );
};

export default Home;