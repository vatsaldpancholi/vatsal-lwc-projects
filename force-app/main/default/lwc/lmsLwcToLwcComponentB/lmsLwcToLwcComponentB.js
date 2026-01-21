import { LightningElement, wire } from 'lwc';
import SAMPLEMESSAGECHANNEL from "@salesforce/messageChannel/SampleMessageChannel__c";
import {MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe} from "lightning/messageService";

export default class LmsLwcToLwcComponentB extends LightningElement {

    receivedMessage;
    subscription;

    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage();
    }

    subscribeMessage(){
        this.subscription = subscribe(this.context, SAMPLEMESSAGECHANNEL, (message)=>{this.handleMessage(message)}, {scope: APPLICATION_SCOPE});
    }

    handleMessage(message){
        this.receivedMessage = message.lmsData.value? message.lmsData.value : "No Message Published";
    }

    unsubscribeHandler(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}