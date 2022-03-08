//functionto get country



const CountriesElem = document.querySelector(".Countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const regionName = document.getElementsByClassName("regionName");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");



async function getCountry() {
    const url=await fetch("https://restcountries.com/v2/all");
    //const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    //const res1=await url1.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);
    });
    //res1.forEach(element=>{
    //  showMaps(element);
    // })
}


getCountry();

function showCountry(data) {
    const country = document.createElement('div');
    country.classList.add("country");
    country.innerHTML = `
            <div class="country-img">
                <img src="${data.flag}" alt="" >
            </div>
            <div class="country-info">
                <h3 class="countryName">${data.name}</h3>
                <p><strong>population:</strong>${data.population}</p>
                <p class="regionName"><strong>region:</strong>${data.region}</p>
                <p><strong>Capital:</strong>${data.capital}</p>
                
            </div>
    `;
    CountriesElem.appendChild(country);
    country.addEventListener("click", () => {
        showCountryDetail(data);
    })
}



dropDown.addEventListener("click", () => {
    dropElem.classList.toggle("showDropDown");

})

region.forEach(element => {
    element.addEventListener("click", () => {

        Array.from(regionName).forEach(elem => {
            if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid";

            }
            else {
                elem.parentElement.parentElement.style.display = "none";
            }

        })
    })
})
const countryName = document.getElementsByClassName("countryName");


search.addEventListener("input", () => {
    //console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid";

        }
        else {
            elem.parentElement.parentElement.style.display = "none";
        }

    })
})

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    moon.classList.toggle("fas")
})


const back = document.querySelector(".back");
const countryModal = document.querySelector(".countryModal");



function showCountryDetail(data) {
    countryModal.classList.toggle("show");
    console.log(data);
    countryModal.innerHTML = `
<button class="back"><i class="fa-solid fa-arrow-left"></i> Back</button>
        <div class="modal">
            <div class="leftModal">
                <img src="${data.flag}" alt="">
            </div>
            <div class="rightModal">
                <h1>${data.name}</h1>
                <div class="modalInfo">
                    <div class="innerleft inner">
                        <p><strong>Native Name:</strong>${data.nativeName}</p>
                        <p><strong>population:</strong>${data.population}</p>
                        <p><strong>Region:</strong>${data.region}</p>
                        <p><strong>Sub-region:</strong>${data.subregion}</p>
                    </div>
                    <div class="innerright inner">
                        <p><strong>Capital:</strong>${data.capital}</p>
                        <p><strong>Top Level Domain:</strong>${data.topLevelDomain.map(elem => elem)}</p>
                        <p><strong>Currency:</strong>${data.currencies.map(elem => elem.name)}</p>
                        <p><strong>Languages:</strong>${data.languages.map(elem => elem.name)}</p>
                    </div>
                </div>
                
            </div>
        </div>
`
    const back = countryModal.querySelector(".back");

    back.addEventListener("click", () => {
        countryModal.classList.toggle("show");
    })
}


