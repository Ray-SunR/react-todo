const filter = (filter = 'FILTER_ALL', action) => {
    switch (action.type) {
        case 'FILTER_INCOMPLETED':
        case 'FILTER_COMPLETED':
        case 'FILTER_ALL':
            return action.type;
        default:
            return filter;
    }
}

export default filter;