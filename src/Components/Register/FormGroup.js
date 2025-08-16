import React from "react";

export default function FormGroup({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  as, 
  options = [], 
  required, 
  onChange, 
  error 
}) {
  let InputTag;

  if (as === "textarea") {
    InputTag = "textarea";
  } else if (as === "select") {
    InputTag = "select";
  } else if (type === "checkbox") {
    InputTag = "input";
  } else {
    InputTag = "input";
  }

  return (
    <div className="form-group">
      {type === "checkbox" ? (
         <div className="checkbox-item">
         <label className="label-parent">{label}</label>
         {options.map((opt, idx) => (
           <label key={idx} className="label-children">
             <input
               type="checkbox"
               name={name}
               value={opt}
               onChange={onChange}
               style={{ marginRight: "5px" }}
             />
             {opt}
           </label>
         ))}
       </div>
      ) : as === "select" ? (
        <div>
          <label htmlFor={name}>{label}</label>
          <select
            id={name}
            name={name}
            required={required}
            className="form-control"
            onChange={onChange}
          >
            <option value="">Select...</option>
            {options.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <label htmlFor={name}>{label}</label>
          <InputTag
            type={as === "textarea" ? undefined : type}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            className="form-control"
            onChange={onChange}
          />
        </div>
      )}

      {error && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
}
