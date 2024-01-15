let name = document.querySelector(".name");
let price = document.querySelector(".price");
let image = document.querySelector(".image");
let btn_create = document.querySelector(".btn_create");

btn_create.addEventListener("click", () => {
  if (
    name.value.length !== 0 &&
    price.value.length !== 0 &&
    image.value.length !== 0
  ) {
    let newProduct = {
      name: name.value,
      price: price.value,
      image: image.value,
    };

    let data = JSON.parse(localStorage.getItem("food")) || [];
    data.push(newProduct);
    localStorage.setItem("food", JSON.stringify(data));
  } else {
    alert("lol");
  }
});
