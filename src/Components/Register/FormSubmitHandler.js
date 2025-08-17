import { useState } from "react";

export default function useFormHandler(initialState = {}) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const prevValues = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...prevValues, value] });
      } else {
        setFormData({
          ...formData,
          [name]: prevValues.filter((v) => v !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من الحقول المطلوبة
    let newErrors = {};
    document.querySelectorAll("[required]").forEach((field) => {
      const value = formData[field.name];
      if (field.type === "checkbox" ? !value?.length : !value?.trim()) {
        newErrors[field.name] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycbwd0g7dmC31MHDnn8mGHT2EjNJbSBS9lf-6TOg9V490mlFyX9AgMEbiUkfRZwzT1be83w/exec";

    // تجهيز البيانات
    const body = new URLSearchParams();
    for (let key in formData) {
      if (Array.isArray(formData[key])) {
        body.append(key, formData[key].join(",")); // دمج القيم
      } else {
        body.append(key, formData[key]);
      }
    }

    // إرسال البيانات "في الخلفية"
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    }).catch((error) =>
      console.error("خطأ أثناء الإرسال في الخلفية:", error)
    );

    // ✅ Redirect فوري
    window.location.href = "/";
  };

  return { formData, errors, handleChange, handleSubmit };
}
