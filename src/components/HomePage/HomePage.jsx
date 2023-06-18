import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import  Search  from './Search';
import Cards from './Cards';

const HomePage = () => {
    return (
        <div className='homePage'>
        <NavBar/>
        <Search/>
        <Cards/>
        <Footer/>

        </div>
    );
};

export default HomePage;
