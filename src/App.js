import Quiz from "./components/Quiz";
import Button from "./components/Quiz/Button";

function App() {
    return <>
        <h1>Quiz App</h1>

        <Quiz question="Колко км/ч е градското ограничение?">
            <Button isCorrect={false}>90 км/ч</Button>
            <Button isCorrect={true}>50 км/ч</Button>
            <Button isCorrect={false}>Зависи дали има полиция.</Button>
        </Quiz>

        <Quiz question="3+2*3=?">
            <Button isCorrect={false}>18</Button>
            <Button isCorrect={true}>9</Button>
            <Button isCorrect={false}>15</Button>
        </Quiz>
    </>;
}

export default App;
