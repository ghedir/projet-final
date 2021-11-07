import * as api from '../../api';
 

//Action Creators

const getCats = () => async(dispatch ) => {
     try {
         const { data } = await api.fetchCats();
         dispatch({type: 'FETCH_CATEGORIES', payload: data});
     } catch (error){
         console.log(error.message);
     }
}
export default getCats;