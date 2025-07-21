

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

export const getFoodCategories = async () => {
    const response = await fetch(`${BASE_URL}categories.php`);
    const data = await response.json();
    return data.categories;
}

export const getMealsFromCategory = async () => {
    const category = localStorage.getItem('category');
    if (category !== null) {
        const selectedCategory = JSON.parse(category);
        const response = await fetch(`${BASE_URL}filter.php?c=${selectedCategory}`);
        const data = await response.json();
        return data.meals;
    } else {
        console.log('error');
    }
}

export const getMealById = async () => {
    const meal = localStorage.getItem('idMeal');
    if (meal !== null) {
        const id = JSON.parse(meal);
        const response = await fetch(`${BASE_URL}lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals;
    } else {
        console.log('error');
    }
}
