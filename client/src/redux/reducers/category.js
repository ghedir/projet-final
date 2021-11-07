export default (cats = [],action) =>{
    switch(action.type) {
        case "FETCH_CATEGORIES":
            return  action.payload;
        default:
          return cats;

    } 
}