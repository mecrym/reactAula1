import Student from "./Student.jsx";

function App() {
	
	return(
		<>
			<Student name="Nina" age={16} isStudent={false}/>
			<Student name="Luke" age={12} isStudent={false}/>
			<Student name="Rex" age={14} isStudent={false}/>
			<Student name="Rafa" age={2} isStudent={false}/>
			<Student name="Larry"/>
		</>
	);
}

export default App
