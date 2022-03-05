const BASE_URL="https://restcountries.com/v3.1";
const API_URL=BASE_URL+'/name/india';
getCountriesAll(API_URL);

function getCountriesAll(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
    })
}