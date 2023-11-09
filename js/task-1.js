function slugify(title) {
  const lowerCaseTitle = title.toLowerCase(); // перетворити рядок на нижній регістр
  const words = lowerCaseTitle.split(" "); // розбити рядок на масив слів
  const slug = words.join("-"); // об'єднати слова у рядок зі знаком мінус між ними
  return slug; // повернути отриманий рядок

  // return title.toLowerCase().split(" ").join("-");
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
