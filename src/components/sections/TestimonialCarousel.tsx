import {Gavel, Scale, Shield, Landmark, BadgeCheck} from "lucide-react";
import React, { useState } from "react";
import { testimonials } from "../../data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import officeimage from "../../assets/office-image.jpeg";
import "../../styles/testimonials.css";

export const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  return (
    <>
      <section className="testimonial-hero">
        <h2>CLIENT TRUST</h2>

        <h1>A Legacy of Discretion & Results</h1>

        <p>
          "We do not measure our success by the volume of cases, but by the
          magnitude of trust placed in our hands by those who have everything to
          lose."
        </p>
      </section>

      <section className="testimonial-section">

        <div className="testimonials-wrapper">

          <img
            src={officeimage}
            alt="Office"
            className="officeimage"
          />

          <div className="testimonial-content">

            <span className="quote-icon">“</span>

            <blockquote>

              <p className="testimonial-quote">
                {current.quote}
              </p>

              <div className="testimonial-author">

                <span className="author-line"></span>

                <div>
                  <h4>{current.author}</h4>
                  <p>{current.company}</p>
                </div>

              </div>

            </blockquote>

            {testimonials.length > 1 && (

              <div className="testimonial-navigation">

                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft />
                </button>

                <div className="testimonial-dots">

                  {testimonials.map((_, index) => (

                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={
                        activeIndex === index
                          ? "dot active-dot"
                          : "dot"
                      }
                    />

                  ))}

                </div>

                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight />
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

      <aside className="testimonial-aside">
        <div className="aside-content">
          
          <div className="first-aside">
            <span><Shield size={22}
            color="#b89b5e" />
            </span>
            <div className="p">
              <p>"Their ability to manage <br /> sensitve reputational risks <br /> 
            during our restructuring was <br /> beyond exceptional. They are <br />  
            the firm you call when silence <br /> is as valuable as the win."
            </p>
            </div>
            
            <div className="con">
              <p><b>General Counsel</b></p>
              <p className="color">Fortune SEO Technology Firm</p>
            </div>
            
          </div>

          <div className="second-aside">
            <span><Scale size={22}
            color="#b89b5e"/>
             </span>
             <h1>Unwavering Litigation Support</h1>
             <p className="p">"In the courtroom, Adeyemi's team is clinical. They don't just present a case; <br />
              they dismantle the opposition with a level of intellectual rigour that is frankly <br />
               intimidating. We wouldn't want to be on the other side of the aisle from <br />
                them."
             </p>
             <div className="gle">
              <div className="class">
              <span><Landmark size={22}
                color="#b89b5e" />
              </span>
              <div>
                <p><b>Managing Director</b></p>
                <p className="color">Sovereign Wealth Fund</p>
              </div>
             </div>

             <div>
              <span><BadgeCheck size={36}
                color="grey" />
              </span>
              </div>
             </div>
          </div>
        </div>
      </aside>

      <aside className="testimonial-aside">
        <div className="aside-content">
        <div className="second-aside">
          <div>
            <h1 className="pa">"Pragmatic, authoritative, and deeply 
            connected. <br />They understand the intersection of 
            law and <br />commercial reality better than any 
            firm we’ve <br />engaged in the last twenty years."
            </h1>

            <div className="fle">
              <span className="h"><p>H</p></span>
              <div>
                <p><b>Head of Private Equity</b></p>
                <p className="color">Pan-African Investment Group</p>
              </div>
            </div>
          </div>
        </div>

        <div className="first-aside">
          <span><Gavel size={22} 
           color="#b89b5e" />
          </span>

          <div>
            <p className="p">"The results speak for <br />
            themselves. $450M in <br />
            recovered assets and zero <br />
            public exposure. The definition <br />
            of a successful outcome."
            </p>
            <div className="p">
            <p><b>Private Client</b></p>
            <p className="color">Confidential Settlement</p>
           </div>
          </div>
        </div>
        </div>
      </aside>
      

  <section className="recognition-section">
  <p className="recognition-subtitle">ACCOLADES</p>

  <h2 className="recognition-title">
    Industry Recognition
  </h2>

  <div className="recognition-grid">

    <div className="recognition-card">
      <div className="recognition-icon">
        <BadgeCheck size={52} color="#B89B5E" />
      </div>

      <h4>CHAMBERS GLOBAL</h4>

      <p>Band 1: Dispute Resolution</p>
    </div>

    <div className="recognition-card">
      <div className="recognition-icon">
        <Scale size={52} color="#B89B5E" />
      </div>

      <h4>LEGAL 500</h4>

      <p>Top Tier: Corporate M&amp;A</p>
    </div>

    <div className="recognition-card">
      <div className="recognition-icon">
        <Landmark size={52} color="#B89B5E" />
      </div>

      <h4>IFLR1000</h4>

      <p>Market Leader: Banking</p>
    </div>

    <div className="recognition-card">
      <div className="recognition-icon">
        <Shield size={52} color="#B89B5E" />
      </div>

      <h4>PRO BONO AWARD</h4>

      <p>Excellence in Service</p>
    </div>

  </div>
</section>


        <aside className="consultation-aside">
    <div className="consultation-box">

        <h2>Begin a Confidential Consultation</h2>

        <p>
            Our partners are available for discreet discussions regarding complex legal
            challenges, cross-border transactions, and strategic advisory. We operate
            with the highest level of confidentiality.
        </p>

        <div className="consultation-buttons">

            <button className="gold-btn">
                SCHEDULE PRIVILEGED CALL
            </button>

            <button className="outline-btn">
                VIEW PRACTICE AREAS
            </button>

            </div>

        </div>
    </aside>
      
    </>
  );
};

export default TestimonialCarousel;