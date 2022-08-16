import React, { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import Works from './Works'
import { PageTransition } from '@steveeeie/react-page-transition';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'Works'){

            return <Works/>
        }
    };

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <React.Fragment>

<PageTransition preset="moveToLeftFromRight"></PageTransition>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            
            {renderPage()}
        </React.Fragment>
    )


}