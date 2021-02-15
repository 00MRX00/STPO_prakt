import { useState } from "react";
import classes from "./App.module.scss";
import { Prakt } from './appController';

let appContr = new Prakt();

const App = () => {
	const [input, setInput] = useState('');
	const [isConclude, setIsConclude] = useState(false);
	const [result, setResult] = useState([]);
	const [parseError, setParseError] = useState('');
	const [resultError, setResultError] = useState('');
	const [character, setCharacter] = useState(0);

	const onChangeInputHandler = (value) => {
		setInput(value);
	}

	const onConcludeHandler = () => {
		setIsConclude(true);
		const [result, parseErr, resultErr] = appContr.conclude(input, character);
		setParseError(parseErr);
		if (parseErr) {
			setResult([]);
			setResultError('');
			return
		}
		setResultError(resultErr);
		if (resultErr) {
			setResult([]);
			setParseError('');
			return
		}
		setResult(result);
		setParseError('');
		setResultError('');
	}

	const handleOptionChange = (event) => {
		setCharacter(+event.target.value);
	}

	return (
		<div className={classes.App}>
			<h1>Технологии тестирования ПО</h1>
			<h2>Вариант 5</h2>
			<h3 align="justify">
				Ввести массив из 10 целых четырехзначных чисел. Сформировать и
				вывести новый массив, из тех чисел введенного массива, которые являются
				простыми числами и у этих чисел старшая цифра больше (меньше) последней
				цифры числа. Соотношение цифр задается пользователем. Если таких
				элементов нет, то выдать сообщение об этом.
			</h3>
			<div className={classes.inputsSection}>
				<div className={classes.mainInputLabel}>
					<span>Числа через пробел:</span>
					<input id="mainInput" className={classes[`mainInput${parseError ? '-error' : ''}`]} type="text" value={input} onChange={(event) => onChangeInputHandler(event.target.value)} autoFocus={true} />
				</div>
				<span>Соотношения цифр:</span>
				<div className={classes.inpMore}>
					<input type="radio" name="inpMore" value={appContr.Character.MORE}
						checked={character === appContr.Character.MORE}
						onChange={handleOptionChange} />
					<span>Больше</span>
				</div>
				<div className={classes.inpLess}>
					<input type="radio" name="inpLess" value={appContr.Character.LESS}
						checked={character === appContr.Character.LESS}
						onChange={handleOptionChange} />
					<span>Меньше</span>
				</div>
			</div>
			<button id="btnConclude" className={classes.conclude_button} onClick={onConcludeHandler}>Сформировать новый массив</button>
			{
				isConclude ?
					<div className={classes.result}>
						<p id="pParseError">{parseError}</p>
						<p id="pResult">Сформированный массив: <span id="res">{resultError || result.join(', ')}</span></p>
					</div>
					:
					<div></div>
			}
		</div>
	);
}

export default App;