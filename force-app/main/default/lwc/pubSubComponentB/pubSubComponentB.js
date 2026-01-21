import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubSubComponentB extends LightningElement {

    message;
    
    connectedCallback(){
        this.callSubscriber();
    }

    callSubscriber(){
        console.log('here');
        pubSub.subscribe('componentA', (message)=>{
            this.message = message;
        })
    }
}