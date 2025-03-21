// Espera que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const passwordField = document.getElementById('password');
    const copyIcon = document.getElementById('copyIcon'); 
    const copyMessage = document.getElementById('copyMessage');

    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            const length = document.getElementById('length').value;  
            console.log('Longitud de la contraseña:', length);  
            const password = generatePassword(length);            
            passwordField.value = password;                         
        });
    }

    function generatePassword(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    // Verifica si el ícono de copiar existe antes de agregar el evento
    if (copyIcon) {
        copyIcon.addEventListener('click', function () {
            passwordField.select();
            passwordField.setSelectionRange(0, 99999); // Para dispositivos móviles
            document.execCommand('copy');
            copyMessage.classList.remove('hidden');
            setTimeout(() => {
                copyMessage.classList.add('hidden');
            }, 2000);
        });
    } else {
        console.error("El elemento #copyIcon no se encontró en el DOM.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const infoIcon = document.getElementById('infoIcon');
    const infoMessage = document.getElementById('infoMessage');

    infoIcon.addEventListener('mouseenter', function () {
        infoMessage.classList.add('show');
    });

    infoIcon.addEventListener('mouseleave', function () {
        infoMessage.classList.remove('show');
    });
});