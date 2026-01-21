import { LightningElement, wire } from 'lwc';
import SAMPLEMESSAGECHANNEL from "@salesforce/messageChannel/SampleMessageChannel__c"
import {MessageContext, publish} from "lightning/messageService"

export default class LmsLwcToLwcComponentA extends LightningElement {

    publishMessage;

    @wire(MessageContext)
    context;

    inputHandler(event){
        this.publishMessage = event.target.value;
    }

    publishHandler(){
        const messageToPublish = {
            lmsData: {
                value: this.publishMessage
            }
        }
        publish(this.context, SAMPLEMESSAGECHANNEL, messageToPublish);
    }
}