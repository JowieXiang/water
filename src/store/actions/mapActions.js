//对于firebase数据库的操作，在action中进行，对于网页端数据的操作，在reducer中规定，通过dispatch使之生效
export const addWebsiteList = (websiteList) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        websiteList.forEach(website => {
            firestore.collection('userWebsites').doc(userId).update({
                websiteList: getFirebase().firestore.FieldValue.arrayUnion(website)
                // createdAt: new Date()
            }).then(() => {
                dispatch({ type: 'ADD_WEBSITELIST', websiteList: websiteList });
            }).catch((err) => {
                dispatch({ type: 'ADD_WEBSITELIST_ERROR', err });
            })
        }); {

        }

    }
}