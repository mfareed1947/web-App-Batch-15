

const Card = ({ title, para, getColor }) => {
  getColor("red");

  return (
    <>
      <h1>Heading</h1>
      <h2>{title}</h2>
      <p>{para}</p>
    </>
  );
};

export default Card;
