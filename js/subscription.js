// Seleccionamos los checkboxes y los campos de entrada correspondientes
const emailCheckbox = document.getElementById('email-updates');
const smsCheckbox = document.getElementById('sms-updates');
const emailInput = document.getElementById('email-input');
const phoneInputContainer = document.getElementById('phone-input-container');

// Función para mostrar u ocultar campos según el checkbox seleccionado
function toggleInputFields() {
    if (emailCheckbox.checked) {
        emailInput.classList.remove('hidden');
    } else {
        emailInput.classList.add('hidden');
    }

    if (smsCheckbox.checked) {
        phoneInputContainer.classList.remove('hidden');
    } else {
        phoneInputContainer.classList.add('hidden');
    }
}

// Escuchamos los cambios en ambos checkboxes
emailCheckbox.addEventListener('change', toggleInputFields);
smsCheckbox.addEventListener('change', toggleInputFields);
