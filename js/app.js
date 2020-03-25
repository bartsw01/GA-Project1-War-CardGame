// Pseudocode - War Card Game

// *****************Action Steps***************
//Monday - Day 1
// xxxSetup and link startup files
// xxxBring in JS code for my other repo
// xxxTest card deck building JS code
// xxxFind graphic file for cards in GA Repo
// xxxxfigure out code to deal deck for each player




//Tuesday - Day 2
// JS Logic - pick a card and compare point values
// Set point values for cards


// ******Try to get deck to display on index.html******
// ******OR*********Try to get just two cards to display
// Create Turn Button - link to jQuery command to run code for turn
// Set point values for cards


// Determine a winner
// Add poinuujkjl;p[pt to score - player or computer
// remove 1 card from each deck


// ****************HTML NEEDED*****************
// Need to setup board link to background image
// Create placeholder divs for 2 cards .....then they will flip to show face
// Turn button 
// New Game button
// box to show how many cards each player has




// **********JAVASCRIPT SECTION - STAGE ONE**************************
    // Create deck of cards in array
    // Variable Needed
        // cardDeck = ["Array of cards"]
        // player1CardDeck = ["Array of Player1 cards"]
        // player2CardDeck = ["Array of Player2 cards"]
        // create point values for cards

    
    // Shuffle cards on each new game
    // Deal cards into 2 decks of 26 cards
    // Click event for TURN button
        // Deal on card from each deck and show face
        // compare point values of cards and determine winner
        // winner recieves the two cards into their discard card array
        // update score for each player - how many cards in their discard pile
        // If there is a tie - lay out 3 cards each face down then flip next card
         // game ends when one player has 0 cards left in their deck
        // game displays winner
// **********JAVASCRIPT LOGIC**************************   
    // New Game button - create cardDeck then create Player1 $ Player2 card arrays
    // need forEAch method to pull cards from main cardDeck Array
    // TURN Button - need forEach method to pull one card each from each Players array 
        // compare point values of cards to determine winners
        


// **********JAVASCRIPT SECTION - STAGE TWO**************************
    // remove discard Pile array
    // add cards that are won to the players active deck array
    // game ends when one player has 0 cards left in their deck
    // game displays winner

    // class Deck{
    //     constructor(){
    //         this.deck = deck;
    //         const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    //         const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    //     }
    //     createDeck()
    // {
    //     var deck = new Array();
    //     for(var i = 0; i < suits.length; i++)
    //     {
    //         for(var x = 0; x < values.length; x++)
    //         {
    //             var card = {Value: values[x], Suit: suits[i]};
    //             deck.push(card);
    //         }
    //     }
    //     return deck;
    // }
    // }
    // console.log(Deck.createDeck)

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    // }
      function createDeck()
    {
        var deck = new Array();
        for(var i = 0; i < suits.length; i++)
        {
            for(var x = 0; x < values.length; x++)
            {
                var card = {Value: values[x], Suit: suits[i]};
                deck.push(card);
            }
        }
        return deck;
    }

    console.log(createDeck())
    const globalDeck = createDeck();


    // Create dealPlayerDeck function
    let player1Deck = [];
    let player2Deck = [];

    function dealPlayerDeck() {

        for (i=0; i < 26; i++) {
            let card1 = Math.floor(Math.random()*globalDeck.length)
            player1Deck.push(globalDeck[card1]);
            globalDeck.splice(card1,1);
            let card2 = Math.floor(Math.random()*globalDeck.length)
            player2Deck.push(globalDeck[card2]);
            globalDeck.splice(card2, 1);
            //console.log(globalDeck.length);	
        }     
    }

    dealPlayerDeck();
    console.log('player1Deck', player1Deck);
    console.log('player2Deck', player2Deck);

 

    

    function compareCards () {
        let playerCard1 = player1Deck[0];
        player1Deck.splice(playerCard1, 1);
        let playerCard2 = player2Deck[0];
        player2Deck.splice(playerCard2, 1);

        console.log(playerCard1);
        console.log(player1Deck.length);
        console.log(playerCard2);
        console.log(player2Deck.length);

        

        let player1CardValue = playerCard1.Value;
        let player2CardValue = playerCard2.Value;

        console.log(player1CardValue);
        console.log(player2CardValue);
        

        let player1CompareValue = values.indexOf(playerCard1.Value) + 2;
        let player2CompareValue = values.indexOf(playerCard2.Value) + 2;
           

        let playerScore1 = [];
        let playerScore2 = [];

        if (player1CompareValue > player2CompareValue) {
            playerScore1.push(playerCard1);
            playerScore1.push(playerCard2);
                console.log("Player 1 Wins!");
                console.log('Player 1 Score: ', playerScore1.length);
                console.log('Player 2 Score: ', playerScore2.length);
            } else if (player2CompareValue > player1CompareValue){
                playerScore2.push(playerCard1);
                playerScore2.push(playerCard2);
                console.log("Player 2 Wins!");
                console.log('Player 1 Score: ', playerScore1.length);
                console.log('Player 2 Score: ', playerScore2.length);
            } else {
                playerScore1.push(playerCard1);
                playerScore2.push(playerCard2);
                console.log("We have a tie!")
                console.log('Player 1 Score: ', playerScore1.length);
                console.log('Player 2 Score: ', playerScore2.length);
            }
        
        // compare values and push cards to player discard decks 
        // player score === playerDiscardDeck.length
        
    }
    compareCards();

    
    



    