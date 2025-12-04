// Exemplo de JavaScript inicial para desativar envios de formulários se houver campos inválidos
(() => {
  'use strict'

  // Selecionar todos os formulários que queremos aplicar estilos de validação Bootstrap
  const forms = document.querySelectorAll('.needs-validation')

  // Fazer um loop sobre eles e impedir o envio
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()