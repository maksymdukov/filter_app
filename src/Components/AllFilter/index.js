import React from 'react';
import PropTypes from "prop-types";

const AllFilter = ({activeFilter, inputFilter, handleSelectFilter}) => {
    return (
        <li className="filterItem">
            <label className="radio">
                <input name="filter"
                       type="radio"
                       value=""
                       onChange={handleSelectFilter}
                       checked={(!activeFilter && !inputFilter)}
                />
                <div className="radio__text">
                    All
                </div>
            </label>
        </li>
    );
};

AllFilter.propTypes = {
    activeFilter: PropTypes.string,
    inputFilter: PropTypes.string,
    handleSelectFilter: PropTypes.func.isRequired,
};
export default AllFilter;