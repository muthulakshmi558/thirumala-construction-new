import brickMain from "../assets/fly_ash_bricks.png";

const BricksSecondFold = () => {
  return (
    <>
      {/* FIRST FOLD */}
      <section className="bricks-intro">
        <div className="bricks-container">

          <div className="bricks-intro-image">
            <img
              src={brickMain}
              alt="Quality Bricks"
            />
          </div>

          <div className="bricks-intro-content">
            <span className="bricks-small-title">
              UNPARALLELED QUALITY
            </span>

            <h2>
              Building Strong Foundations<br />
              with Premium Bricks
            </h2>

            <p>
              Our premium quality bricks are manufactured with carefully
              selected raw materials and advanced production techniques.
              Designed to provide strength, durability, and long-lasting
              performance, our bricks are suitable for residential,
              commercial, and industrial construction projects.
            </p>

            <p>
              We focus on delivering consistent quality in every brick we
              manufacture. From raw material selection to the final
              production stage, every process is carefully monitored to
              ensure excellent strength, shape, and finish.
            </p>

            <p>
              Whether you are constructing a dream home, commercial
              building, compound wall, or large-scale project, our bricks
              provide a reliable foundation for strong and sustainable
              construction.
            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              A STRONG CHOICE FOR CONSTRUCTION
            </span>

            <h3>Built for Strength and Durability</h3>

            <p>
              Bricks play an important role in creating safe and durable
              structures. Our bricks are manufactured to provide excellent
              compressive strength and structural stability, helping your
              construction remain strong for years.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              CONSISTENT QUALITY
            </span>

            <h3>Reliable Quality in Every Brick</h3>

            <p>
              We maintain strict quality standards throughout the
              manufacturing process. Every batch is carefully produced to
              achieve uniform size, shape, strength, and finish, making
              our products a dependable choice for construction.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              SUSTAINABLE CONSTRUCTION
            </span>

            <h3>Designed for Better Buildings</h3>

            <p>
              Our manufacturing approach focuses on creating construction
              materials that combine performance with responsible
              production. With reliable strength and long-lasting
              durability, our bricks help create buildings designed for
              the future.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default BricksSecondFold;