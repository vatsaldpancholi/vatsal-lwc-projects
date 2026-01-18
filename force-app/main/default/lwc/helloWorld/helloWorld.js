import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {


    /*
        *** Data Binding ***
    */
    fullName = 'Test User';
    title = 'Test title';

    /*
        event object has target property whhich holds the reference of input field.
    */
    handleKeyUp(event){
        this.title = event.target.value; 
    }

    /*
        *** @Track ***
    */

    address={
        city: 'Jersey City',
        postalcode: '07097',
        country: 'USA'
    }

    /* 
        The below code will avoid the use of @track decorator as it will update 
        the object reference instead of just updating the property value.
    */
    trackHandler(event) {
        this.address = {...this.address, "city": event.target.value};
    }

    /*
        *** Getter ***
    */

        users = ["Tom", "Jerry", "Spike", "Tyke"];
            num1 = 10;
            num2 = 20;

        get firstUser(){
            return this.users[0];
        }

        get multiplication(){
            return this.num1 * this.num2;
        }
}