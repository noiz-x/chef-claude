import React from "react"

const Main = () => {
  const [ingredients, setIngredients] = React.useState([])

  const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(initIngredients => [...initIngredients, newIngredient])
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. amala"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}

export default Main