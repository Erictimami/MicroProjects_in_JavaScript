class Card {
  constructor(suit, string_value, num_value){
    this.suit = suit;
    this.string_value = string_value;
    this.num_value = num_value;
  }
  showCard(){
    console.log("suit: "+this.suit+", string value: "+this.string_value+", numerical value: "+this.num_value);
  }
}
var all_suits=['Hearts', 'Clubs', 'Diamonds', 'Spades'];
var all_string_values=['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
var deck_cards= [];
var new_deck = [];
function built_new_deck(){
  deck_cards=[];
  new_deck = [];
  for (var s=0; s<4; s++){
    for(var v=0; v<13; v++){
      const temp_card = new Card(all_suits[s], all_string_values[v], v+1);
      // console.log(temp_card);
      deck_cards.push(temp_card);
      new_deck.push(temp_card);
    }
  }
}

class Deck {
  constructor(deck){
    this.deck=deck;
  }
  shuffle(){
      var i = 0, j = 0, temp = null, array;
      array = this.deck;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      this.deck = array;
    return this.deck;
  }
  reset(){
    for(var i=this.deck.length; i<deck_cards.length; i++){
      this.deck.push(null);
    }
    built_new_deck();
    for(var i=0; i<new_deck.length; i++){
      this.deck[i]=new_deck[i];
    }
    return this.deck;
  }
  deal(){
    return this.deck.pop();
  }
}
built_new_deck();
var deck_1;
deck_1= new Deck(deck_cards);
console.log('afhkljahf;hls;', deck_1);
console.log('###### shuffle ######');
console.log(deck_1.shuffle());

console.log('############');
console.log(deck_1);
console.log('###### Reset ######');
// console.log(deck_1.reset());
// console.log(deck_1.deal());

console.log('testo testo deck_cards; ', deck_cards);
class Player extends Deck {
  constructor(name){
    super(deck_cards);
    this.name = name;
    this.hand = [deck_cards.pop(), deck_cards.pop(), deck_cards.pop(), deck_cards.pop(), deck_cards.pop()];
  } 
  deal(){
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   ',deck_cards.length)
    var dealtCard = super.deal();
    console.log("Super Deal*******",dealtCard);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   ',deck_cards.length)
    this.hand.push(dealtCard);
  }
}
const player_1 = new Player('Eric');
console.log('skalcjhwari'   , player_1.hand);
player_1.deal();
console.log(player_1);
