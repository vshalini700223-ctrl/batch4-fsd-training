function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>

            <p>
                If you would like to get in touch with me, you can contact me
                using the information below.
            </p>

            <h2>Contact Information</h2>

            <p>
                <strong>Name:</strong> Saran
            </p>

            <p>
                <strong>Email:</strong> your-email@example.com
            </p>

            <p>
                <strong>Phone:</strong> +91 XXXXX XXXXX
            </p>

            <p>
                <strong>Location:</strong> India
            </p>

            <h2>Send a Message</h2>

            <form>
                <label>Name:</label>
                <br />
                <input type="text" placeholder="Enter your name" />
                <br /><br />

                <label>Email:</label>
                <br />
                <input type="email" placeholder="Enter your email" />
                <br /><br />

                <label>Message:</label>
                <br />
                <textarea
                    placeholder="Enter your message"
                    rows="5"
                    cols="30"
                ></textarea>
                <br /><br />

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;