const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")

tabs.forEach(tab => { // boucles pour changer la page affichée
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active") // enleve "active"
        })

        tabs.forEach(tab => {
            tab.classList.remove("active") // enleve "active"
        })

        tab.classList.add("active") // ajoute "active" pour changer de page
        target.classList.add("active") // ajoute "active" pour changer de page
    })
})

function affiche_commentaire(formulaire) { // fonction pour afficher le commentaire
    var commentaire = document.formulaire.input_commentaire.value;

    document.getElementById("txt_commentaire").innerHTML = " → " + commentaire
}
