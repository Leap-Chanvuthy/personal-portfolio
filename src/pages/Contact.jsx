import { useSelector , useDispatch } from "react-redux";
import { increment , decrement } from "../redux/counter/counterSlice";

const Contact = () => {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    console.log(count);

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={(() => dispatch(increment()))}>+</button>
        </div>
     );
}
 
export default Contact;