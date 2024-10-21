// Récupérer les éléments du formulaire
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const stayConnectedCheckbox = document.getElementById('stay-connected');
const loginButton = document.querySelector('.login-button');

// Vérifier si l'utilisateur est déjà connecté
checkRememberedUser();

// Ajouter un écouteur d'événement sur le bouton de connexion
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Empêcher le rechargement de la page
  
  // Récupérer les valeurs du formulaire
  const username = usernameInput.value;
  const password = passwordInput.value;
  const stayConnected = stayConnectedCheckbox.checked;
  
  // Vérifier les informations de connexion (vous devrez ajouter votre propre logique ici)
  if (username === 'your_username' && password === 'your_password') {
    // Connexion réussie
    if (stayConnected) {
      // Enregistrer les informations de l'utilisateur dans les cookies
      rememberUser(username, password);
    } else {
      // Supprimer les informations de l'utilisateur des cookies
      forgetUser();
    }
    showSuccessMessage();
    // Rediriger l'utilisateur vers une page protégée ou afficher un message de succès
    window.location.href = '../index.html';
  } else {
    // Connexion échouée, afficher un message d'erreur
    alert('Nom d\'utilisateur ou mot de passe incorrect.');
  }
});

function checkRememberedUser() {
  // Vérifier si les informations de l'utilisateur sont stockées dans les cookies
  const username = getCookie('remembered_username');
  const password = getCookie('remembered_password');
  
  if (username && password) {
    // Remplir les champs du formulaire avec les informations stockées
    usernameInput.value = username;
    passwordInput.value = password;
    stayConnectedCheckbox.checked = true;
  }
}

function rememberUser(username, password) {
  // Enregistrer les informations de l'utilisateur dans les cookies
  setCookie('remembered_username', username, 30); // Expire dans 30 jours
  setCookie('remembered_password', password, 30);
}

function forgetUser() {
  // Supprimer les informations de l'utilisateur des cookies
  deleteCookie('remembered_username');
  deleteCookie('remembered_password');
}

function setCookie(name, value, days) {
  // Fonction pour définir un cookie
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

function getCookie(name) {
  // Fonction pour récupérer la valeur d'un cookie
  const cookieName = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
}

function deleteCookie(name) {
  // Fonction pour supprimer un cookie
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function showSuccessMessage() {
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000); // Afficher le message pendant 3 secondes
}

function login() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Envoyer les informations de connexion au serveur
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Stocker le jeton d'authentification
      localStorage.setItem('authToken', data.token);
      // Rediriger l'utilisateur vers la page protégée
      window.location.href = '/protected';
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  })
  .catch(error => {
    console.error('Erreur lors de la connexion :', error);
  });
}