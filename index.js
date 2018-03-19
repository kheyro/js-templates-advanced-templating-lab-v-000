function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {

  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML)

  createRecipe() {

    let name = document.getElementById('name')
    let ingredients = document.getElementsByName('ingredients')
    // Handlebars.compile(document.getElementById("main-template").innerHTML);

  }

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
