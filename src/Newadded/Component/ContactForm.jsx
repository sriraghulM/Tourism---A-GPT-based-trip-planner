import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to Us!</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input placeholder="Subject" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button >Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
