function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {

  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML)

  createRecipe() {
    
  }

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
