const Service = () => {
  return (
    <div className="service">
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Services</h2>
            <img src="images/plug.png" alt="" />
          </div>

          <div className="service_container">
            <div className="box">
              <div className="img-box">
                <img src="images/s1.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Social Media Copy</h5>
                <p>
                  Writing text for social media posts that captures attention
                  and enhances user interaction.
                </p>
              </div>
            </div>
            <div className="box active">
              <div className="img-box">
                <img src="images/s2.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Blog Content Writing</h5>
                <p>
                  Providing informative, engaging, and relevant blog posts to
                  improve SEO and attract readers.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s3.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Marketing Material Writing</h5>
                <p>
                  Creating marketing materials such as brochures, pamphlets, and
                  other promotional materials to market products or services.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s4.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Copywriting Research and Strategy</h5>
                <p>
                  Conducting market research and developing copywriting
                  strategies tailored to the target audience.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s5.png" className="img1" alt="" />
              </div>
              <div className="detail-box">
                <h5>Product and Service Descriptions</h5>
                <p>
                  Providing persuasive product descriptions or service reviews.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href=""> Read More </a>
          </div>
        </div>
      </section>
      {/* end service section */}
      <script src="js/jquery-3.4.1.min.js"></script>
      <script src="js/bootstrap.js"></script>
    </div>
  );
};

export default Service;
