import classes from './Card.module.scss';

const Card = ({text, number}) => {
    return ( 
        <div className={classes.card}>
            <span className={classes.cardText}>{text}</span>
            <div className={classes.cardNumber}>{number}</div>
        </div>
     );
}
 
export default Card;