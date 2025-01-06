import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Media, Form, Label, Input } from "reactstrap";

const Data = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "+91 7087497599",
    desc2: "",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "Dholewal Chowk Ludhiana Punjab, India",
    desc2: "141003",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "exports@irongriptools.in",
    desc2: "",
  },
];

const ContactDetail = ({ img, title, desc1, desc2 }) => {
  return (
    <li>
      <div className="contact-icon">
        <i className={`fa ${img}`} aria-hidden="true"></i>
        <h6>{title}</h6>
      </div>
      <div className="media-body">
        <p>{desc1}</p>
        <p>{desc2}</p>
      </div>
    </li>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, email, message } = formState;
    const mailtoLink = `mailto:exports@irongriptools.in?subject=Contact Form Submission&body=First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0APhone Number: ${phoneNumber}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <CommonLayout parent="home" title="Contact">
      <section className="contact-page section-b-space">
        <Container>
          <Row className="section-b-space">
            <Col lg="7" className="map">
              <iframe
               src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27393.169363530174!2d75.85986194828504!3d30.882571700114863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82c333a9bd4d%3A0xe3313ebe545f064c!2sDholewal%20Chowk%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1724256206574!5m2!1sen!2sin'
               allowFullScreen
              ></iframe>
            </Col>
            <Col lg="5">
              <div className="contact-right">
                <ul>
                  {Data.map((data, i) => (
                    <ContactDetail
                      key={i}
                      img={data.img}
                      title={data.title}
                      desc1={data.desc1}
                      desc2={data.desc2}
                    />
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Form className="theme-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <Label className="form-label" htmlFor="firstName">First Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter Your name"
                      required
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md="6">
                    <Label className="form-label" htmlFor="lastName">Last Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter Your Last Name"
                      required
                      value={formState.lastName}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md="6">
                    <Label className="form-label" htmlFor="phoneNumber">Phone number</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Enter your number"
                      required
                      value={formState.phoneNumber}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md="6">
                    <Label className="form-label" htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md="12">
                    <Label className="form-label" htmlFor="message">Write Your Message</Label>
                    <textarea
                      className="form-control"
                      placeholder="Write Your Message"
                      id="message"
                      rows="6"
                      required
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </Col>
                  <Col md="12">
                    <button className="btn btn-solid" type="submit">
                      Send Your Message
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Contact;
