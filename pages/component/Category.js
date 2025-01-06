import React, { Fragment } from "react";
import { Media, Container, Col, Row } from "reactstrap";
import { sectionData } from "../../data/sectionData";
import { useRouter } from "next/navigation";

const Data = sectionData;

const styles = {
  categoryItem: {
    textAlign: "center",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
    transition: "transform 0.3s",
    cursor: "pointer",
  },
  categoryItemHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  categoryImage: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  categoryTitle: {
    marginTop: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  categoryLinkList: {
    listStyle: "none",
    padding: "0",
    margin: "10px 0 0",
  },
  categoryLinkItem: {
    margin: "5px 0",
  },
  categoryLink: {
    color: "#007bff",
    textDecoration: "none",
  },
  categoryLinkHover: {
    textDecoration: "underline",
  },
};

const MasterCategory = ({ img, title, features }) => {
  return (
    <div
      style={styles.categoryItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.categoryItemHover.transform;
        e.currentTarget.style.boxShadow = styles.categoryItemHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div>
        <Media
          src={img}
          style={styles.categoryImage}
          className="img-fluid"
          alt=""
        />
      </div>
      <h4 style={styles.categoryTitle}>{title}</h4>
      <ul style={styles.categoryLinkList}>
        {features.map((data, i) => (
          <li key={i} style={styles.categoryLinkItem}>
            <a
              href={data.link}
              style={styles.categoryLink}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textDecoration =
                  styles.categoryLinkHover.textDecoration)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.textDecoration = "none")
              }
            >
              {data.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Category = () => {
  const router = useRouter()
  return (
    <Fragment>
      <section className="pt-0 category-tools ratio3_2">
        <div className="title3">
          <h2 className="title-inner3">Our Top Categories</h2>
          <div className="line"></div>
        </div>
        <Container>
          <Row>
            {Data.map((data, i) => (
              <Col onClick={()=>{
                router.push(data.link)
              }} key={i} sm="6" md="4" lg="3" className="mb-4">
                <MasterCategory
                  img={data.img.src}
                  title={data.title}
                  features={data.features}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;
