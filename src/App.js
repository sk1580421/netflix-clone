import react from 'react';
import Row from './Row';
import requests from './requests';
import './App.css'
import Banner from './Banner'
import Navbar from './Nav'

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Banner />
            <Row
                isLargeRow
                title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Ramantic movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

export default App;