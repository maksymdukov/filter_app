const uniqueTags = (listDB) => {
    return listDB.results.reduce((filters, item) => {
        item.tags.forEach(tag => {
            if (!filters.includes(tag)) filters.push(tag);
        });
        return filters;
    }, []);
};

export default uniqueTags;