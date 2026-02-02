import { LightningElement, api } from 'lwc';

export default class ProductTile extends LightningElement {

    @api productFromParent;

    onClickHandler(){
        const event = new CustomEvent("productselect", {
            detail : this.productFromParent
        });
        this.dispatchEvent(event);
    }
}