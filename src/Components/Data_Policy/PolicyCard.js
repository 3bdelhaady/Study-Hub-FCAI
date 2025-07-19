const PolicyCard = () => {
  return (
    <div className="policy-card">
      <div className="policy-header">
        <i className="fa-solid fa-shield-halved policy-icon"></i>
        <span className="policy-title">Data Policy</span>
      </div>
      <div className="policy-body">
        <p>
          At Study Hub, we are committed to protecting student data. We do not
          share any sensitive or personally identifiable information with third
          parties – including the university.
        </p>
        <p>
          When we share analytical results such as dashboards or marketing
          insights, all Personal Data is anonymized or encrypted to ensure
          privacy.<br />
          Access to core databases is strictly limited to a few authorized Core
          Team members.<br />
          By joining Study Hub, students agree to our privacy policy.
          Unauthorized or informal data collection is prohibited.
        </p>
        <p>
          In compliance with GDPR, students may request the deletion of their
          personal data at any time.<br />
          Once deleted, this will also deactivate the student’s e-ticket and
          revoke access to Study Hub services.
        </p>
      </div>
      <a href="#" className="policy-btn">Back to Home</a>
    </div>
  );
};

export default PolicyCard;
