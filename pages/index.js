const edtButton = document.querySelector(".btn__edt")
const edtPopup = document.querySelector(".popup")
const buttonClose = edtPopup.querySelector(".form__close")

const nameInput = document.querySelector(".input__name")
const jobInput = document.querySelector(".input__job")
const titleProfile = document.querySelector(".profile__title")
const subtitleProfile = document.querySelector(".profile__subtitle")

const edtForm = document.querySelector(".form")

// função de abrir o popup
function abrirPopup (){
    edtPopup.classList.add("popop__opened")
    nameInput.value = titleProfile.textContent
    jobInput.value = subtitleProfile.textContent
}
edtButton.addEventListener('click', abrirPopup)

function fecharPopup (){
    edtPopup.classList.remove("popop__opened")
}
buttonClose.addEventListener("click", fecharPopup)
    

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    titleProfile.textContent = nameInput.value
    subtitleProfile.textContent = jobInput.value
    fecharPopup ()
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
edtForm.addEventListener('submit', handleProfileFormSubmit); 