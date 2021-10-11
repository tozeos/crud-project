import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAalW9Zgdym7Y3aKHFMrlXMYORy0b60kQk",

	authDomain: "crud-project-41935.firebaseapp.com",

	projectId: "crud-project-41935",

	storageBucket: "crud-project-41935.appspot.com",

	messagingSenderId: "567691900440",

	appId: "1:567691900440:web:4fcb8ec89b34f9c6ccf56d",

	measurementId: "G-9B6FYSJJ68",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
