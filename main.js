

function abrirProjeto() {
    document
        .getElementById("modalProjeto")
        .classList.add("ativo")
}

function fecharProjeto() {
    document
        .getElementById("modalProjeto")
        .classList.remove("ativo")
}

const modal = document.getElementById("modalProjeto")

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        fecharProjeto()
    }

})

