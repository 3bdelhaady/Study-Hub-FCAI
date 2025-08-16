import React from "react";

export default function FormSection({ title, children }) {
  return (
    <div className="form-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
}
