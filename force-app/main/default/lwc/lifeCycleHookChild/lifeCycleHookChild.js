
import { LightningElement } from 'lwc';

export default class LifeCycleHook extends LightningElement {

    /***************************************************
        Mounting phase:
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
        console.log('Calling Child Constructor');
    }

    /*
        - Second hook of the Mounting Phase lifcycle.
        - Called when element is inserted into a document
        - Flows from parent to child and no access to child component yet.
        - Used for initialization tasks, fetch data. set up caches and listen for events
        - Do not use it to change the state of the component instead use getters and setters
    */
    connectedCallback(){
        console.log('Calling Child connectedCallback hook');
        throw new Error("Loading of error in Child component");        
        /*
            Eg. of advantage of disconnectedCallback
            - Windows property exists until the browser run irrespective of the component
              running or not and this will cause a memory leak issue.

              window.addEventListener("click", this.handleClick);
        */
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
        console.log('Calling Child renderedCallback hook');
    }

    /***************************************************
        Unmounting phase example:
        - disconnectedCallback
    ***************************************************/

    /*
        - This method is triggered on click of the button in the parent lwc component
        - Here we are using alert because once we click the button on the parent component
          data in this method will disappear.
    */
    
    disconnectedCallback(){
        alert('Calling Child disconnectedCallback hook');

        /*
            - This will resolve the memory leak issue.
            window.removeEventListener("click", this.handleClick);
        */
    }
}