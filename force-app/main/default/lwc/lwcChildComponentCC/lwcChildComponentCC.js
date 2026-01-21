import { LightningElement, api } from 'lwc';

export default class LwcChildComponentCC extends LightningElement {

    @api alertMessage;          // Component Communication - Primitive Datatype Parent Component examples
    @api cardHeading;           // Component Communication - Primitive Datatype Parent Component examples
    @api cardHeadingII;         // Component Communication - Non-Primitive Datatype Parent Component examples
    @api carouselData;          // Component Communication - Non-Primitive Datatype Parent Component examples
    @api progressBarValue;      // Component Communication - Action from Parent Component example
    @api visibleCard;           //Lightning card visibility controllers for different concepts

    /*
        Component Communication - Child to Parent example
    */

    sliderValue;
    sliderChangeHandler(event){
        this.sliderValue = event.target.value;
    }

    @api resetSlider(){
        this.sliderValue = 50;
    }

    /*
        Component Communication - Child to Parent using simple event and event bubbling example
    */
    handleCloseModel(){
        const closeModal = new CustomEvent("close", {
            bubbles: true,
            detail: {
                message: "Model Closed Successfully!"
            }
        });
        this.dispatchEvent(closeModal);
    }

    footerHandler(){
        console.log("Calling footer handler.");
    }

    /*
        Lightning card visibility controllers for different concepts
    */

    get showCardChildParentA(){
        return this.visibleCard === "A";
    }

    get showCardChildParentB(){
        return this.visibleCard === "B";
    }

    get showCardChildParentC(){
        return this.visibleCard === "C";
    }

    get showCardChildParentD(){
        return this.visibleCard === "D";
    }

    get showCardChildParentD(){
        return this.visibleCard === "E";
    }
}