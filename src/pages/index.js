import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import emailjs from "emailjs-com"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper"
import "swiper/swiper-bundle.min.css"

// Components
import Layout from "../components/layout"
import SEOdata from "../components/seo"

// Visual
import * as style from "../styles/home.module.css"
// import { background } from "jimp"
// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectCube])

function IndexPage() {
  //
  const Data = [
    {
      title: "i highly recommend working with him..",
      description:
        "We had the pleasure of working with Juan when we opened our first dog daycare in 2013.  Juan was always willing to talk and also very professional.  Her expertise, policies and procedures undeniably helped form the backbone of our company.  I highly recommend working with him if you’re looking to open a state-of-the-art dog daycare facility.",
      id: 1,
      author: "Laura Bryant of Puppy Haven",
    },
    {
      title: "test 2",
      description:
        "We had the pleasure of working with Amanda when we opened our first dog daycare in 2013.  Amanda was always willing to talk and also very professional.  Her expertise, policies and procedures undeniably helped form the backbone of our company.  I highly recommend working with Amanda if you’re looking to open a state-of-the-art dog daycare facility.",
      id: 2,
      author: "Me",
    },
    {
      title: "test 3",
      description:
        "“We had the pleasure of working with Amanda when we opened our first dog daycare in 2013.  Amanda was always willing to talk and also very professional.  Her expertise, policies and procedures undeniably helped form the backbone of our company.  I highly recommend working with Amanda if you’re looking to open a state-of-the-art dog daycare facility.",
      id: 3,
      author: "Me",
    },
  ]

  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_5s6dolk",
        "template_q0lc4ua",
        e.target,
        "user_VtrYEtDc5wMIOWGogHPN4"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Layout>
      <SEOdata title="Home" />
      <section className={style.hero}>
        <article className="container py-1">
          <div>
            <h1>
              Dog Services <br /> International
            </h1>
            <p className={style.slogan}>Dog Services Made Easy!</p>
            <p className={style.serv}>
              Call us for a <strong>FREE</strong> consultation!
              <br /> We don't bite.. 🐶
            </p>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
          <StaticImage
            src="../images/hero2.svg"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="DSI Image Hero"
            placeholder="blurred"
          />
        </article>
      </section>

      <section id="services" className={style.services}>
        <h3>What do we know at Dog Services International?</h3>
        <article className="container py-2">
          <Link to="/services/maintenance">
            <div className={style.card}>
              <StaticImage
                className={style.cardImg}
                src="../images/service-1.jpg"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Serice Maintenance Dog Service International"
                placeholder="blurred"
                aspectRatio="4/3"
              />
              <div className={style.cardInfo}>
                <h2>Maintenance Services</h2>
                <p>
                  DSI provides facilities maintenance services throughout
                  Florida. Whether your dog business is daycare, boarding,
                  training, or anything in between, we offer high quality,
                  professional maintenance services and exceptional customer
                  service from trained, licensed experts...
                </p>
                <button>Know More</button>
              </div>
            </div>
          </Link>

          <Link to="services/human">
            <div className={style.card}>
              <StaticImage
                className={style.cardImg}
                src="../images/service-2.jpg"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Serice Social Interaction Dog Service International"
                placeholder="blurred"
                aspectRatio="4/3"
              />
              <div className={style.cardInfo}>
                <h2>Social Interactions Improvements</h2>
                <p>
                  Your business is only as good as your procedures and how you
                  answer on the daily basis, understanding best practices would
                  help you design the best path for success with dogs, customers
                  and employees...
                </p>
                <button>Know More</button>
              </div>
            </div>
          </Link>
        </article>
      </section>

      <section id="whyus" className={style.whyUs}>
        <h3 className="container py-2">
          How do we help dog business to thrive?
        </h3>
        <div className="container py-2">
          <article>
            <StaticImage
              className={style.whyImg}
              src="../images/service-2.jpg"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Serice Maintenance Dog Service International"
              placeholder="blurred"
              aspectRatio="4/3"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio nesciunt dolorum quos veritatis blanditiis explicabo
              corrupti recusandae ab architecto voluptas eum doloribus iste qui
              dignissimos, adipisci sed unde hic quas!
            </p>
          </article>
          <article>
            <StaticImage
              className={style.whyImg}
              src="../images/service-2.jpg"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Serice Maintenance Dog Service International"
              placeholder="blurred"
              aspectRatio="4/3"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              eaque culpa enim, quo architecto cumque laudantium adipisci
              eligendi hic itaque odio. Impedit quisquam animi modi vitae
              tempore, illo veritatis reprehenderit.
            </p>
          </article>
        </div>
        {/* <Link to="/about">About Us</Link> */}
      </section>
      <hr />
      <section id="testimonials" className={style.testimonials}>
        <h3>This is what our customers are saying..</h3>
        <div className="container py-2">
          <Swiper
            className={style.swiper}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 10000 }}
            effect="cube"
            pagination={{ clickable: true }}
          >
            {Data.map((i, review) => {
              return (
                <SwiperSlide className={style.slide}>
                  <div>
                    <h4>{Data[review].title}</h4>
                    <q>{Data[review].description}</q>
                    <p>{Data[review].author}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>

      <section id="contact" className={style.cta}>
        <h3>What are you waiting? Contact Us today!</h3>
        <article className="container py-2">
          <div></div>
          <form className="contact-form" onSubmit={sendEmail}>
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              autocomplete="name"
            />
            <label htmlFor="user_email">Email</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              autocomplete="email"
            />
            <label htmlFor="contact_number">Phone Number</label>
            <input
              type="tel"
              autocomplete="tel"
              name="contact_number"
              id="contact_number"
            />
            <label htmlFor="user_message">Message</label>
            <textarea id="user_message" name="message" />
            <input type="submit" value="Send" />
          </form>
        </article>
        {/* <Link to="/contact">Contact Us</Link> */}
      </section>

      <section id="social" className={style.social}>
        <h3>
          Follow Us on Instagram <br />
          <a href="#social">@dogservicesinternational</a>
        </h3>
        <article className="container py-2">
          <StaticImage
            className={style.socialImg}
            src="../images/service-1.jpg"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Instagram Picture #1"
            placeholder="blurred"
            aspectRatio="1"
          />
          <StaticImage
            className={style.socialImg}
            src="../images/service-1.jpg"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Instagram Picture #2"
            placeholder="blurred"
            aspectRatio="1"
          />
          <StaticImage
            className={style.socialImg}
            src="../images/service-1.jpg"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Instagram Picture #3"
            placeholder="blurred"
            aspectRatio="1"
          />
          <StaticImage
            className={style.socialImg}
            src="../images/service-1.jpg"
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Instagram Picture #4"
            placeholder="blurred"
            aspectRatio="1"
          />
        </article>
        {/* <Link to="/blog">Blog Link</Link> */}
      </section>
    </Layout>
  )
}

export default IndexPage
