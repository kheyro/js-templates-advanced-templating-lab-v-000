function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function() { })

  function createRecipe() {

    let name = document.getElementById('name')
    let ingredients = document.getElementsByName('ingredients')

    let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

    // console.log('ingredients', ingredients)
    let html = recipeTemplate({name: name, ingredients: ingredients})

  }

  function displayEditForm() {
    Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML)

  }



}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
