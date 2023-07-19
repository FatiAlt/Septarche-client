import React from 'react';
import Footer from './Footer';
import  Search  from './Search';
import Cards from './Cards';
import HomePage from '../HomePage/HomePage';


const Books = () => {
    return (
        <div className='books'>
        <Search/>
        <Cards/>
        <Footer/>

        </div>
    );
};
export default HomePage;
