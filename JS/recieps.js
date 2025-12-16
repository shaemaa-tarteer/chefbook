function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    category.style.display = (category.style.display === 'none') ? 'block' : 'none';
}