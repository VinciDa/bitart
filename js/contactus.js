function myFunction() {
    let loader = document.getElementById("load")
    let alert = document.getElementById("alert")

    loader.style.display = "block"

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxIdhloVR7Qu3avBALsPqn-UDJr3WpCrpdYdf6aIMjgJjtVVVPLS0IQz_92pCXE_4gw/exec'
    const form = document.forms['google-sheet']
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => 
                loader.style.display = "none",
                alert.style.display = "block",
                setTimeout(() => {
                    alert.style.display = "none"
                    window.location.reload()
                }, 1000),
               
                )
            .catch(error => console.error('Error!', error.message))
    })
}