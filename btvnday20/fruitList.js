const fruitList = [
    "apple",
    "banana",
    "tomato",
    "watermelon",
    "strawberry",
    "cherry",
    "coconut",
]

function e(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
}



function createCity(fruitList) {
  return e(div, { className: "fruitList" }, e(ul, {},
    e(li, {
      className: "Namefruit"
    }, fruitList)))

}
const app = document.getElementById("app");
  fruitList.forEach(function (fruitList) {
  app.append(createProduct(fruitList));
});
  


