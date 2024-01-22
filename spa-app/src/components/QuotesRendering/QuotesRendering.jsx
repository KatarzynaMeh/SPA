import classes from './QuotesRendering.module.css'

export const QuotesRendering = ({ text, author }) => {
    return (
      <div className={classes.container}>
        <p className={classes.indentationText}>{text}</p>
        <h4 className={classes.indentationText}>{author}</h4>
      </div>
    );
}