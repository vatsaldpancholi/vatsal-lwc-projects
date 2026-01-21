import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubSubComponentA extends LightningElement {

    message;

    inputHandler(event){
        this.message = event.target.value;
    }

    publishHandler(){
        console.log('here1');
        pubSub.publish('componentA', this.message);
    }
}