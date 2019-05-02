//注！！！对于redux来说，action只是用来确定type和传入数据的，reducer是用来执行功能的
//然而，使用firebase时，不可能用reducer来执行功能，因为数据内容在firebase中，而不在redux reducer的state，所以只能在dispatch阶段执行功能，
//也就是说，action就需要担负起功能了

const initState = {
}

const mapReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_WEBSITELIST':
            // console.log('created project')
            console.log('added websiteList', action.websiteList)
            return state;
        case 'ADD_WEBSITELIST_ERROR':
            console.log(action.err);
            return state;
        default:
            return state;
    }
}

export default mapReducer