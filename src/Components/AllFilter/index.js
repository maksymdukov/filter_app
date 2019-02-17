import React from 'react';

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

export default AllFilter;