import Expanses from "./component/Expanse/Expanses";

const App = () => {
  const Expanse = [
    { title: "Car Insurance", amount: 294, date: new Date(2015, 5, 12) },
    { title: "School    ", amount: 800, date: new Date(2016, 9, 29) },
    { title: "Car Insurance", amount: 300, date: new Date(2021, 7, 1) },
  ];

  return (
    <div>
      <Expanses Expanse={Expanse} />
    </div>
  );
}

export default App;
