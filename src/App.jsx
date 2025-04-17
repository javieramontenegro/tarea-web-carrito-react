import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Steps from "./components/Steps";
import Resume from "./components/Resume";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full h-full flex flex-col overflow-x-hidden">
            <Header />
            <main className="m-auto w-full flex flex-col justify-center items-center py-6">
                <div className="w-full">
                    <Steps />
                    <section className="w-full h-auto flex justify-center isolate">
                        <div className="w-full h-auto max-w-[1200px] flex gap-4">
                            <div className="w-full max-w-[50%] p-[10px]">
                                <Resume/>
                            </div>
                            <div className="w-full max-w-[50%] p-[10px] bg-gray-100">
                                 <Container/>
                            </div>
                        </div>
                    </section>
                    <section className="w-full h-auto flex justify-center"></section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
