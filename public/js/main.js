const API_URL = 'https://dummyjson.com/posts';
// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news');
        const data = await response.json();
        displayNews(data.posts);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');
    }
}

// TODO: Question 1 - Compléter la fonction displayNews
function displayNews(news) {
    const container = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Reset the container before adding new articles
    
    articles.forEach(article => {
        const articleCard = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.body.substring(0, 100)}...</p>
                        <button class="btn btn-primary" onclick="viewArticle(${article.id})">Read More</button>
                    </div>
                </div>
            </div>
        `;
        newsContainer.innerHTML += articleCard;
    });
}

// TODO: Question 2 - Créer une fonction pour gérer les erreurs
function showError(message) {
    const container = document.getElementById("news-container");

  container.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  container.innerHTML = `
  <div class="alert alert-danger d-flex justify-content-between align-items-center fade show col-11">
      <span style="font-size:30;" class="fw-bold">${message}</span>
      <img src="./assets/error.png" alt="Error Icon"></img>
  </div>
  `;
}
    // Afficher un message d'erreur avec Bootstrap


// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);