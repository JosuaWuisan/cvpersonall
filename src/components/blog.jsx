const Blog = () => {
  return (
    <div className="hero_area">
      {/* blog section */}
      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Blog</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/blog1.jpg"
                    alt=""
                    style={{ width: "555px", height: "400px" }}
                  />
                </div>
                <div className="detail-box">
                  <h5>
                    The Art and Science of Copywriting: Crafting Persuasive
                    Narratives in the Digital Age
                  </h5>
                  <p>
                    In this blog, we delve into the dynamic world of
                    copywriting, exploring the creative finesse required to
                    captivate audiences and the strategic application of digital
                    tools and analytics to optimize messaging for the modern
                    era.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img
                    src="images/blog2.jpg"
                    alt=""
                    style={{ width: "555px", height: "400px" }}
                  />
                </div>
                <div className="detail-box">
                  <h5>
                    Harmony in Code and Content: Bridging the Gap Between
                    Copywriting and Computer Science
                  </h5>
                  <p>
                    Discover the synergies between the realms of copywriting and
                    computer science as we unravel the intersections of
                    compelling storytelling and algorithmic precision,
                    showcasing how these two disciplines collaborate to create
                    seamless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end blog section */}

      {/* info section */}

      <section className="info_section">
        <div className="container">{/* ... (remaining code) */}</div>
      </section>

      {/* end info section */}

      {/* footer section */}
      <footer className="container-fluid footer_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9 mx-auto">
              <p>
                &copy;
                <a href="https://www.unklab.ac.id/">Universitas Klabat</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section */}
    </div>
  );
};

export default Blog;
