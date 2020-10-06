import React from 'react'

class Profile extends React.Component {
  componentDidMount() {
    if (typeof twttr != 'undefined') {
      twttr.widgets.load(this.refs.twButton)
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpg'}
              alt="IntelXDesign"
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <div>
              <a
                ref="twButton"
                href="https://twitter.com/IntelXDesign"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @IntelXDesign
              </a>
            </div>
          </div>
        </section>
        <section id="experience" className="bg-primary text-white">
          <div className="container">
            <div className="row align-items-center">
              <div>
                <h2 className="section-heading">EXPERIENCE</h2>
                <h3>Gain Compliance</h3>
                <p>
                  Currently focussing on front-end work with a React-Redux stack
                  and a Hapi.js server as our back-end for front-end leveraging
                  REST-based HATEOAS patterns as much as possible. Deploying
                  continuously using Travis CI into Google’s App Engine
                  platform. Contributing to interface design and user experience
                  of the product.
                </p>
                <h3>LevelView</h3>
                <p>
                  Designed, developed, and published iOS application in Swift as
                  a utility application people can use for ensuring how "level"
                  something is whether hanging photos on a wall or something
                  similar.
                </p>
                <h3>Source Allies</h3>
                <p>
                  Operated as software consultant and craftsman in an agile
                  (scrum) environment. Leveraged a microservices architecture
                  backed by technologies including Scala, Docker, Amazon Web
                  Services, RESTful web services, FitNesse, and Jenkins.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKILLS</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-original wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Node.js"
                >
                  <i
                    className="devicon-nodejs-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Java"
                >
                  <i className="devicon-java-plain" data-wow-duration="2.0s" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="C++"
                >
                  <i
                    className="devicon-cplusplus-plain"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Postgresql"
                >
                  <i
                    className="devicon-postgresql-plain"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="AWS"
                >
                  <i
                    className="devicon-amazonwebservices-plain-wordmark"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Vim"
                >
                  <i className="devicon-vim-plain" data-wow-duration="2.0s" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className="bg-primary text-white">
          <div className="container">
            <div className="row align-items-center">
              <div>
                <h2 className="section-heading">Education</h2>
                <p>
                  M.S. Co-Major Human Computer Interaction & Computer
                  Engineering, Iowa State University, 3.94 GPA
                </p>
                <p>
                  B.S. Mechanical Engineering, Iowa State University, 3.72 GPA
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
