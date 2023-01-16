import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "@/features/user";
import themeReducer from "@/features/theme";

// reducers
const store = configureStore({
	reducer: {
		user: userReducer,
		theme: themeReducer,
	},
});

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
