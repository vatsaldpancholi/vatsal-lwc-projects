
import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import lifeCycleHook from './lifeCycleHook.html';

export default class LifeCycleHook extends LightningElement {

    /***************************************************
        Mounting phase start:
        - Constructor()
        - connectedCallback()
        - renderedCallback()

        Whenever this code is executed check the conole 
        logs in the browser to see the flow of the
        LWC Lifecycle hook.
    ****************************************************/

    /*
        - First hook of the Mounting Phase lifcycle.
        - No properties available at this method.
        - Flows from parent to child and no access to child component yet.
        - No attributes should be added except "super()" method.
     
    */
    constructor(){
        super();
        console.log('Calling Parent Constructor');
    }

    /*
        - Second hook of the Mounting Phase lifcycle.
        - Called when element is inserted into a document
        - Flows from parent to child and no access to child component yet.
        - Used for initialization tasks, fetch data. set up caches and listen for events
        - Do not use it to change the state of the component instead use getters and setters
    */
    connectedCallback(){
        console.log('Calling Parent connectedCallback hook');
    }

    /*
        - Third and final hook of the Mounting Phase lifcycle.
        - Fired when a component rendering is done and can fire more than once.
        - Use it carefully otherwise it may slow down the page and the component.
        - Flows from child to parent as it has access to child component.
        - If a component re-renders all the expressions used in the template are reevaluated.
        - Do not use it to change the state of the component instead use getters and setters.
        - Do not update a wire adapter config object as it may result in an infinite loop.
    */
    renderedCallback(){
        console.log('Calling Parent renderedCallback hook');
    }

    /*
        - This below piece of code will expose the perfomance issue that can be triggered
        by renderedCallback() if not implemented properly.
    */
    name;
    changeHandler(event){
        this.name = event.target.value;
    }

    /***************************************************
        Unmounting phase example:
        - disconnectedCallback
    ***************************************************/

    /*
        - This method is triggered on click of the button in the parent lwc component.
        - Here we are using alert because once we click the button on the parent component
          data in this method will disappear.
        - At the end the renderedCallback() method will be called as the state of
          isChildVisible is updated.
    */    
    
    isChildVisible = false;

    handleClick(){
        this.isChildVisible = !this.isChildVisible;
    }

    /***************************************************
        Error phase example:
        - errorCallback()
    ***************************************************/
    errorCallback(error, stack){
        console.log(error.message);
        console.log(stack);
    }

    /***************************************************
        Render method example:
        - render()
    ***************************************************/
    selectedButton = "";
    
    render(){
        return  this.selectedButton === "Sign-Up" ? signupTemplate :
                this.selectedButton === "Sign-In" ? signinTemplate :
                lifeCycleHook;
    }

    handleClick(event){
        this.selectedButton = event.target.label;
    }

    handleSubmit(event){
        console.log(`${event.target.label} Successfully`);
    }
}