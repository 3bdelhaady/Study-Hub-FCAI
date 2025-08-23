import React from "react";
import FormSection from "./FormSection";
import FormGroup from "./FormGroup.js";
import RadioGroup from "./RadioGroup";
import Footer from "../Footer/Footer.js";
import useFormHandler from "./FormSubmitHandler";

export default function RegisterPage() {
  const { formData, errors, handleChange, handleSubmit } = useFormHandler();

  return (
    <>
      <div className="container">
        <header className="register-header">
          <h1>Register to Join Study Hub</h1>
          <p>
            Complete this form to join Study Hub and activate your ID. You'll get
            access to events, trips, academic resources, PS contests, gaming
            competitions, exclusive discounts, and more.
          </p>
        </header>

        <div className="register-card">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <FormSection title="Personal Information">
              <div className="form-grid">
                <FormGroup label="Full Name *" name="fullNameEn" placeholder="Enter your full name in Arabic" required onChange={handleChange} error={errors.fullNameAr} />
                <FormGroup type="text" label="Date of Birth (YYYY-MM-DD)*" name="Date" placeholder="Enter your Date" required onChange={handleChange} error={errors.Date} />
                <FormGroup label="National ID *" name="nationalId" placeholder="Enter your National ID" required onChange={handleChange} error={errors.nationalId} />
              </div>
              <FormGroup as="textarea" label="Full Address*" name="address" placeholder="Governorate - City - Street" required onChange={handleChange} error={errors.fullAddress} />
            </FormSection>

            {/* Academic Information */}
            <FormSection title="Academic Information">
              <div className="form-grid">
                <FormGroup label="Student Code *" name="studentCode" placeholder="Enter your student code" required onChange={handleChange} error={errors.studentCode} />
                <RadioGroup label="Which faculty or campus are you affiliated with?" name="faculty" options={["Faculty of Computer Science – SVNU (South Valley National University)","Faculty of Computer Science – SVU (South Valley University)","Other"]} onChange={handleChange} error={errors.faculty}  className="interest-area-group" />
                <RadioGroup label="Current Academic Year (2025–2026) *" name="academicYear" options={["First Year – Freshman","Second Year – Sophomore","Third Year – Junior","Fourth Year – Senior"]} onChange={handleChange} required error={errors.academicYear} className="interest-area-group" />
                <RadioGroup label="Department *" name="department" options={["General (Freshman or Sophomore)","AI","CS","IT"]} onChange={handleChange} required error={errors.department} className="interest-area-group"/>
              </div>
              <FormGroup as="select" label="Specialization (if available)*" name="specialization" options={["Frontend Development","Backend Development", "Cybersecurity","Quality Assurance (Q/A)", "Data Science", "Artificial Intelligence (AI)", "Machine Learning (ML)", "Mobile App Development", "UI/UX Design", "Cloud Computing", "Game Development", "Embedded Systems", "DevOps", "Computer Vision", "Other"]} onChange={handleChange}error={errors.specialization} required/>
              <FormGroup label="GPA (Optional)" name="gpa" placeholder="Enter your GPA" onChange={handleChange} />
            </FormSection>

            {/* Contact Information */}
            <FormSection title="Contact Information">
              <div className="form-grid">
                <FormGroup type="email" label="Email *" name="email" placeholder="Enter your email*" required onChange={handleChange} error={errors.email} />
                <FormGroup label="WhatsApp Number *" name="phone" placeholder="Enter your WhatsApp number*" required onChange={handleChange} error={errors.phone} />
                <FormGroup type="url" label="LinkedIn (Optional)" name="linkedin" placeholder="LinkedIn profile URL" onChange={handleChange} />
                <FormGroup label="GitHub (Optional)" name="github" placeholder="GitHub profile URL" onChange={handleChange} />
              </div>
              <FormGroup label="Codeforces Account (Optional)" name="codeforces" placeholder="Enter your Codeforces account" onChange={handleChange} />
            </FormSection>

            {/* Preferences & Interests */}
            <FormSection title="Preferences & Interests">
              <RadioGroup label="Do you play Esports?" name="esports" options={["Yes", "No", "Maybe"]} onChange={handleChange} required error={errors.esports} />
              <RadioGroup label="If you had the opportunity to volunteer and join the choir, would you participate?" name="choir" options={["Yes", "No", "Maybe"]} onChange={handleChange} required error={errors.fanEvent} />
              <FormGroup
                label="Interest Area"
                name="interest"
                options={[
                  "Study Hub (Academic learning or skill-based content like Problem Solving)",
                  "Gaming Hub (Joining tournaments, e-sports activities, or casual game events)",
                  "Social Hub (Attending events, registering for trips, and offline gatherings)"
                ]}
                onChange={handleChange}
                error={errors.interestArea}
                className="interest-area-group"
                type="checkbox"
              />
              <FormGroup as="textarea" label="Suggestions or Comments (Optional)" name="suggestions" placeholder="Share your thoughts" onChange={handleChange} />
            </FormSection>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
