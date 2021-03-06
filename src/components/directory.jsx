import React from 'react';
import MenuItem from './menu-item';
import './directory.scss'
import { connect } from 'react-redux';
import { selectDirectorySections } from "../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
            <div className='directory-menu'>
            {
            sections.map(({id, ...others}) => (
                <MenuItem key={id} {...others}/>
                )
            )
            }   
            </div>
);


const mapStateToProps = createStructuredSelector(
  {sections: selectDirectorySections}
);

export default connect(mapStateToProps)(Directory);