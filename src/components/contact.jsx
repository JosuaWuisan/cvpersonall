const Contact = () => {
  return (
    <div className="hero_area">
      {/* contact section */}
      <section className="contact_section">
        <div className="container">
          <div className="heading_container">
            <h2>Contact Me</h2>
            {/* <img src="images/plug.png" alt="" /> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="d-flex">
                  <button>SEND</button>
                </div>
              </form>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
      {/* end contact section */}
      {/* info section */}
      <section className="info_section">
        <div className="container">
          <div className="info_contact">
            <div className="row">
              <div className="col-md-4">
                <a href="">
                  <img src="images/location-white.png" alt="" />
                  <span> Universitas Klabat </span>
                </a>
              </div>
              <div className="col-md-4">
                <a href="">
                  <img src="images/telephone-white.png" alt="" />
                  <span> Call : +6289540177612 </span>
                </a>
              </div>
              <div className="col-md-4">
                <a href="">
                  <img src="images/envelope-white.png" alt="" />
                  <span> howieen@gmail.com </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form action="">
                  <input type="text" placeholder="Enter your email" />
                  <button>Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end info section */}
      <script src="js/jquery-3.4.1.min.js"></script>
      <script src="js/bootstrap.js"></script>
    </div>
  );
};

export default Contact;
