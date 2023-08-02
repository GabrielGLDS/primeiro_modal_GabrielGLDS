function handleModal(){
    const modalController = document.querySelector(".modal__controller")
    const button = document.querySelector(".header__button")
    
    button.addEventListener("click", function(event){
        modalController.showModal()
    })
}

function closeModal(){
    const modalController = document.querySelector(".modal__controller")
    const closeButton = document.querySelector(".modal__close")
    
    closeButton.addEventListener("click", function(event){
        modalController.close()
    })
    
}

function closeModalBackdrop(){
    const modalController = document.querySelector(".modal__controller")
    modalController.addEventListener("click", function(event){
        // console.log(event.target)
        
        if(event.target.classList.contains('modal__controller')=== true){
            modalController.close()
        }
    })

}

handleModal()
closeModal()
closeModalBackdrop()