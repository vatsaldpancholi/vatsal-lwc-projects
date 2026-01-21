import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {

    @api title;

    callAuraComponent(){
        const event = new CustomEvent("sendMessage", {
            detail:{
                "messageFromLWC" : "Hello from LWC"
            }
        })
        this.dispatchEvent(event);
    }
}