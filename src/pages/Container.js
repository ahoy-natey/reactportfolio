import React, { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import Works from './Works'


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


            <Nav currentPage = {currentPage} handlePageChange ={handlePageChange} />
            {renderPage()}
        </React.Fragment>
    )


}