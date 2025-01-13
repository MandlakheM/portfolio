import "../about/about.css";
import { goalsAndReflections } from "../../data/constants";
function Feedback() {
  return (
    <>
      <section id="feedback">
        <p className="section__about__text__p1">Check Out My</p>
        <h1 className="about__title">Feedback and Reflections</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                {/* <img
              src="./assets/experience.png"
              alt="Experience icon"
              class="icon"
            /> */}
                <h3>Feedback</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis est voluptatem nobis eius adipisci nemo deleniti
                  repudiandae nam, dicta at facilis error ipsum impedit fugiat
                  sunt, accusamus placeat? Nihil, laboriosam.
                </p>
              </div>
              <div className="details-container">
                {/* <img
              src="./assets/education.png"
              alt="Education icon"
              class="icon"
            /> */}
                <h3>Reflections</h3>
                <p>{goalsAndReflections.reflection} </p>
              </div>
            </div>
            <div className="text-container">
              <p className="aboutme__text">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus
                sint delectus velit in eos quo officiis explicabo deleniti
                dignissimos. Eligendi illum libero dolorum cum laboriosam
                corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga! */}
              </p>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default Feedback;
