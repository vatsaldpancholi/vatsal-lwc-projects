import { LightningElement, api } from 'lwc';

export default class LwcComponentCommunication extends LightningElement {
    
    /*
        Component Communication - Non-Primitive Datatype Parent Component examples
    */
    carouselData = [
        {
            src : "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description.",
            alternativeTtext : "First card accessible description.",
        },
        {
            src : "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
            alternativeTtext : "Second card accessible description.",
        },
        {
            src : "https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description.",
            alternativeTtext : "Third card accessible description.",
        }
    ]

    /*
        Component Communication - Action from Parent Component example
    */
    percentValue = 0;
    changePercentValueHandler(event){
        this.percentValue = event.target.value;
    }

    get showCardChildParentB(){
        return this.visibleCard === "B";
    }

    /*
        Component Communication - Child to Parent example
    */

    handleResetSliderButtonClick(){
        this.template.querySelector("c-lwc-Child-Component-C-C").resetSlider();
    }
    get showCardChildParentC(){
        return this.visibleCard === "C";
    }

    /*
        Component Communication - Child to Parent using simple event example
    */
    showModal = false;
    modalCloseMessage;

    handleShowModal(){
        this.showModal = true;
    }

    closeModalHandler(event){
        this.modalCloseMessage = event.detail.message;
        this.showModal = false;
    }
}