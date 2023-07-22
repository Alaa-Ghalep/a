import {React,useEffect} from "react";
import AOS from'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
<div>
<div className="">
       
<h1>alaa</h1>    </div>
    </div>
  );
}

export default App;
