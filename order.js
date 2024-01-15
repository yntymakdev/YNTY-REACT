let basket_list = document.querySelector(".basket");
readBasket();
function readBasket() {
  let data = JSON.parse(localStorage.getItem("basket")) || [];
  data.forEach((el) => {
    let basket_box = document.createElement("div");
    basket_box.classList.add("basket_box");
    let basket_img = document.createElement("img");
    basket_img.classList.add("basket_img");
    let basket_text = document.createElement("div");
    basket_text.classList.add("basket_text");
    let basket_name = document.createElement("p");
    basket_name.classList.add("basketa_price");
    let basket_price = document.createElement("p");
    basket_price.classList.add("basket_price");
    let basket_action = document.createElement("div");
    basket_action.classList.add("basket_action");
    let basket_delete = document.createElement("button");
    basket_delete.classList.add("basket_delete");
    let box_counter = document.createElement("div");
    box_counter.classList.add("box_counter");
    let btn_minus = document.createElement("button");
    btn_minus.classList.add("btn_minus");
    let btn_plus = document.createElement("button");
    btn_plus.classList.add("btn_plus");
    let basket_total_count = document.createElement("h3");
    basket_total_count.classList.add("basket_total_count");

    //   let num = 1;
    //   basket_total_count.innerHTML = `${num}x`;

    //   btn_plus.addEventListener("click", () => {
    //     num += 1;
    //? TEXT
    basket_img.src = el.image;
    basket_name.innerText = el.name;
    basket_price.innerText = `${el.price}$`;
    basket_delete.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    btn_plus.innerHTML = `<ion-icon name="add-outline"></ion-icon>`;
    btn_minus.innerHTML = `<ion-icon name="remove-outline"></ion-icon>`;
    btn_plus.innerHTML = `<ion-icon name="add-outline"></ion-icon>`;
    //? APPEND
    basket_box.append(basket_img);
    basket_text.append(basket_name);
    basket_text.append(basket_price);
    basket_action.append(basket_delete);
    box_counter.append(btn_plus);
    box_counter.append(basket_total_count);
    box_counter.append(btn_minus);
    basket_action.append(box_counter);
    basket_box.append(basket_text);
    basket_box.append(basket_action);
    basket_list.append(basket_box);

    basket_delete.append(basket_box);
    btn_delete.addEventListener("click", () => {
      CreatDelate(index);
    });
  });
}

function CreatDelate(id) {
  let data = JSON.parse(localStorage.getItem("food")) || [];
  data.splice(id, 1);
  localStorage.setItem("food", JSON.stringify(data));
  readProduct();
}
