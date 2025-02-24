const loadPotato = () => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=potato`

    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}

loadPotato();
const loadSoup = () => {
    
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=soup`

    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}
const loadPChicken = () => {
    
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`

    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}
const loadBeef = () => {
    
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=beef`

    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}



const showMeals = (meals) => {
    let container = document.getElementById("result-container");
    container.innerHTML = '';
    meals.forEach(meal => {
        let mealCard = document.createElement('div');    
        mealCard.classList = 'card card-compact bg-base-100 shadow-xl';
        
        mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${meal.strInstructions}" >${meal.strInstructions.slice(0,100)}...</p>
                <div class="card-actions justify-end">
                    <button onclick="handleShowDetails(${meal.idMeal})" class="btn btn-primary">Show Details</button>
                </div>
            </div>   
        `;
    container.appendChild(mealCard);
    });
}
