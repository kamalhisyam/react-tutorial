import React from 'react';
import './collection-item.scss';

const CollectionItem = ({name, imageUrl, price}) => (
    <div className='collection-item'>
        <div className='image'
             style={{backgroundImage: `url(${imageUrl})`}}>
        </div>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;