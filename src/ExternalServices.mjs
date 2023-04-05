// Fetch JSON stuff
const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=08076391&app_key=4194d21e261caece7fca45a54a50bbbc`;
const id= 'fed945d5';
const key = '65748875312f112f35c9f7c872ba502e';


export async function displayListMealType(type) {
  // we want the recipes for a certain meal type
  const link = `${url}&mealType=${type}&imageSize=SMALL`;
  const response = await fetch(link, {mode: 'no-cors'});
  const data = await response.json();
  return data.hits; // array of recipes

}

export async function displayListCuisineType(type){
  const link = `${url}&cuisineType=${type}&imageSize=SMALL`;
  const response = await fetch(link, {mode: 'no-cors'});
  const data = await response.json();
  return data.hits;
}
export async function fetchData(userQuery) {
    const URL = `https://api.edamam.com/api/recipes/v2?q=${userQuery}&type=public&app_id=fed945d5&app_key=65748875312f112f35c9f7c872ba502e`;
    const response = await fetch(URL, {mode: 'no-cors'});
    const data = await response.json();
    return data.hits;
}

