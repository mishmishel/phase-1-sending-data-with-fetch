const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com",
    }),
};

function submitData() {
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object.id)
        document.body.innerHTML += object.id;
      })
      .catch(function (error) {
        alert("Error");
        console.log(error.message)
        document.body.innerHTML += error.message;
      });
}
  


