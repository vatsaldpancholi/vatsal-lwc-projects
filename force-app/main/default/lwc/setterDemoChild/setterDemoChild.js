import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    userDetail;
    @api

    get userAge(){
        return this.userDetail;
    }

    set userAge(data){
        let newAge = data.age * 2;
        this.userDetail = {...data, age:newAge, "location":"Test Location"}
    }
}