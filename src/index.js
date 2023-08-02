function handleModal(){
    const modalController = document.querySelector(".modal__controller")
    const button = document.querySelector(".header__button")

    button.addEventListener("click", function(event){
        modalController.showModal()
    })
}

handleModal()