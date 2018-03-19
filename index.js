function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })

  function createRecipe() {

    let name = document.getElementById('name')
    let ingredients = document.getElementsByName('ingredients')

    let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

    console.log('ingredients', ingredients)
    let html = recipeTemplate({name: name, ingredients: ingredients})
  }

  function displayEditForm() {


  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  // init()
})


//put any page initialization/handlebars initialization here
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
Handlebars.registerHelper('displayIngredient', function(ingredient) {
  return new Handlebars.SafeString('<li>' + ingredient + '</li>')
})

function createRecipe() {

  let name = document.getElementById('name').value
  let description = document.getElementById("description").value
  let ingredientsNodes = document.getElementsByName('ingredients')

  let ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  // console.log('ingredients', ingredients)
  document.getElementById("main").innerHTML += recipeTemplate({name: name, description: description, ingredients: ingredients})
}

function displayEditForm() {
  let name = document.getElementById('name').value
  let description = document.getElementById("description").value
  let ingredientsNodes = document.getElementsByName('ingredientsList')

  let formTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

}
