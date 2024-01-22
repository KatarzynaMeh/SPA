export const nextQuote = (quote) => {
    const next = Math.floor(Math.random() * quote.length);
    return quote[next];
}