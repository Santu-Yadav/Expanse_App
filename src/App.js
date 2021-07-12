import Expanses from "./Expanse/Expanse";

function App() {
  const Expanse = [
    { title: "Car Insurance", amount: 294, date: new Date(2015, 5, 12) },
    { title: "School    ", amount: 800, date: new Date(2016, 9, 29) },
    { title: "Car Insurance", amount: 300, date: new Date(2021, 7, 1) },
  ];

  return (
    <div>
      <Expanses
        date={Expanse[0].date}
        itenary={Expanse[0].title}
        cost={Expanse[0].amount}
      />
      <Expanses
        date={Expanse[1].date}
        itenary={Expanse[1].title}
        cost={Expanse[1].amount}
      />
      <Expanses
        date={Expanse[2].date}
        itenary={Expanse[2].title}
        cost={Expanse[2].amount}
      />
    </div>
  );
}

export default App;
