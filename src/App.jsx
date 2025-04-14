import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Steps from "./components/Steps";
import Resume from "./components/Resume";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full h-full flex flex-col overflow-x-hidden">
            <Header />
            <main className="m-auto w-full flex flex-col justify-center items-center py-6">
                <div className="w-full">
                    <Steps />
                    <section className="w-full h-auto flex justify-center">
                        <div className="w-full h-auto max-w-[1200px] gap-4">
                           <Resume/> 
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
