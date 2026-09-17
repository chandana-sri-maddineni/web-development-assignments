import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert("Hello " + name + "!");
    }

    return (
        <form onSubmit={handleSubmit} className="form">

            <label>Enter Your Name:</label>

            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
            />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default Form;