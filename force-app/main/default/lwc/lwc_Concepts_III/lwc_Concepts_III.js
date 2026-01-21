import { LightningElement } from 'lwc';

export default class Lwc_Concepts_III extends LightningElement {

    //Query Selector example

    userNames = ["Tom", "Dick", "Harry", "John"];

    fetchDetailHandler(){
        const element = this.template.querySelector('h1');
        element.style.border = "1px solid red";
        console.log(element.innerText);       
        
        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText);
            item.setAttribute("title", item.innerText);
        })

        // lwc: manual demo
        const childElement = this.template.querySelector('.child');
        childElement.innerHTML = '<p> Hey Im a child element</p>';
    }
}