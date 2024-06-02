import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9d69b3be-d569-4852-bfc6-614dcc51cdcb");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          event.target.reset()
        }
      };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />contact@neel.com</li>
                    <li><img src={phone_icon} alt="" />+91 98765 43210</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required="" />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required="" />
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Enter your email id" required="" />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required=""></textarea>
                    <button type="submit" className="btn dark-btn submit-btn">Submit now <img src={white_arrow} alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact