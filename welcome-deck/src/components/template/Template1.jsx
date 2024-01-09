import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { employeeDetailsState, employeeImageDataState } from "../Atoms";
import styles from "./Template1.module.css";
import { Row, Col } from "react-bootstrap";
import SaveAsPng from "../SaveAsPng";

const Template1 = () => {
  const employeeDetails = useRecoilValue(employeeDetailsState);
  const employeeImageData = useRecoilValue(employeeImageDataState);
  const pageRef = useRef(null);

  return (
    <>
      <div ref={pageRef}>
        {employeeDetails !== null ? (
          <Row className={`${styles.board}`}>
            <SaveAsPng targetRef={pageRef} fileName={employeeDetails.name} />
            <h1 className="text-align-d-flex flex-row w-100 justify-content-end pe-3">
              Welcome to Tarento Family
            </h1>
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>Hometown</div>
              </div>
              <div className="pt-3">{employeeDetails.hometown}</div>
            </Col>
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>Education</div>
              </div>
              <div className="pt-3">
                {employeeDetails.educationQualification}
              </div>
            </Col>
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>Experience</div>
              </div>
              <div className="pt-3">{employeeDetails.experience} Years</div>
            </Col>
            <Col className={`${styles.column}`} md={3} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>In my free time, I enjoy</div>
              </div>
              <div className="pt-3">{employeeDetails.hobbies}</div>
            </Col>
            <Col className={`${styles.column}`} lg={9} xs={12}>
              <Row className="w-100">
                <div className={`col-md-5 p-3 ${styles.heroPill_1}`}>
                  <h2>
                  <img
                    className="rounded-8"
                    src={employeeImageData}
                    alt=""
                    style={{ maxWidth: "100%", maxHeight: "200px",}}
                  />                   
                   <p>{employeeDetails.name}</p>
                  </h2>
                  <p className="text-center">{employeeDetails.role}</p> 
                </div>
                <div
                  className={`col-md-1 align-items-start p-3 ${styles.filler1}`}
                ></div>
                <div
                  className={`col-md-1 align-items-start p-3 ${styles.filler2}`}
                ></div>
                <div
                  className={`col-md-5 align-items-start p-3 ${styles.heroPill_2}`}
                >
                  <p>
                    <strong>IBU</strong> : {employeeDetails.assignedIbuName}
                  </p>
                  <br />
                  <p>
                    <strong>Manager</strong> :{" "}
                    {employeeDetails.assignedManagerName}
                  </p>
                  <br />
                  <p>
                    <strong>Core Skills</strong> : {employeeDetails.coreSkill}
                  </p>
                </div>
              </Row>
            </Col>
            <Col className={`${styles.column}`} lg={3} md={6} xs={12}>
              <div className={`rounded-pill ${styles.pill}`}>
                <div>I can be reached at</div>
              </div>
              <div className="pt-3 d-flex flex-column">
                <div>{employeeDetails.contactEmail}</div>
                <div>{employeeDetails.contactMobile}</div>
              </div>
            </Col>
            <Col
              className={`${styles.column}`}
              lg={{ span: 9, order: 0 }}
              xs={{ order: "last", span: 12 }}
            >
              <h1 className="align-self-start">
                <strong className="display-2">``</strong> The quote that fuels
                me
              </h1>
              <div className="pt-3">"{employeeDetails.favouriteQuote}"</div>
            </Col>
            <Col className={`${styles.column}`} lg={3} md={6} xs={12}>
              <div className={`rounded-pill px-5 ${styles.pill}`}>
                <div className="text-center">
                  If I wasn't in my current profession, I would have been
                </div>
              </div>
              <div className="pt-3">{employeeDetails.anotherProfession}</div>
            </Col>
          </Row>
        ) : (
          <p>No New Joinees</p>
        )}
      </div>
    </>
  );
};

export default Template1;
