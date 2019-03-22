/* Random quote generating function */

  function writeRandomQuote () {
    const quotes = new Array();
    quotes[0] = "<i>'A spatula, a spatula, my husband's kingdom for a spatula.'</i> - Wife of King Richard III";
    quotes[1] = "<i>'I regret that I have but one spatula to give for my receipes.'</i> - Mrs. Nathan Hale";
    quotes[2] = "<i>'I liked their spatulas so much, I bought the company.'</i> - Sy Greenblum";
    quotes[3] = "<i>'...the right of the people to keep and bear Spatulas, shall not be infringed.'</i> - U. S. Cookstitution";
    quotes[4] = "<i>'A kitchen without spatulas is like a body without a soul.'</i> - Terentia, wife of Cicero";
    quotes[5] = "<i>'The unexamined spatula is not worth flipping.'</i> - Socrates' housekeeper";
    quotes[6] = "<i>'That's one small spatula for a man, one giant spatula for mankind.'</i> - Neil Armstrong's BBQ apron";
    quotes[7] = "<i>'I came, I saw a spatula, I cooked.'</i> - Epicurius";
    quotes[8] = "<i>'Ask not what your spatula can do for you, but what you can do with your spatula.'</i> - JFK's Chief of Domestic Affairs";
    quotes[9] = "<i>'The creation of a thousand buffets begins with but one spatula.'</i> - General Tso";
    quotes[10] = "<i>'There is no greater education than one that is spatula-driven.'</i> - George deGrasse Foreman";
    quotes[11] = "<i>'May the Spatula be with you.'</i> - Plaque in the kitchen of the Restaurant at the End of the Universe";
    quotes[12] = "<i>'You're gonna need a bigger spatula.'</i> - 'Jaws' after-party and fish fry";
    quotes[13] = "<i>'Good coders copy, great coders steal.'</i> - snagged by code.wizard.24.7";
    const rand = Math.floor(Math.random()*quotes.length);

return quotes [rand];
}

/* Function for button to re-run above function */

  function assignQuote () {
    document.getElementById("quotes").innerHTML = writeRandomQuote();
}

assignQuote();
