import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label htmlFor={props.name}>
        <input type="checkbox" {...props} {...field} />
        {children}
      </label>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

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
        <MyTextInput label="თქვენი სახელი" id="name" name="name" type="text" />
        <MyTextInput label="ელ.ფოსტა" id="email" name="email" type="email" />
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
        <MyCheckbox name="terms">
          ეთანხმებით კონფიდენციალობის დაცვის პოლიტიკას?
        </MyCheckbox>
        <button type="submit">გაგზავნა</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
