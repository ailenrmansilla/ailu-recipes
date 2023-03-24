// Fetch JSON stuff
const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=08076391&app_key=4194d21e261caece7fca45a54a50bbbc`;
const id= '08076391';
const key = '4194d21e261caece7fca45a54a50bbbc';

export async function fetchData() {
    const URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=08076391&app_key=4194d21e261caece7fca45a54a50bbbc&mealType=Breakfast`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

// the one I am using right now
export async function displayListMealType(type) {
  // we want the recipes for a certain meal type
  const link = `${url}&mealType=${type}&imageSize=SMALL`;
  const response = await fetch(link);
  const data = await response.json();
  return data.hits; // array of recipes

}
