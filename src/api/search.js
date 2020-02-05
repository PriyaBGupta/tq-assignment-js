import axios from 'axios';

export function fetchSearchResults(query) {
  const REPO_URI = 'http://localhost:3001/products?q=';
  return axios.get(`${REPO_URI}${query}`)
  .then((results)=> {
    console.log("type==",query);
   if(query === undefined || query === ''){
     return [];
   }
   else if(typeof query !== 'string' && !(query instanceof String)){
    throw new TypeError();
   }
   else{
     return results.data;
   }
  })
  .catch((error) =>{
    // handle error
    return {error:true}
  })
}
