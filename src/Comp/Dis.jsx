import { useSelector } from "react-redux";

function Dis() {
  const {countVal} = useSelector(store => store.counter);
  return (
    <div className="col-lg-6 mx-auto">
      <h4 className="lead mb-4">Count of Counter: {countVal}.</h4>
    </div>
  );
}

export default Dis;
