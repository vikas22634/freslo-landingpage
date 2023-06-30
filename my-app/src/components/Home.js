import React from "react";

function Home() {
  return (
    <>
      <section className="carousel">
        <div>
          <img
            className="d-block w-100"
            src="Images\carousel2.jpg"
            alt="Second slide"
          />
        </div>
      </section>
      <section className="figure">
          <h5 className="figure1">How It's Work</h5>
          <img
            src="Images\carousel3.jpg"
            className="figure-img img-fluid square"
            alt="A generic."
          />
          <figcaption className="figure-caption text-right">
            A caption for the above image.
          </figcaption>
        </section>
    </>
  );
}

export default Home;
