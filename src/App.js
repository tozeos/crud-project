import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
	collection,
	getDocs,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";

function App() {
	//Store input infos
	const [newName, setNewName] = useState("");
	const [newAge, setNewAge] = useState(0);

	//Store the users and set users
	const [users, setUsers] = useState([]);

	//create reference
	const usersRef = collection(db, "users");

	// API calls to the firebase database
	// Create user
	const createUser = async () => {
		await addDoc(usersRef, { name: newName, age: Number(newAge) });
	};

	// Update user
	const updateUser = async (id, age) => {
		const userDoc = doc(db, "users", id);
		const newFields = { age: age + 1 };
		await updateDoc(userDoc, newFields);
	};

	// Delete user
	const deleteUser = async (id) => {
		const userDoc = doc(db, "users", id);
		await deleteDoc(userDoc);
	};

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);

	return (
		<div className="App">
			<input
				placeholder="Name"
				onChange={(event) => {
					setNewName(event.target.value);
				}}
			/>
			<input
				type="number"
				placeholder="Age"
				onChange={(event) => {
					setNewAge(event.target.value);
				}}
			/>
			<button onClick={createUser}>Create user</button>
			{users.map((user) => {
				return (
					<div>
						<h1>Name: {user.name}</h1>
						<h1>Age: {user.age}</h1>
						<button
							onClick={() => {
								updateUser(user.id, user.age);
							}}>
							Increase age
						</button>
						<button
							onClick={() => {
								deleteUser(user.id);
							}}>
							Delete user
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default App;
