$(document).ready(function() {
  
  var trevorsQuotes = [
    
    '"October had arrived, spreading a damp chill over the grounds and into the castle. Madam Pomfrey, the nurse, was kept busy by a sudden spate of colds among the staff and students. Raindrops the size of bullets thundered on the castle windows for days on end; the lake rose, the flower beds turned into muddy streams, and Hagrid\'s pumpkins swelled to the size of garden sheds." - J.K. Rowling, Harry Potter and the Chamber of Secrets',
    
    '"When sickness thrives, bad things will follow" - The Hobbit Movie',
    
    '"You\'ve been sitting quietly for far too long" - Gandalf',
    
    '"I\'ll take each and every one of them over the others, for when I called on them, they answered. Honor, loyalty, and a willing heart, I cannot ask for more" - Thorin Oakenshield',
    
    '"If you do something for the right reasons, nothing will stop you." - We Bought a Zoo',
    
    '"A society grows great when old men plant trees whose shade they know they shall never sit in" - Greek proverb',
    
    '"If you want to build a ship, don\'t drum up the men to gather wood, divide the work and give orders. Instead, teach them to yearn for the vast and endless sea." - Antoine de Saint-Exupery',
    
    '"Bran thought about it. \'Can a man still be brave if he\'s afraid?\' \'That is the only time a man can be brave,\' his father told him." - Ned Stark to Bran Stark, Game of Thrones',
    
    '"Nothing of me is original. I am the combined effort of everybody I\'ve ever known." - Invisible Monsters by Chuck Palahniuk',
    
    '"I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life." - The Great Gatsby, F. Scott Fitzgerald',
    
    '“Unless someone like you cares a whole awful lot, Nothing is going to get better. It\'s not.” - The Lorax',
    
    '"The only thing for us to decide is what to do with the time we are given" - Gandalf',
    
    '"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world." - The Hobbit',
    
    '"Life\'s most persistent and urgent question is, \'What are you doing for others?\'" - Martin Luther King Jr.',
    
    '"To the well organized mind, death is but the next great adventure" - Albus Dumbledore',
    
    '"At the end of the day people won\'t remember what you said or did, they will remember how you made them feel." - Maya Angelou',
    
    '"Courage is being scared to death, but saddling up anyway." - John Wayne',
    
    '"How lucky I am to have something, that makes saying goodbye so hard." - A. A. Milne',
    
    '"Whether a parting be forever or merely for a short time... That is up to you." - Majora\'s Mask',
    
    '"You\'ve met with a terrible fate, haven\'t you?" - Majora\'s Mask'
     
  ];
  
  //the function to randomize a quote
  function randomQuote() {
    var randomQuote=trevorsQuotes[Math.floor(Math.random()*trevorsQuotes.length)];
    var temp=randomQuote.split('-');
    var quoteFinal=temp[0];
    var authorFinal=temp[1];
    
    $(".quote").html(quoteFinal);
    $(".author").html(authorFinal);
    
  }
  
  randomQuote();
  
  
  // change html of page when button clicked
  $('.btn').click(function(){
    randomQuote();
    
    $('#disappear').fadeOut(700);
    
  });
  

   
});



