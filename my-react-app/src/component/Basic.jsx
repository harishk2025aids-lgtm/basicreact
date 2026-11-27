import { useState } from "react";

function Basic() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const [student, setStudent] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        setStudent({
            name: name,
            age: age,
            email: email
        });
    }

    return (
        <>
            <h1>Student Form</h1>

            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />

                <br /><br />

                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                    required
                />

                <br /><br />

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />

                <br /><br />

                <button type="submit">Submit</button>

            </form>

            {student && (
                <>
                    <h2>Student Details</h2>

                    <p>Name: {student.name}</p>
                    <p>Age: {student.age}</p>
                    <p>Email: {student.email}</p>
                </>
            )}
        </>
    );
}

export default Basic;