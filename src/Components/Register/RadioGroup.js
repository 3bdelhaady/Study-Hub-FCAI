import React from "react";

export default function RadioGroup({ label, name, options, required=false, onChange, error, className }) {
  return (
    <div className={`form-group ${className || ""}`}>
      <label>{label}</label>
      <div className="radio-group">
        {options.map((opt, idx) => (
          <label key={idx}>
            <input type="radio" name={name} value={opt} required={required} onChange={onChange} />
            {opt}
          </label>
        ))}
      </div>
      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
}
