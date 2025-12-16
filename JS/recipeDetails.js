const recipes = [
    {
        id: 1,
        title: "Teriyaki Salmon Skewers",
        image: "../images/asian.jpg",
        description: "Delicious and savory teriyaki salmon skewers, a perfect main course for any occasion.",
        ingredients: [
            "2 large leeks",
            "16 bamboo skewers",
            "800g skinless salmon fillets",
            "Vegetable oil",
            "0.5 cup Japanese Teriyaki Marinade"
        ],
        instructions: [
            "Slice through the leeks lengthways. Take a piece of leek and roll to form a cigar shape.",
            "Peel off any outer layers that are old or tough, then cut the leek into 3cm long pieces.",
            "Thread the leek onto a skewer, followed by a piece of salmon.",
            "Heat a non-stick frying pan over medium heat and brush with oil.",
            "Cook the salmon skewers, brushing with teriyaki sauce.",
            "Serve sprinkled with spring onion."
        ]
    },
    {
        id: 2,
        title: "Creamy Steak Pasta",
        image: "../images/ravioli.jpg",
        description: "A creamy pasta dish with tender steak, perfect for a hearty meal.",
        ingredients: [
            "Rump steaks",
            "Butter",
            "Garlic",
            "Rosemary",
            "Pasta",
            "Heavy cream",
            "Parmesan cheese"
        ],
        instructions: [
            "Add butter, garlic, and rosemary to the pan with steaks, spoon the melted butter over the steaks.",
            "Cook pasta in salted water, reserving pasta water before draining.",
            "Melt butter in a skillet and add garlic, cook for 1 minute.",
            "Simmer, then add heavy cream and simmer for a couple of minutes.",
            "Add cooked pasta, steak, and parmesan to the pan, stir, and add pasta water if necessary."
        ]
    },
    {
        id: 3,
        title: "Pancakes",
        image: "../images/pancackes.jpg",
        description: "Fluffy and light pancakes, perfect for breakfast or dessert.",
        ingredients: [
            "Flour",
            "Baking powder",
            "Sugar",
            "Salt",
            "Milk",
            "Butter",
            "Egg"
        ],
        instructions: [
            "Sift dry ingredients together.",
            "Add wet ingredients to the dry mixture and stir to combine.",
            "Scoop batter onto a hot griddle, cooking for 2-3 minutes on each side until golden brown."
        ]
    },
    {
        id: 4,
        title: "Bacon Caesar Salad",
        image: "../images/salad.jpg",
        description: "A rich and flavorful Caesar salad with crispy bacon and homemade dressing.",
        ingredients: [
            "Mayonnaise",
            "Garlic powder",
            "Fresh garlic",
            "Lemon juice",
            "Dijon mustard",
            "Parmesan cheese",
            "Crispy bacon",
            "Romaine lettuce"
        ],
        instructions: [
            "Blend dressing ingredients until smooth.",
            "Toast bread cubes with garlic powder in the oven at 350°F for 25 minutes.",
            "Cook bacon until crispy and set aside.",
            "Assemble salad with lettuce, tomatoes, bacon, croutons, and parmesan. Drizzle with dressing."
        ]
    }
];
function getRecipeId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('recipeId');
}
function loadRecipeDetails() {
    const recipeId = getRecipeId(); 
    const recipe = recipes.find(r => r.id == recipeId);

    if (recipe) {
        const recipeContainer = document.getElementById('recipe-container');
        recipeContainer.innerHTML = `
            <h1>${recipe.title}</h1>
            <img src="${recipe.image}" alt="${recipe.title}" class=" recipe-details img-fluid">
            <p><strong>Description:</strong> ${recipe.description}</p>

            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>

            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;
    } else {
        document.getElementById('recipe-container').innerHTML = `<p>Recipe not found.</p>`;
    }
}


window.onload = loadRecipeDetails;