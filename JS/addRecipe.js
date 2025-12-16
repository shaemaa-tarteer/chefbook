// Form Validation
(function () {
    'use strict';

    const form = document.getElementById('recipeForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const recipeName = document.getElementById('recipeName').value.trim();
        const category = document.getElementById('category').value.trim();
        const ingredients = document.getElementById('ingredients').value.trim();
        const instructions = document.getElementById('instructions').value.trim();
        const recipeImage = document.getElementById('recipeImage').value.trim();

        let isValid = true;

        // Validation 1: Recipe name must be at least 3 characters
        if (recipeName.length < 3) {
            alert('Recipe name must be at least 3 characters long.');
            isValid = false;
        }

        // Validation 2: Category must be selected
        if (category === "") {
            alert('Please select a category.');
            isValid = false;
        }

        // Validation 3: Ingredients must be at least 10 characters
        if (ingredients.length < 10) {
            alert('Ingredients must be at least 10 characters long.');
            isValid = false;
        }

        // Validation 4: Instructions must be at least 20 characters
        if (instructions.length < 20) {
            alert('Instructions must be at least 20 characters long.');
            isValid = false;
        }

        if (isValid) {
            alert('Recipe added successfully!');
            localStorage.setItem('recipeName', recipeName); // Save recipe name for next page
            form.submit(); // Submit the form if all validations pass
        }

        form.classList.add('was-validated');
    }, false);

    // Dynamic Writing into Element
    document.getElementById('recipeName').addEventListener('input', function () {
        document.getElementById('namePreview').innerText = `Preview: ${this.value}`;
    });

    // Dynamic Styling with Class
    document.getElementById('recipeName').addEventListener('focus', function () {
        this.classList.add('highlight');
    });

    document.getElementById('recipeName').addEventListener('blur', function () {
        this.classList.remove('highlight');
    });
})();

// jQuery for Additional Interactivity
$(document).ready(function () {
    // Button Hover Effect
    $('button[type="submit"]').hover(
        function () {
            $(this).css('background-color', '#218838');
        },
        function () {
            $(this).css('background-color', '#28a745');
        }
    );

    // Fade-in Effect for Form
    $('#recipeForm').hide().fadeIn(1000);

    // Button Animation on Click
    $('button[type="submit"]').click(function () {
        $(this).animate({ opacity: 0.5 }, 200).animate({ opacity: 1 }, 200);
    });
});