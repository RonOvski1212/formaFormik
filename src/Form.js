import { useFormik } from "formik";

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
      />
      <label htmlFor="email">ელ.ფოსტა</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <label htmlFor="amount">რაოდენობა</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
      />
      <label htmlFor="currency">ვალუტა</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
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
      />
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
        />
        ეთანხმებით კონფიდენციალობის დაცვის პოლიტიკას?
      </label>
      <button type="submit">გაგზავნა</button>
    </form>
  );
};

export default Form;
