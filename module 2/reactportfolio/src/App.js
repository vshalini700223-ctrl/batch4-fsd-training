import { useState } from "react";

function App() {
    const [page, setPage] = useState("about");

    return (
        <div>
            <h1>Shalini's Portfolio</h1>

            <button onClick={() => setPage("about")}>
                About Me
            </button>

            <button onClick={() => setPage("skills")}>
                Skills
            </button>

            <button onClick={() => setPage("projects")}>
                Projects
            </button>

            <button onClick={() => setPage("contact")}>
                Contact
            </button>

            <hr />

            {page === "about" && (
                <div>
                    <h2>About Me</h2>
                    <p>Hello! I am Shalini.</p>
                    <p>
                        I am a student interested in Artificial Intelligence,
                        Data Science and Web Development.
                    </p>
                </div>
            )}

            {page === "skills" && (
                <div>
                    <h2>Skills</h2>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>React JS</li>
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                    </ul>
                </div>
            )}

            {page === "projects" && (
                <div>
                    <h2>Projects</h2>

                    <h3>Smart Electricity Forecasting</h3>
                    <p>
                        A deep learning project for electricity consumption
                        forecasting.
                    </p>

                    <h3>Skin Disease Analysis</h3>
                    <p>
                        A deep learning project for skin disease
                        classification.
                    </p>

                    <h3>AI Virtual Try-On</h3>
                    <p>
                        An AI-based virtual clothing try-on project.
                    </p>
                </div>
            )}

            {page === "contact" && (
                <div>
                    <h2>Contact Me</h2>

                    <div>
                        <h3>Contact Information</h3>

                        <p><b>Name:</b> Shalini</p>
                        <p><b>Phone:</b> 8489264345</p>
                        <p><b>Email:</b> your-email@example.com</p>
                    </div>

                    <div>
                        <h3>Send a Message</h3>

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <br /><br />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <br /><br />

                        <textarea
                            placeholder="Your Message"
                            rows="5"
                        ></textarea>

                        <br /><br />

                        <button>Send Message</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;