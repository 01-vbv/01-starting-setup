import Expenses from './components/Expenses';

const expenses = [
  {
    id: 1,
    title: "Shopping",
    amount: "Rs 2500",
    date: new Date(2021, 2, 3)
  },
  {
    id: 2,
    title: "Mobile",
    amount: "Rs 20000",
    date: new Date(2021, 8, 3)
  },
  {
    id: 3,
    title: "Earphones",
    amount: "Rs 1500",
    date: new Date(2021, 1, 23)
  },
  {
    id: 4,
    title: "Vegetables",
    amount: "Rs 2000",
    date: new Date(2021, 6, 3)
  },
]

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses = {expenses}></Expenses>
      
    </div>
  );
}

export default App;
