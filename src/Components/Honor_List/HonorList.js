import honorList from "./honorData.js"; 
export default function HonorList() {
  return (
    <section className="honor-section"  id={"#honor"}>
      <h2 className="honor-title">Honor List</h2>
      <p className="honor-subtitle">
        Celebrating our outstanding community members who go above and beyond to help others succeed
      </p>
      <div className="honor-grid">
        {honorList.map((member, index) => (
          <div className="honor-card" key={index}>
            <div className="honor-img-circle">
              <img src={member.image} alt={`${member.name}, Honor List ${member.role}`} />
            </div>
            <div className="honor-name">{member.name}</div>
            <div className="honor-meta">{member.year}</div>
            <div className={`honor-badge ${member.roleClass}`}>{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
