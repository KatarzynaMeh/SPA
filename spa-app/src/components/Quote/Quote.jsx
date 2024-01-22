import { useState } from "react";
import { quotes } from "./../utils/quotes";
import { QuotesRendering } from "../QuotesRendering/QuotesRendering";
import { nextQuote } from "../utils/nextQuote";
import classes from './Quote.module.css'

function Quote() {
  const [currentQuote, setCurrentQuote] = useState(nextQuote(quotes));

  const changeQuote = () => {
    setCurrentQuote(nextQuote(quotes));
  };

  return (
    <div className={classes.formContainer}>
      <form>
        <QuotesRendering key={currentQuote.id} {...currentQuote} />
        <button className={classes.buttonStyle} onClick={changeQuote}>Next Quote</button>
      </form>
    </div>
  );
}

export default Quote;
