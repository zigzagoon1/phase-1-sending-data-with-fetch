// Add your code here


function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(function(object) {
        console.log(object.id);
        const body = document.querySelector('body');
        body.innerHTML = object["id"];
    }
)
.catch(function(error) {
    const p = document.createElement('p');
    const body = document.querySelector('body');
    p.textContent = error.message;
    body.append(p);
})
}



// submitData("kelly", "kelly@kelly.com");