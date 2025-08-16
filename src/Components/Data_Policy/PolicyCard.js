import { Link } from "react-router-dom";
const PolicyCard = () => {
  return (
    <div style={{display:"block", width:"100%", padding:"0px", margin:"0px"}}>
    <div className="policy-card">
      <div className="policy-header">
        <i className="fa-solid fa-shield-halved policy-icon"></i>
        <span className="policy-title">Data Policy</span>
      </div>
      <div className="policy-body">
        <p>
        At Student Hub, we are committed
         to protecting student data, 
         We do not share any sensitive
          or personally identifiable information
           with third parties - including the universities
        </p>
        <p>
        When we share analytical results such as dashboards or marketing insights, all Personal Data is
         anonymized or encrypted to ensure privacy.
        </p>
        <p>
        Access to core databases is strictly
         limited to a few authorized Core Team members.
        By joining Student Hub, students agree to our privacy policy, Unauthorized or informal data collection is prohibited, In compliance with GDPR, students may request the deletion of their personal data at any time, Once deleted, this will also deactivate the student’s 
        ID and revoke access to Student Hub services.
        </p>
        <p>
        Officially enrolled students and recognized institutions may request comprehensive documentation outlining the data policy in detail.       
       </p>
      </div>
      <Link to={"/"} className="policy-btn">Back to Home</Link>
    </div>

    
    </div>
  );
};

export default PolicyCard;
