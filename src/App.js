import { connect, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/action/ActionCounter";

function App(props) {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(increment(1))}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement(1))}>-</button>

      {/* <button
        onClick={() => {
          props.add(1)
        }}
      >
        +
      </button>
      <h1>{props.count}</h1>
      <button onClick={() => {props.remove(1)
        
      }}>-</button> */}
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return { count: state.count };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (payload) => dispatch(increment(payload)),
//     remove: (payload) => dispatch(decrement(payload))
//   };
// };
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App ;
