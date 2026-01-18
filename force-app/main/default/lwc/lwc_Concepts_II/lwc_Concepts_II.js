import { LightningElement } from 'lwc';

export default class Lwc_Concepts_II extends LightningElement {

    isVisible = false;
    name;

    handleClick(){
        this.isVisible = !this.isVisible;
    }

    changeHandler(event){
        this.name = event.target.value;
    }

    get helloMethod(){
        return this.name === 'hello';
    }

    // Template looping.

    carList = ["Ford", "BMW", "Audi", "Tata", "Kia"];

    ceoList = [
        {
            id:1,
            company: "X",
            name: "Elon Musk"
         },
         {
            id:2,
            company:"Apple",
            name: "Tim Cook"
          },
          {
            id:3,
            company:"Google",
            name: "Sundar Pichai"
           },
           {
            id:4,
            company:"Microsoft",
            name: "Satya Nadella"
           },
           {
            id:5,
            company:"Facebook",
            name: "Mark Zuckerberg"
           }
    ]
} 