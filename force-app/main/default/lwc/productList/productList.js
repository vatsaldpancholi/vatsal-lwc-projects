import { LightningElement } from 'lwc';

export default class ProductList extends LightningElement {

    selectedProductDetail = "None";   

    productData = [
        {
            id : "Product 1 Id",
            name : "Product 1 Name",
            price : "$1000"
        },
        {
            id : "Product 2 Id",
            name : "Product 2 Name",
            price : "$2000"
        },
        {
            id : "Product 3 Id",
            name : "Product 3 Name",
            price : "$3000"
        }
    ];

    handleProductSelection(event){
        this.selectedProductDetail = event.detail;
    }
}