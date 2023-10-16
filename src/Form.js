import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "შევსება აუცილებელია!";
  } else if (values.name.length < 2) {
    errors.name = "მინიმუმ 2 სიმბოლო!";
  }

  if (!values.email) {
    errors.email = "შევსება აუცილებელია!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "ემაილი არასწორია!";
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validate,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>შესაწირის გაგზავნა</h2>
      <label htmlFor="name">თქვენი სახელი</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">ელ.ფოსტა</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="amount">რაოდენობა</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor="currency">ვალუტა</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">აირჩიეთ ვალუტა</option>
        <option value="GEL">GEL</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <label htmlFor="text">თქვენი ტექსტი</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        ეთანხმებით კონფიდენციალობის დაცვის პოლიტიკას?
      </label>
      <button type="submit">გაგზავნა</button>
    </form>
  );
};

export default Form;
