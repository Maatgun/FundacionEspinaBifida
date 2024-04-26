window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


/* ----- Menu Hamburgusa ---- */

// Función para abrir y cerrar el menú
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuToggle = document.getElementById('menuToggle');
  menu.classList.toggle('active');
  
  // Cambiar el icono del menú
  if (menu.classList.contains('active')) {
      menuToggle.querySelector('i').className = 'fas fa-times'; // Cambiar a la "X"
  } else {
      menuToggle.querySelector('i').className = 'fas fa-bars'; // Cambiar al ícono del menú
  }
}

// Función para cerrar el menú cuando se hace clic fuera de él o en un enlace de sección
function closeMenu() {
  const menu = document.querySelector('.menu');
  const menuToggle = document.getElementById('menuToggle');
  menu.classList.remove('active');
  menuToggle.querySelector('i').className = 'fas fa-bars'; // Cambiar al ícono del menú
}

// Agregar evento de clic al botón de menú
document.getElementById('menuToggle').addEventListener('click', function() {
  toggleMenu();
});

// Agregar evento de clic al documento para cerrar el menú cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
  if (!event.target.closest('.menu') && !event.target.closest('.menu-toggle')) {
      closeMenu();
  }
});

// Obtener todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu ul li a');

// Agregar un evento de clic a cada enlace del menú para cerrar el menú
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});




/* ---- Ver más button ---- */

document.addEventListener("DOMContentLoaded", function() {
    const btnLoadMore = document.querySelector(".btn-load-more");
    const btnLoadLess = document.querySelector(".btn-load-less");
    const hiddenServices = document.querySelectorAll(".services-container .service:nth-child(n+7)");

    btnLoadMore.addEventListener("click", function() {
        hiddenServices.forEach(service => {
            service.style.display = "block";
        });
        btnLoadMore.style.display = "none";
        btnLoadLess.style.display = "block";
    });

    btnLoadLess.addEventListener("click", function() {
        hiddenServices.forEach(service => {
            service.style.display = "none";
        });
        btnLoadMore.style.display = "block";
        btnLoadLess.style.display = "none";
    });
});

/* ----- formulario ---- */

const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      // Aquí podrías enviar los datos del formulario si está validado
      alert('Formulario enviado correctamente');
      form.reset();
    }
  });

  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validación del nombre
    if (name === '') {
      setErrorFor('name', 'Por favor, ingresa tu nombre');
      isValid = false;
    } else {
      setSuccessFor('name');
    }

    // Validación del email
    if (email === '') {
      setErrorFor('email', 'Por favor, ingresa tu email');
      isValid = false;
    } else if (!isEmail(email)) {
      setErrorFor('email', 'Email inválido');
      isValid = false;
    } else {
      setSuccessFor('email');
    }

    // Validación del mensaje
    if (message === '') {
      setErrorFor('message', 'Por favor, ingresa un mensaje');
      isValid = false;
    } else {
      setSuccessFor('message');
    }

    return isValid;
  }

  function setErrorFor(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const formGroup = inputElement.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
  
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    errorMessage.innerText = message;
  }

  function setSuccessFor(inputId) {
    const inputElement = document.getElementById(inputId);
    const formGroup = inputElement.parentElement;
  
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
  }

  function isEmail(email) {
    // Expresión regular para validar email
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

