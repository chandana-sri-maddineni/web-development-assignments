import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {

    const [message, setMessage] = useState(
        "Welcome to my React project!"
    );

    function changeMessage() {
        setMessage("Button clicked successfully!");
    }

    return (
        <div>

            <Header />

            <main>

                <h2>{message}</h2>

                <div className="cards">

                    <Card
                        title="HTML & CSS"
                        description="Learning website structure and styling."
                    />

                    <Card
                        title="React"
                        description="Learning reusable React components."
                    />

                    <Card
                        title="JavaScript"
                        description="Learning programming and dynamic websites."
                    />

                </div>

                <Button
                    text="Click Me"
                    onClick={changeMessage}
                />

                <Form />

            </main>

            <Footer />

        </div>
    );
}

export default App;