// Pseudocode - War Card Game

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
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
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
    