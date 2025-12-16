document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // מונע שליחת טופס מסורתית
    const searchTerm = document.getElementById('searchQuery').value;
  
    // שליחת הבקשה ל-PHP באמצעות AJAX
    fetch(`php/search.php?q=${encodeURIComponent(searchTerm)}`)
      .then(response => response.text())
      .then(data => {
        const resultsDiv = document.getElementById('searchResults');
        resultsDiv.innerHTML = data; // הצגת התוצאות
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while searching for recipes.');
      });
  });
  