{
  /* {posts.map((quote) => {
              return <QuotesRendering key={quote.id} {...quote} />;
          })} */
}


  // const nextQuotes = () => {
  //   const next = Math.floor(Math.random(currentQuoteIndex + 1) * quotes.length);
  //   return setCurrentQuoteIndex(next);
// };
  
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const currentQuote = quotes[currentQuoteIndex];


  function Quote() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    return (
      <form>
        {quotes.slice(currentQuoteIndex, currentQuoteIndex + 1).map((post) => {
          return <QuotesRendering key={post.id} {...post} />;
        })}
        <button onClick="">Next Quote</button>
      </form>
    );
  }