import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div>
            <h1 className= " flex-center text-3xl  text-indigo-300 "> 
                hello GSAP !
            </h1>
        </div>
    )
}

export default App 