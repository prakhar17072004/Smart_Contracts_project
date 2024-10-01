import React from "react";

const About = () => {
  return (
    <section className="about pos-rel pb-140 ">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-mt-30">
            <div className="about__img pos-rel wow fadeInLeft">
              <img src="assets/img/about/about_img.png" alt="" />
              <div className="about_shape">
                <img src="assets/img/shape/about_shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
            <div
              className="about__content wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="sec-title mb-30">
                <h5 className="sec-title__subtitle">WHAT IS ICO CRYPTO</h5>
                <h2 className="sec-title__title mb-25">LOREM200</h2>
                <p>
                  helljlkjkljfjsalkafjkajkjfksafkljfklsjfklsfklasfksakfsafjksjsjvvhksa
                  fkksfksajflkklalkfhsaklfhjkashfjkshafkjhafaskjfjaskkfbjkashfuisaghfwaaiohfiuafajskkbfjushfkis
                  lkfkslhfsahifjhafaskfhassiohfsaoiujfoiwh8iaiuhfiuahfiuayf98wuoiiwjfasdjfgsuivhhskjfhwoifjiohfuijsgfsiufhweoifhweio
                </p>
              </div>
              <ul className="about__list ul_li">
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="jjhjkkkjk" />
                  Decentralized Plateform
                </li>

                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="jjhjkkkjk" />
                  Rewards Mechanism
                </li>

                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="jjhjkkkjk" />
                  Crowd Wisdom
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="jjhjkkkjk" />
                  Investor Protection
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="jjhjkkkjk" />
                  Token Sale Phases
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="jjhjkkkjk" />
                  Exchange Listing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about__sec-shape ">
        <img src="assets/img/shape/s_shape_2.png" alt="jk" />
      </div>
    </section>
  );
};

export default About;
