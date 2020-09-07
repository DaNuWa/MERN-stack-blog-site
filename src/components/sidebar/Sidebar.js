import React from 'react';
import Search from './Search'
import Categories from './Categories'

const Sidebar = () => {
    return (
        <div className="col-md-4">
            <Search/>
            <Categories/>
         </div>
    );
}

export default Sidebar;
