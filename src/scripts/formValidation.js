const moment = require("moment");

export function valDate(date) {
  const today = moment(Date.now()).format("YYYY-MM-DD");
  return moment(date, "YYYY-MM-DD", true).isValid() && today <= date;
}

export function valTime(time) {
  return moment(time, "HH:mm", true).isValid();
}

export function valDescr(description) {
  return 10 < description.trim().length && description.trim().length < 150;
}

export function valTitle(title, categories) {
  const titleExists = titleFinder(title, categories);
  return title.trim().length > 3 && titleExists === (null || undefined);
}

export function titleFinder(title, array) {
  if (title.length > 0) {
    return array.filter((item) => {
      return item.title.toLowerCase() === title.toLowerCase();
    })[0];
  }
}

export function valPrice(price) {
  return (
    price.length > 0 && Number.isInteger(parseInt(price)) && parseInt(price) > 0
  );
}

export function valIng(ingredients) {
  return ingredients.length > 0;
}
export function valImage(image, imageURL) {
  return imageURL.trim().length > 12 || typeof image === "object";
}

export function isCategoryValid(category, categories) {
  return valTitle(category.title, categories) && valDescr(category.description);
}

export function isDishValid(dish, categories) {
  return (
    valTitle(dish.title, categories) &&
    valDescr(dish.description) &&
    valIng(dish.ingredients) &&
    valPrice(dish.price)
  );
}
