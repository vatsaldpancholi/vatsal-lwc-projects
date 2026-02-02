import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationServices extends NavigationMixin(LightningElement) {

    onClickHandlerHome(){
        this[NavigationMixin.Navigate]({
            type : "standard__namedPage",
            attributes : {
                pageName : "home"
            }
        })
    }

    onClickHandlerChatter(){

        this[NavigationMixin.Navigate]({
            type : "standard__namedPage",
            attributes : {
                pageName : "chatter"
            }
        })
    }

    onClickHandlerNewRecord(){

        this[NavigationMixin.Navigate]({
            type : "standard__objectPage",
            attributes : {
                objectApiName : "Account",
                actionName : "new"
            }
        })
    }

    onClickHandlerNewRecordWithDefault(){

        const defaultValues = encodeDefaultFieldValues({
            Name : "Test Name",
            Type : "Prospect",
            Industry : "Agriculture"
        })


        this[NavigationMixin.Navigate]({
            type : "standard__objectPage",
            attributes : {
                objectApiName : "Account",
                actionName : "new",
            },
            state : {
                defaultFieldValues : defaultValues
            }
        })
    }

    onClickHandlerListView(){

        this[NavigationMixin.Navigate]({
            type : "standard__objectPage",
            attributes : {
                objectApiName : "Account",
                actionName : "list"
            },
            state : {
                filterName : 'NewLastWeek'
            }
        })
    }

    onClickHandlerFile(){

        this[NavigationMixin.Navigate]({
            type : "standard__objectPage",
            attributes : {
                objectApiName : "ContentDocument",
                actionName : "home"
            }
        })
    }

    onClickHandlerViewNavigation(){

        this[NavigationMixin.Navigate]({
            type : "standard__recordPage",
            attributes : {
                recordId : "001DR00001lfsFHYAY",
                objectApiName : "Account",
                actionName : "edit"
            }
        })
    }

    onClickHandlerEditNavigation(){

        this[NavigationMixin.Navigate]({
            type : "standard__recordPage",
            attributes : {
                recordId : "001DR00001lfsFHYAY",
                objectApiName : "Account",
                actionName : "edit"
            }
        })
    }

    onClickHandlerTabNavigation(){

        this[NavigationMixin.Navigate]({
            type : "standard__navItemPage",
            attributes : {
                apiName : "SF_Resources_Comp_Context_and_Notif"
            }
        })
    }

    onClickHandlerRelatedRecord(){

        this[NavigationMixin.Navigate]({
            type : "standard__recordRelationshipPage",
            attributes : {
                recordId : "001DR00001lfsFHYAY",
                objectApiName : "Account",
                relationshipApiName : "Contacts",
                actionName : "view"
            }
        })
    }

    onClickHandlerExternalPageNavigation(){

        this[NavigationMixin.Navigate]({
            type : "standard__webPage",
            attributes : {
                url : "https://salesforce.com/"
            }
        })
    }

    onClickHandlerLWCRecord(){

        var defination = {
            componentDef : "c:navigationServiceLWCTarget",
            attributes : {
                recordId : "123121fsff13434"
            }
        }

        this[NavigationMixin.Navigate]({
            type : "standard__webPage",
            attributes : {
                url : "/one/one.app#"+btoa(JSON.stringify(defination))
            }
        })
    }

    onClickHandlerAuraRecord(){

        this[NavigationMixin.Navigate]({
            type : "standard__component",
            attributes : {
                componentName : "c__navigationServiceAuraTarget"
            },
            state : {
            "c__id" : "7346237493274"
            }
        })
    }
}