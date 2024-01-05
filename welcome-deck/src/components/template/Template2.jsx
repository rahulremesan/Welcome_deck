import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { employeeDetailsState,employeeImageDataState} from "../Atoms";
import styles from "./Template2.module.css";
import { Row, Col } from "react-bootstrap";
import SaveAsPng from "../SaveAsPng";

const Template2 = () => {
  const employeeDetails = useRecoilValue(employeeDetailsState);
  const employeeImageData = useRecoilValue(employeeImageDataState)
  const pageRef = useRef(null);

  return (
    <>
      <div ref={pageRef} className={styles.container}>
        <Row className={styles.content}>
          <SaveAsPng targetRef={pageRef} fileName={employeeDetails.name} />
          <h1>Welcome to Tarento Family</h1>
          <Col className={styles.leftColumn}>
            <div className={styles.profileImage}>
              <img
                className="rounded-8"
                src={employeeImageData}
                alt=""
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />{" "}
            </div>
            <div className={styles.infoColumn}>
              <Col className={styles.infoItem}>
                <div className={styles.infoLabel}>Hometown</div>
                <div className={styles.infoValue}>
                  {employeeDetails.hometown}
                </div>
              </Col>
              <Col className={styles.infoItem}>
                <div className={styles.infoLabel}>Education</div>
                <div className={styles.infoValue}>
                  {employeeDetails.educationQualification}
                </div>
              </Col>
              <Col className={styles.infoItem}>
                <div className={styles.infoLabel}>Experience</div>
                <div className={styles.infoValue}>
                  {employeeDetails.experience} Years
                </div>
              </Col>
              <Col className={styles.infoItem}>
                <div className={styles.infoLabel}>In my free time, I enjoy</div>
                <div className={styles.infoValue}>
                  {employeeDetails.hobbies}
                </div>
              </Col>
              <Col className={styles.infoItem}>
                <div className={styles.alternateProfessionSection}>
                  <div className={styles.infoLabel}>
                    If I wasn't in my current profession, I would have been
                  </div>
                  <div className={styles.infoValue}>
                    {employeeDetails.anotherProfession}
                  </div>
                </div>
              </Col>
            </div>
          </Col>
          <Col className={styles.rightColumn}>
            <div className={styles.heroSection}>
              <h2>{employeeDetails.name}</h2>
              {/* <p className="text-center">{employeeDetails.role}</p> */}
              <div className={styles.heroDetails}>
                <p>
                  <strong>IBU</strong>: {employeeDetails.assignedIbuName}
                </p>
                <p>
                  <strong>Manager</strong>:{" "}
                  {employeeDetails.assignedManagerName}
                </p>
                <p>
                  <strong>Core Skills</strong>: {employeeDetails.coreSkill}
                </p>
              </div>
            </div>

            <div className={styles.contactSection}>
              <div className={styles.contactLabel}>I can be reached at</div>
              <div className={styles.contactInfo}>
                <div>{employeeDetails.contactEmail}</div>
                <div>{employeeDetails.contactMobile}</div>
              </div>
            </div>
            <div className={styles.quoteSection}>
              <h2 className="align-self-start">
                <strong className="display-2">``</strong> The quote that fuels
                me
              </h2>
              <div className={styles.quoteText}>
                <p> {employeeDetails.favouriteQuote}</p>{" "}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Template2;
