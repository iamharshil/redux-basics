## flow

- start with "\_app.js" where we have every reducer and store

```js
const store = configureStore({
  reducer: {
    user: userReducer, // userReducer ->import from reducer file
  },
});
```

- store is where we set name and reducer for state.
- reducer is name, initialState, and actions(reducers) of app. which will return actions and module and function with .reducer as default.

```js
export const userSlice = createSlice({
    name: "user",
    initialState: { value: "xyz"},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
        // ...
    }
})

export const { login } = userSlice.actions;
export default userSlice.reducer;
```

- some of reducer require props which will be taken from "action.payload" in reducer action.
- to use state we need useSelector will allow to get the state from redux store.

```js
const user = useSelector((state) => state.user.value);
<div>
  <p>Name : {user.name}</p>
  <p>Email: {user.email}</p>
</div>;
```

- it has value of state by "useSelector(state => state.stateName.value)" then we can access that state in our application.
- to update state value we import actions as module from our reducer file
- we can use event handle to which will dispatch than action to reducer.

```js
// EX:
import { useDispatch } from 'react-redux"

const dispatch - useDispatch();
<button
  onClick={() => {
    dispatch(login({ name: "xyz", age: 10 }));
  }}
></button>
<button
  onClick={() => {
    dispatch(changeCOlor(color)); // color -> local state from input Change
  }}
></button>
```
