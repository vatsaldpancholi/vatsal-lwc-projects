import { LightningElement } from 'lwc';
import  FONTAWESOME from '@salesforce/resourceUrl/fontawesome';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class MemoryGame extends LightningElement {

    showCongratulations = false

    totalTime = "00:00";
    timerReference;

    isLoadComplete = false;
    openCards = [];
    moves = 0;
    matchCard = [];
    cards = [
        { id : 1, listClass : "card", type : "diamond", icon : "fa fa-diamond" },
        { id : 2, listClass : "card", type : "ravelry",  icon : "fa fa-ravelry" },
        { id : 3, listClass : "card", type : "snowflake", icon : "fa fa-snowflake-o" },
        { id : 4, listClass : "card", type : "bath", icon : "fa fa-bath" },
        { id : 5, listClass : "card", type : "microchip", icon : "fa fa-microchip" },
        { id : 6, listClass : "card", type : "pcircle", icon : "fa fa-plus-circle" },
        { id : 7, listClass : "card", type : "podcast", icon : "fa fa-podcast" },
        { id : 8, listClass : "card", type : "diamond", icon : "fa fa-diamond" },
        { id : 9, listClass : "card", type : "pcircle", icon : "fa fa-plus-circle" },
        { id : 10, listClass : "card", type : "ravelry", icon : "fa fa-ravelry" },
        { id : 11, listClass : "card", type : "linode", icon : "fa fa-linode" },
        { id : 12, listClass : "card", type : "bath", icon : "fa fa-bath" },
        { id : 13, listClass : "card", type : "microchip", icon : "fa fa-microchip" },
        { id : 14, listClass : "card", type : "linode", icon : "fa fa-linode" },
        { id : 15, listClass : "card", type : "podcast", icon : "fa fa-podcast" },
        { id : 16, listClass : "card", type : "snowflake", icon : "fa fa-snowflake-o" }
    ];

    get userRatings(){
        let starRating = this.moves < 12 ? [1,2,3] : this.moves < 20 ? [1,2] : [1];
        return this.matchCard.length === this.cards.length ? starRating : [];
    }

    displayCard(event){
        let currentCard = event.target;
        currentCard.classList.add("open", "show", "disabled");

        //whichever card is clicked, this will push it into the array
        //Not using push-pop from immutability POV

        this.openCards = this.openCards.concat(event.target);
        const openCardsLength = this.openCards.length

        if(openCardsLength === 2){
            this.moves = this.moves + 1;
            if(this.moves === 1){
                this.timer();
            }
            if(this.openCards[0].type === this.openCards[1].type){
                this.matchCard = this.matchCard.concat(this.openCards[0], this.openCards[1]);
                this.matched();
            }else{
                this.unMatched();
            }
        }
    }

    matched(){
        this.openCards[0].classList.add("match", "disabled");
        this.openCards[1].classList.add("match", "disabled");
        this.openCards[0].classList.remove("open", "show");
        this.openCards[1].classList.remove("open", "show");
        this.openCards = [];

        if(this.matchCard.length === this.cards.length){
            window.clearInterval(this.timerReference);
            this.showCongratulations = true;
        }
    }

    unMatched(){
        this.openCards[0].classList.add("unMatched");
        this.openCards[1].classList.add("unMatched");
        this.action("DISABLE");

        //this.timeOutReference = 
        setTimeout(() => {
            //if(this.openCards.length === 0) return;
            this.openCards[0].classList.remove("show", "open", "unMatched");
            this.openCards[1].classList.remove("show", "open", "unMatched");
            this.action("ENABLE");
            this.openCards = [];
        }, 1100);
    }

    action(action){
        let cards = this.template.querySelectorAll(".card");
        Array.from(cards).forEach(item => {
            if(action === "ENABLE"){
                let isMatch = item.classList.contains("match");
                if(!isMatch){
                    item.classList.remove("disabled")
                }
            }
            if(action === "DISABLE"){
                item.classList.add("disabled");
            }
        })
    }

    timer(){
        let startTime = new Date();
        this.timerReference = setInterval(() =>{
            let differenceTime = new Date().getTime() - startTime.getTime();
            let delta = Math.floor(differenceTime / 1000);
            const minutes = Math.floor(delta % 3600 / 1000);
            const seconds = Math.floor(delta % 3600 % 60);
            const minutesDisplay = minutes > 0 ? minutes + (minutes === 1 ? "minute, ":" minutes, "):"";
            const secondsDisplay = seconds > 0 ? seconds + (seconds === 1 ? "second, ":" seconds"):"";
            this.totalTime = minutesDisplay + secondsDisplay
        }, 1000)
    }

    restartHandler(){
        
        this.showCongratulations = false;
        //reset timers
        //this.totalTime = "00:00";
        
        //reset cards related variables
        this.openCards = [];
        this.matchCard = [];
        this.totalTime = "00:00";
        this.moves = 0;
        window.clearInterval(this.timerReference);
        //window.clearTimeout(this.timeOutReference);
        
        //Reset all css classes
        let element = this.template.querySelectorAll(".card");
        Array.from(element).forEach(item => {
            item.classList.remove("show", "open", "match", "disabled", "unMatched")
        })

        //Shuffle and swaping cards
        let cardsCopyArray = [...this.cards];
        let counter = cardsCopyArray.length
        while(counter > 0){
            let index = Math.floor(Math.random()*counter);
            counter--;

            let temp = cardsCopyArray[counter];
            cardsCopyArray[counter] = cardsCopyArray[index];
            cardsCopyArray[index] = temp
        }

        this.cards = [...cardsCopyArray];
    }

    renderedCallback(){
        
        if(this.isLoadComplete){
            
            return;
        }else{

            loadStyle(this, FONTAWESOME+'/fontawesome/css/font-awesome.min.css').then(() => {
                //isSuccess
                console.log("Load success 1");
            }).catch(error => {
                console.error("Error 1", error);
            })

            this.isLoadComplete = true;
        }
    }
}