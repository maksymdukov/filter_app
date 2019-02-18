export const fetchList = (link) => fetch(link)
                                    .then(res => res.json())
                                    .then(res => res)