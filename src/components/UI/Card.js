//Card component which is supposed to act as a shell around other components;

import "./Card.css";

// props is an object that holds the properties passed to the card component when we use it anywhere else in the code;
const Card = (props) => {
  //making sure any value getting added as a className actually gets added, cause out custom component doesn't recognize className as a default attribute; when creating a custom component, it only supports what you tell it to support ; If build in components support className, yours doesn't;

  const classes = `card ${props.className}`;

  // this recognizes className and general html attributes
  // When you use the card component in the code and pass some content between the tags, that content becomes accessible due to props.children ;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
