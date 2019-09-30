import React from 'react';
import Menu from './Menu';

const Home = ({ match: { params } }) => {
    return (
        <div>
            <Menu />
            <h4>home component</h4>
        </div>
    )
}

export default Home;