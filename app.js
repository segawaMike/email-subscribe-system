const scriptURL = 'https://script.google.com/macros/s/AKfycbz37iK52ITaV-OLYWROdC5s81dVCMpLcwXFs3_xt1MoXse7SeGRC4h2VUw8RCpt7lIM/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message));
});
