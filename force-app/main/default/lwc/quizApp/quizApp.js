import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    /*
        Concepts covered:
        1. LWC Component Creation
        2. lwc:if Directive
        3. Looping - for:each
        4. Getters
        5. Methods
        6. Properties
        7. Form submit and reset
        8. HTML
    */

    //For storing the selected options
    selectedOption = {}

    //To show the count of correct answers
    correctOptions = 0;

    //To display result message
    showResult = false;

    //Object that contains all the question related information
    myQuestions = [

        {
            id: "Question 1",
            question: "Which of the following is not a template loop?",
            options: {
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id: "Question 2",
            question: "Which of the file is invalid in LWC component folder?",
            options: {
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id: "Question 3",
            question: "Which of the following is not a directive?",
            options: {
                a:"for:each",
                b:".lwc:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
    
    // Method to handle validation whether all the options are selected.
    get allNotSelected(){
        return !(Object.keys(this.selectedOption).length === this.myQuestions.length)
    }

    // Method to handle process after click of the radio button.
    changeHandler(event){
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        /*
            shortcut for 
            const name = event.target.name;
            const value = event.target.value;
        */
        const {name, value} = event.target;
        this.selectedOption = {...this.selectedOption, [name]:value};
    }

    // Method to handle form submission.
    submitHandler(event){
        event.preventDefault(); // this wiil prevent the default feature/process of the form tag
        let correct = this.myQuestions.filter(item=>this.selectedOption[item.id] === item.correctAnswer);
        this.correctOptions =  correct.length;
        this.showResult = true;
        console.log("this.correctOptions ",this.correctOptions);
    }

    // Method to handle form reset.
    resetHandler(){
        this.selectedOption = {};
        this.correctOptions = 0;
        this.showResult = false;
    }

    // Method to handle background color of the result based on the score.
    get scoreColorBackground(){
        return `slds-text-heading_large ${(this.myQuestions.length === this.correctOptions)?
            "slds-text-color_success" : "slds-text-color_error"}`
    }
}