import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const CollectionsOverview = ({ collections }) => (
    <div>
        {collections.map(collection =>
            <CollectionPreview key={collection.id} {...collection}/>
        )}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);