import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <addresss>{props.address}</addresss>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetails;
