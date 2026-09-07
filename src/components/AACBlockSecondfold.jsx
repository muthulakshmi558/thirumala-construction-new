import brickMain from "../assets/aac_block.png";

const AACBlockSecondfold = () => {
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
LIGHTWEIGHT TECHNOLOGY FOR MODERN BUILDINGS
            </span>

            <h2>
              Smart AAC Blocks for Efficient<br /> Construction

            </h2>

            <p>
              Autoclaved Aerated Concrete blocks are lightweight precast building units designed to support faster, cleaner, and more efficient wall construction.

            </p>

            <p>
              Their cellular internal structure reduces the individual weight of each block while maintaining the performance required for suitable masonry applications. The larger block size can cover more wall area and may help improve construction speed.

            </p>

            <p>
              AAC blocks are manufactured with consistent dimensions and smooth surfaces. Accurate block alignment and the use of a suitable thin-bed jointing mortar can help reduce joint thickness and support a cleaner wall finish.

            </p>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bricks-content-section">
        <div className="bricks-container">

          <div className="bricks-text-block">
            <span className="bricks-small-title">
COMFORT FOR MODERN SPACES
            </span>

            <h3>Thermal and Sound Performance
</h3>

            <p>
              The air-filled cellular structure of AAC blocks helps limit heat transfer and provides useful sound insulation. This supports more comfortable interior spaces in residential and commercial buildings.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              PRECISION WITH LESS WASTAGE

            </span>

            <h3>Clean and Accurate Masonry
</h3>

            <p>
             Consistent dimensions support accurate wall alignment and thinner joints when suitable AAC block adhesive is used. Blocks can also be cut for service openings, helping reduce unnecessary breakage and material wastage.
            </p>
          </div>

          <div className="bricks-text-block">
            <span className="bricks-small-title">
              LIGHTWEIGHT AND EASY TO HANDLE

            </span>

            <h3>Faster Wall Construction
</h3>

            <p>
              The lightweight structure and larger dimensions of AAC blocks make handling and placement more convenient. Fewer individual units are required to cover a wall area, helping support an efficient construction process.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default AACBlockSecondfold;