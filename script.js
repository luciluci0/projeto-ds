document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    var nome = document.getElementById("nome").value;

    document.getElementById("msg").innerText =
        "Obrigado " + nome + " pelo seu comentário!";
});