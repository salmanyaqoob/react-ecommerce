import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Button, Input, Container, Row, Col } from "reactstrap";

import "./footer.style.scss";

const FooterComponent = ({ sections, match }) => {
  return (
    <footer id="dk-footer" className="dk-footer">
      <Container>
        <Row>
          <Col md="12" lg="4">
            <div className="dk-footer-box-info">
              <Link to="/" className="footer-logo">
                <Logo />
              </Link>
              <p className="footer-info-text">
                We here at <strong>Crown Clothings</strong> appreciate your
                business. Drop us a line anytime.
              </p>
              <div className="footer-social-link">
                <h3>Follow us</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-awarad">
              <p>Crown Clothings</p>
            </div>
          </Col>
          <Col md="12" lg="8">
            <Row>
              <Col md="6">
                <div className="contact-us">
                  <div className="contact-icon">
                    <i className="fa fa-map-o" aria-hidden="true"></i>
                  </div>

                  <div className="contact-info">
                    <h3>Riyadh Saudi Arabia</h3>
                    <p>Malaz Jareer Street</p>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="contact-info">
                    <h3>inf@crown-clothings.com</h3>
                    <p>Drop us mail</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12" lg="6">
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>Useful Links</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <ul>
                    {sections.map(props => {
                      const { id, title, linkUrl } = props;
                      return (
                        <li key={id}>
                          <Link to={`${match.url}${linkUrl}`}>
                            {title.charAt(0).toUpperCase() + title.slice(1)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Col>
              <Col md="12" lg="6">
                <div className="footer-widget">
                  <div className="section-heading">
                    <h3>Subscribe</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <p>
                    Submit your Email address with us to get latest update about
                    new Trends.
                  </p>
                  <form action="#">
                    <div className="form-row">
                      <Col className="dk-footer-form">
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <Button type="button">
                          <i className="fa fa-send"></i>
                        </Button>
                      </Col>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="copyright">
        <Container>
          <Row>
            <Col md="6">
              <span>Copyright © 2019, All Right Reserved Crown Clothings</span>
            </Col>
            <Col md="6">
              <div className="copyright-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(withRouter(FooterComponent));
