import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={Yup.object({
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
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>შესაწირის გაგზავნა</h2>
        <label htmlFor="name">თქვენი სახელი</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" name="name" component="div" />
        <label htmlFor="email">ელ.ფოსტა</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage className="error" name="email" component="div" />
        <label htmlFor="amount">რაოდენობა</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage className="error" name="amount" component="div" />
        <label htmlFor="currency">ვალუტა</label>
        <Field id="currency" name="currency" as="select">
          <option value="">აირჩიეთ ვალუტა</option>
          <option value="GEL">GEL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div" />
        <label htmlFor="text">თქვენი ტექსტი</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component="div" />
        <label className="checkbox">
          <Field name="terms" type="checkbox" />
          ეთანხმებით კონფიდენციალობის დაცვის პოლიტიკას?
        </label>
        <ErrorMessage className="error" name="terms" component="div" />
        <button type="submit">გაგზავნა</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
