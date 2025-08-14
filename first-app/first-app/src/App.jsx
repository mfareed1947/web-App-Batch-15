import { useState } from "react";
import Card from "./components/Card";

// const data = [
//   {
//     title: "Hello I am Fareed",
//     para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,enim corporis eaque, saepe magni quidem mollitia quisquam quasnequecumnihil accusantium deserunt qui! Eius fugit numquam quasi.",
//   },
//   {
//     title: "Hello I am Ali",
//     para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,enim corporis eaque, saepe magni quidem mollitia quisquam quasnequecumnihil accusantium deserunt qui! Eius fugit numquam quasi.",
//   },
//   {
//     title: "Hello I am Ahmed",
//     para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,enim corporis eaque, saepe magni quidem mollitia quisquam quasnequecumnihil accusantium deserunt qui! Eius fugit numquam quasi.",
//   },
//   {
//     title: "Hello I am mustafa",
//     para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,enim corporis eaque, saepe magni quidem mollitia quisquam quasnequecumnihil accusantium deserunt qui! Eius fugit numquam quasi.",
//   },
//   {
//     title: "Hello I am zaan",
//     para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,enim corporis eaque, saepe magni quidem mollitia quisquam quasnequecumnihil accusantium deserunt qui! Eius fugit numquam quasi.",
//   },
// ];
// const getColor = (color) => {
//   console.log(color, "color");
// };
const App = () => {
  const [count, setCount] = useState();

  const handleAdd = () => {
    console.log("add");
    setCount(count + 1);
  };
  const handleMinus = () => {
    console.log("minus");
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      {/* {data.map((currElem, index) => {
        return (
          <Card
            key={index}
            title={currElem.title}
            para={currElem.para}
            getColor={getColor}
          />
        );
      })} */}

      <div>
        <button onClick={handleMinus}>Minus</button>
        <span>{count}</span>
        <button onClick={handleAdd}>Plus</button>
      </div>
    </>
  );
};

export default App;

{
  /* <div>
        <h2>Hello I am Fareed</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          enim corporis eaque, saepe magni quidem mollitia quisquam quasi neque
          cum eum aperiam nihil accusantium deserunt qui! Eius fugit numquam
          quasi.
        </p>
      </div>
      <div>
        <h2>Hello I am Ali</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          enim corporis eaque, saepe magni quidem mollitia quisquam quasi neque
          cum eum aperiam nihil accusantium deserunt qui! Eius fugit numquam
          quasi.
        </p>
      </div>
      <div>
        <h2>Hello I am Mustafa</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          enim corporis eaque, saepe magni quidem mollitia quisquam quasi neque
          cum eum aperiam nihil accusantium deserunt qui! Eius fugit numquam
          quasi.
        </p>
      </div>
      <div>
        <h2>Hello I am Ahmed</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          enim corporis eaque, saepe magni quidem mollitia quisquam quasi neque
          cum eum aperiam nihil accusantium deserunt qui! Eius fugit numquam
          quasi.
        </p>
      </div> */
}
