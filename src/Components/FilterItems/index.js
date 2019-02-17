import React from 'react';
import './styles.scss';

const FilterItems = ({listDB, handleSelectFilter}) => {
    if (listDB.status === "success") {
        const filters = listDB.payload.results.reduce((filters, item) => {
            item.tags.forEach(tag => {
                if (!filters.includes(tag)) filters.push(tag);
            });
            return filters;
        }, []);

        return filters.map(item => {
            let itemUpcase = item.charAt(0).toUpperCase() + item.slice(1);
            return (
                <li key={item} className="filterItem">
                    <label className="radio">
                        <input
                            name="filter"
                            type="radio"
                            value={item}
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

export default FilterItems;