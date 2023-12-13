import React from 'react';
import Header from '../layout/UniversalHeader/header';
import Footer from '../layout/Footer/Footer';
import SwapCard from '../components/SwapComponents/SwapCard/SwapCard';

const Swap = () => {
    return (
        <div className='main-background'>
            <div className='max-width pt-150'>
                <Header />
                <SwapCard />
                <Footer />
            </div>
        </div>
    );
}

export default Swap;
