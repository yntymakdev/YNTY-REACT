let menu = document.querySelector(".menu");
let modal_window = document.querySelector(".modal_window");
readProduct();
function readProduct() {
  let newData = JSON.parse(localStorage.getItem("food")) || [];
  menu.innerHTML = "";
  newData.forEach((el, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("menu_img");
    let menu_text = document.createElement("div");
    menu.classList.add("menu_text");
    let text_name = document.createElement("p");
    text_name.classList.add("text_name");
    let text_price = document.createElement("p");
    text_price.classList.add("text_price");
    let action_btn = document.createElement("div");
    action_btn.classList.add("action_btn");
    let btn_delete = document.createElement("button");
    btn_delete.classList.add("btn_delete");
    let btn_edit = document.createElement("button");
    btn_edit.classList.add("btn_edit");
    let btn_buy = document.createElement("button");
    btn_edit.classList.add("btn_buy");

    img.src = el.image;
    text_name.innerText = el.name;
    text_price.innerText = `${el.price}$`;
    btn_delete.innerHTML = `<ion-icon name="trash"></ion-icon>`;
    btn_edit.innerHTML = `<ion-icon name="create"></ion-icon>`;
    btn_buy.innerHTML = `<ion-icon name="add-circle"></ion-icon>`;

    card.append(img);
    menu_text.append(text_name);
    menu_text.append(text_price);
    action_btn.append(btn_buy);
    action_btn.append(btn_edit);
    action_btn.append(btn_delete);
    card.append(menu_text);
    card.append(action_btn);
    menu.appendChild(card);
    //?ACTION
    btn_delete.addEventListener("click", function () {
      deleteProduct(index);
    });

    btn_buy.addEventListener("click", () => {
      let findObj = newData.find((el, idx) => idx === index);
      let data = JSON.parse(localStorage.getItem("basket")) || [];
      data.push(findObj);
      localStorage.setItem("basket", JSON.stringify(data));
    });

    btn_edit.addEventListener("click", () => {
      modal_window.style.display = "flex";
      updateProduct(index);
    });
    //?ACTION
  });
}
window.addEventListener("click", (e) => {
  if (e.target === modal_window) {
    modal_window.style.display = "none";
  }
});

function deleteProduct(id) {
  let data = JSON.parse(localStorage.getItem("food")) || [];
  data.splice(id, 1);
  localStorage.setItem("food", JSON.stringify(data));
  readProduct();
}

let edit_image = document.querySelector(".edit_image");
let edit_name = document.querySelector(".edit_name");
let edit_price = document.querySelector(".edit_price");
let btn_save = document.querySelector(".btn_save");

function updateProduct(index) {
  let data = JSON.parse(localStorage.getItem("food")) || [];
  edit_image.value = data[index].image;
  edit_name.value = data[index].name;
  edit_price.value = data[index].price;

  edit_image.setAttribute("id", index);
  edit_name.setAttribute("id", index);
  edit_price.setAttribute("id", index);
}

btn_save.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("food")) || [];
  let imageId = edit_image.id;
  let nameId = edit_name.id;
  let priceId = edit_price.id;

  let editedProduct = {
    image: edit_image.value,
    name: edit_name.value,
    price: edit_price.value,
  };

  data.splice(imageId, 1, editedProduct);
  data.splice(nameId, 1, editedProduct);
  data.splice(priceId, 1, editedProduct);
  localStorage.setItem("food", JSON.stringify(data));
  readProduct();
  modal_window.style.display = "none";
});
