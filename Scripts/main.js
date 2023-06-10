


        window.onload = function() {
            document.getElementById('ContactForm').addEventListener('submit', function(event) {
                event.preventDefault();
                
                document.getElementById('ContactSendingButton').setAttribute('disabled', '');
                document.getElementById('ContactSendingButton').innerHTML = "Enviando...";

                // these IDs from the previous steps
                emailjs.sendForm('araware_website_service', 'AraWare_website_contact', this)
                    .then(function() {
                        alert("¡Listo!\nSu mensaje ha sido enviado.");

                        document.getElementById('ContactSendingButton').removeAttribute('disabled');
                        document.getElementById('ContactSendingButton').innerHTML = "Enviar";

                    }, function(error) {
                        console.log('FAILED...', error);

                        document.getElementById('ContactSendingButton').removeAttribute('disabled');
                        document.getElementById('ContactSendingButton').innerHTML = "Enviar";

                    });
            })
        }
    