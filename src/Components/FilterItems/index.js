import React from 'react';
import './styles.scss';
import PropTypes from "prop-types";

const FilterItems = ({listDB, handleSelectFilter, activeFilter}) => {
    if (listDB.status === "success") {
        return listDB.tags.map(item => {
            let itemUpcase = item.charAt(0).toUpperCase() + item.slice(1);
            return (
                <li key={item} className="filterItem">
                    <label className="radio">
                        <input
                            name="filter"
                            type="radio"
                            value={item}
                            checked={activeFilter === item}
                            onChange={handleSelectFilter}
                        />
                        <div className="radio__text">{itemUpcase}</div>
                    </label>
                </li>
            );
        });
    } else {
        return null;
    }
};

FilterItems.propTypes = {
    listDB: PropTypes.shape({
        tags: PropTypes.array,
        loading: PropTypes.bool,
        payload: PropTypes.object
    }),
    activeFilter: PropTypes.string,
    handleSelectFilter: PropTypes.func.isRequired,
};

export default FilterItems;