import React, { useState } from "react";

const Booking = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    groupSize: "small", // default
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Full name is required";
    if (!values.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "Invalid email address";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true });

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(form);
      } else {
        console.log("Booking submitted:", form);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="book" // 👈 this enables smooth scroll from navigation
      className="section-book"
      aria-label="Booking section"
    >
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form onSubmit={handleSubmit} className="form" noValidate>
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>

              {/* Full name */}
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby="name-error"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
                {touched.name && errors.name && (
                  <div
                    id="name-error"
                    className="form__error"
                    role="alert"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  >
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby="email-error"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
                {touched.email && errors.email && (
                  <div
                    id="email-error"
                    className="form__error"
                    role="alert"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  >
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Radio buttons */}
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="groupSize"
                    value="small"
                    checked={form.groupSize === "small"}
                    onChange={handleChange}
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="groupSize"
                    value="large"
                    checked={form.groupSize === "large"}
                    onChange={handleChange}
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large tour group
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="form__group">
                <button
                  type="submit"
                  className="btn btn--green"
                  disabled={submitting}
                  aria-busy={submitting}
                >
                  {submitting ? "Processing…" : "Next step →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
