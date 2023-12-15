import React from 'react';
import ReactDOM from 'react-dom/client';
import clubData from './clubData.json';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://play-lh.googleusercontent.com/6L1u_v2JGG4Rpkh6UuHD8m5xNDMddxUTp6lcO86fgTzJ-SC8Fphgz7CkLZklnS8Dfjs'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    );
}

const ClubCard = ({club}) => {
    return (

        <div className='club-card'>
            <img
                className='club-logo'
                alt='club-logo'
                src={club.sportsTeamJSONLD.logo}
            />
            <h3 className='club-name'>{club.name}</h3>
            <h4 className='club-league'>{club.sportsTeamJSONLD?.memberOf?.name}</h4>
            <h4 className='club-stadium'>{club.sportsTeamJSONLD?.location?.name}</h4>
            <h4 className='club-coach'>{club.sportsTeamJSONLD?.coach?.name}</h4>
        </div>
    );
}

const Body = () => {

    return (
        <div className='body'>
            <div></div>
            <div className='search'> Search </div>
            <div className='club-container'>
                {
                    clubData.map(club => (
                        <ClubCard key={club.id} club={club}/>
                    ))
                }

            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

// root.render(jsxHeading);