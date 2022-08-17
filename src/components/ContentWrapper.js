import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import Footer from './Footer';
import Genresindb from './GenresInDb';
import Lastmovieindb from './LastMovieInDb';
import Topbar from './TopBar';

const Contentwrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

                <Topbar />

                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    <ContentRowMovies />


                    <div className="row">


                        <Lastmovieindb />

                        <Genresindb />

                    </div>
                </div>

            </div>



            <Footer />


        </div>
    );
}

export default Contentwrapper;