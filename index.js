// sideBar
$("#search").click(() => {
  $(".items").css({ display: "none" });
  $(".search").css({ display: "block" });
  $(".category").css({ display: "none" });
  $(".loading-screen").fadeOut(300)
});
// open
function open() {
  $("#open").click(() => {
    $(".lists").animate({ left: "0px" }, 800);
    $(".toggle").animate({ left: "300px" }, 800);
    $("#close").css({ display: "block" });
    $("#open").css({ display: "none" });
    new WOW().init();
  });
}
open();
// close
function close() {
  $("#close").click(() => {
    $(".lists").animate({ left: "-300px" }, 800);
    $(".toggle").animate({ left: "0px" }, 800);
    $("#close").css({ display: "none" });
    $("#open").css({ display: "block" });
  });
}
close();
// home page data
let data;
async function home() {
  data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
  data = await data.json();
  let box = ``;
  for (i = 0; i < data.meals.length; i++) {
    box += `
        <div class="col-md-3 item">
        <div class="img-container">
            <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" id="${data.meals[i].idMeal}" alt="">
            <div class="overlay position-absolute d-flex align-items-center">
                <h3 class="text-dark ps-3" id="food-name">${data.meals[i].strMeal}</h3>
            </div>
        </div>
    </div>
        `;
  }
  document.getElementById("item").innerHTML = box;
}
home();
                                                        // contact
$("#contact").click(() => {
  $("#contactsPage").css({ display: "block" });
  $(".items").css({ display: "none" });
  $(".area").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".category").css({ display: "none" });
});
                                        // category
async function getCategory() {
  let category = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  category = await category.json();
  let categoryContainer = ``;
  for (let i = 0; i < 14; i++) {
    categoryContainer += `
        <div class="col-md-3 item ">
        <div class="img-container">
            <img src="${category.categories[i].strCategoryThumb}" class="w-100 rounded-3" id="" alt="">
            <div class="overlay position-absolute d-flex align-items-center text-center">
                <h3 class="text-dark ps-3" id="food-name">${category.categories[i].strCategory}</h3>
                <p>${category.categories[i].strCategoryDescription}</p>
            </div>
        </div>
    </div>
        `;
  }
  document.getElementById("categoryRow").innerHTML = categoryContainer;
}
$("#category").click(() => {
  $(".lists").animate({ left: "-300px" }, 800);
  $(".toggle").animate({ left: "0px" }, 800);
  $("#close").css({ display: "none" });
  $("#open").css({ display: "block" });
  $(".items").css({ display: "none" });
  $(".category").css({ display: "block" });
  $(".ingredients").css({ display: "none" });
    $(".area").css({ display: "none" });
    $(".search").css({ display: "none" });
  $("#contactsPage").css({ display: "none" });
  getCategory();
});
                                                // area
async function areaFun(area) {
  let areaApi = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  areaApi = await areaApi.json();
  let cartona = ``;
  for (i = 0; i < 20; i++) {
    cartona += `
        <div class="col-md-3 text-center text-white area-item">
        <i class="fa-solid fa-house-laptop fs-1 p-2"></i>
        <h3 id="areaName">${data.meals[i].strArea}</h3>
    </div>
        `;
  }
  document.getElementById("Area").innerHTML= cartona;
}
$("#area").click(()=>{
  $(".lists").animate({ left: "-300px" }, 800);
  $(".toggle").animate({ left: "0px" }, 800);
  $("#close").css({ display: "none" });
  $("#open").css({ display: "block" });
  $(".items").css({ display: "none" });
  $(".area").css({ display: "block" });
  $(".search").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".category").css({ display: "none" });
  $("#contactsPage").css({ display: "none" });
  areaFun();
});
                                            // Ingredients
async function Ingredients() {
    let Ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    Ingredients = await Ingredients.json();
    let ingredientBox = ``;
    for (i = 0; i < 20; i++) {
      ingredientBox += `
      <div class="col-md-3 text-center text-white ingI">
      <i class="fa-solid fa-drumstick-bite fs-1 p-2"></i>
      <h2 id="mealName">${Ingredients.meals[i].strIngredient}</h2>
      <p id="caption">${Ingredients.meals[i].strDescription.split(" ").slice(0,20).join(" ")}}</p>
  </div>
          `;
    }
    document.getElementById("Ingrediant").innerHTML= ingredientBox;
  }
  $("#ingred").click(() => {
    $(".lists").animate({ left: "-300px" }, 800);
    $(".toggle").animate({ left: "0px" }, 800);
    $("#close").css({ display: "none" });
    $("#open").css({ display: "block" });
    $(".items").css({ display: "none" });
    $(".ingredients").css({ display: "block" });
    $(".area").css({ display: "none" });
    $(".search").css({ display: "none" });
    $("#contactsPage").css({ display: "none" });
    Ingredients()
  });
 




