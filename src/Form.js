import { useFormik } from "formik";
import * as Yup from "yup";

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
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "მინიმუმ 3 სიმბოლო!")
        .required("აუცილებლად შეავსეთ!"),
      email: Yup.string()
        .email("ემაილი არასწორია")
        .required("აუცილებლად შეავსეთ!"),
      amount: Yup.number()
        .min(5, "არანაკლებ 5 ერთეული")
        .required("აუცილებლად შეავსეთ!"),
      currency: Yup.string().required("აირჩიეთ ვალუტა"),
      text: Yup.string().min(10, "არანაკლებ 10 სიმბოლო"),
      terms: Yup.boolean()
        .required("დათანხმება აუცილებელია!")
        .oneOf([true], "დათანხმება აუცილებელია!"),
    }),
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
        <div className="error">{formik.errors.name}</div>
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
        <div className="error">{formik.errors.email}</div>
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
      {formik.errors.amount && formik.touched.amount ? (
        <div className="error">{formik.errors.amount}</div>
      ) : null}
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
      {formik.errors.currency && formik.touched.currency ? (
        <div className="error">{formik.errors.currency}</div>
      ) : null}
      <label htmlFor="text">თქვენი ტექსტი</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.text ? (
        <div className="error">{formik.errors.text}</div>
      ) : null}
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
      {formik.errors.terms && formik.touched.terms ? (
        <div className="error">{formik.errors.terms}</div>
      ) : null}
      <button type="submit">გაგზავნა</button>
    </form>
  );
};

export default Form;
