import React from 'react';
import PropTypes from "prop-types";

const ListItem = ({item}) => {
    let tagList = item.tags.map((tag) => (tag.charAt(0).toUpperCase() + tag.slice(1)))
    return (
        <li className='showList__item'>
            <div className="showList__item-title">{item.title}</div>
            <div className="showList__item-tag">{tagList.join(", ")}</div>
        </li>
    );
};

ListItem.propTypes = {
    item: PropTypes.shape({
        tags: PropTypes.array,
        title: PropTypes.string
    })
};

export default ListItem;