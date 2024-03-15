var guest = [ ];

function agregarinvitado() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    
    if (name === "" || age === null) {
        alert("llena correctamente los campos");
    } else {
        guest.push(name)

        var list = "<li>" + guest.join("</li><li>") + "</li>";
        document.getElementById("list").innerHTML = list

        var welcome = "hola, bienvenido" + name + "tienes" + age;
        alert(welcome);
    }


}