const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen) {
    modalImagen.addEventListener('show.bs.modal',  ({relatedTarget}) => {
        const rutaImage = relatedTarget.getAttribute('data-bs-imagen');
    
        const imagen = document.createElement('img');
        imagen.src = `img/${rutaImage}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen Galería';
    
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);
    });
    
    modalImagen.addEventListener('hidden.bs.modal', () => {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    });    
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()