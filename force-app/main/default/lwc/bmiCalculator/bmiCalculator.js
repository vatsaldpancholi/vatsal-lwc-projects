import { LightningElement } from 'lwc';

    /*
        Constant definition start 
        - This is to make sure values need to be changed at one place.
    */
    const BMI_CATEGORY = {
        UNDER : "UNDER",
        NORMAL : "NORMAL",
        OVER : "OVER",
        OBESE : "OBESE"
    };

    const BMI_LABELS = {
        [BMI_CATEGORY.UNDER] : "You're under weight.",
        [BMI_CATEGORY.NORMAL] : "Your weight is normal.",
        [BMI_CATEGORY.OVER] : "You're over weight.",
        [BMI_CATEGORY.OBESE] : "You're obese."
    }

    const BMI_CATEGORY_INDICATORS = {
        [BMI_CATEGORY.UNDER] : "slds-box slds-theme_warning",
        [BMI_CATEGORY.NORMAL] : "slds-box slds-theme_success",
        [BMI_CATEGORY.OVER] : "slds-box slds-theme_warning",
        [BMI_CATEGORY.OBESE] : "slds-box slds-theme_error"
    }

    /*
        Constant definition end.
    */

export default class BmiCalculator extends LightningElement {

    //Variable Definition.
    weight;
    height;
    bmiScore;
    bmiResult;

    //Method to capture weight from the input field.
    captureWeight(event){
        this.weight = parseFloat(event.target.value);
    }

    //Method to capture height from the input field.
    captureHeight(event){
        this.height = parseFloat(event.target.value);
    }

    //Actual working logic to calculate the BMI and categorize in different types.
    calculateBMIHandler(){
        if(!this.weight || !this.height) return;

        let result = this.weight / (this.height * this.height);
        this.bmiScore = result.toFixed(1);

        if(result < 18.5){
            this.bmiResult = BMI_CATEGORY.UNDER;
        }else if(result < 25.0 && result >= 18.5){
            this.bmiResult = BMI_CATEGORY.NORMAL;
        }else if(result < 30.0 && result >= 25.0){
            this.bmiResult = BMI_CATEGORY.OVER;
        }else{
            this.bmiResult = BMI_CATEGORY.OBESE;
        }
    }

    //Getter method to return weight category labels based on BMI score
    get bmiLabels(){
        return BMI_LABELS[this.bmiResult];
    }

    //Getter method to return CSS class values based on BMI score
    get bmiCategoryIndicators(){
        return BMI_CATEGORY_INDICATORS[this.bmiResult];
    }
}