// node modules
import React from 'react';
import PropTypes from "prop-types";

const Search = ({inputFilter, handleOnChange, handleSelectFilter}) => {
    return (
        <li className="filterItem">
            <label className="radio">
                <input name="filter"
                       type="radio"
                       checked={!!inputFilter}
                       disabled={!inputFilter}
                       value=""
                       onChange={handleSelectFilter}
                />
                <div className="radio__text">
                    <div className="searchWrapper">
                        <input type='text'
                               onChange={handleOnChange}
                               value={inputFilter}
                               placeholder="Search"
                        />
                        <img alt="search icon" src="./images/search_icon.2b573fbc.png"/>
                    </div>
                </div>
            </label>
        </li>
    );
};

Search.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    inputFilter: PropTypes.string,
    handleSelectFilter: PropTypes.func.isRequired,
};

export default Search;