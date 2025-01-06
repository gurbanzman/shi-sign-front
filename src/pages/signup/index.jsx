import SwiperContents from "../../components/layouts/swiper-slider";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  Button,
  Description,
  HeadLarge,
  InputText,
  Line,
  Google,
  Apple,
} from "../../components/ui/index";

import { useFormik } from "formik";
import { RegisterFormSchemas } from "../../schemas/RegisterFormSchemas";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [close, setClose] = useState(false);
  const myBackend = import.meta.env.VITE_MYBACKEND;

  const submit = async (values, action) => {
    let createdUser = await axios.post(`${myBackend}/create`,values);
    console.log(createdUser);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      term: "",
    },
    validationSchema: RegisterFormSchemas,
    onSubmit: submit,
  });

  return (
    <div className="sign">
      <div className="sign-container container flex-between">
        {/* this's parent of slider inside logo */}
        <div className="sign-card-media half">
          {/* parent of swiper slide */}
          <div className="sign-swiper-cards">
            <SwiperContents type={`swiper-carts`} />
          </div>
          {/* parent of logo */}
          <div className="sign-logo-content flex-between">
            <h1 className="sign-logo">
              <Link className="sign-logo-home">
                <img src={logo} alt="" />
              </Link>
            </h1>
            <p className="sign-back">
              <Link className="sign-back-link">Back to website</Link>
            </p>
          </div>
        </div>
        {/* this's parent of form */}
        <div className="sign-card-form half">
          <div className="sign-card-form-head">
            <HeadLarge variant={`large small`} title={`Create an account`} />
            <Description
              message={`You have already an account`}
              linkText={`Log in`}
              variant={`medium`}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="sign-form section"
            autoComplete="off"
          >
            <div
              className={`sign-form-head ${
                Object.keys(errors).length > 0 ? "wrong" : "right"
              }`}
            >
              {/* parent of inputs */}
              <div className="sign-parent-input">
                <div
                  className="form-input-content input--half"
                  data-wrong={errors.fname}
                >
                  <InputText
                    type={`text`}
                    placeholder={`First name`}
                    name={`fname`}
                    handleEvents={handleChange}
                    value={values.fname}
                  />
                </div>
                <div
                  className="form-input-content input--half"
                  data-wrong={errors.lname}
                >
                  <InputText
                    type={`text`}
                    placeholder={`Last name`}
                    name={`lname`}
                    handleEvents={handleChange}
                    value={values.lname}
                  />
                </div>
                <div
                  className="form-input-content full"
                  data-wrong={errors.email}
                >
                  <InputText
                    type={`email`}
                    placeholder={`Email`}
                    name={`email`}
                    handleEvents={handleChange}
                    value={values.email}
                  />
                </div>
                <div
                  className="form-input-content pass full"
                  data-wrong={errors.password}
                >
                  <InputText
                    type={close ? "text" : "password"}
                    placeholder={`Enter your password`}
                    name={`password`}
                    handleEvents={handleChange}
                    value={values.password}
                  />
                  <div
                    className={`important-icon ${close ? "close" : ""}`}
                    onClick={() => setClose((item) => !item)}
                  ></div>
                </div>
              </div>
              <div className="sign-order" data-wrong={errors.term}>
                <InputText
                  type={`checkbox`}
                  custom={`input-checkbox flex-center`}
                  name={`term`}
                  handleEvents={handleChange}
                  value={values.term}
                />
                <Description
                  message={`I agree to the`}
                  linkText={`Terms& Conditions`}
                  variant={`small`}
                />
              </div>
            </div>
            <div className="sign-form-body section">
              <div className="sign-form-btn">
                <Button type={`submit`} variant={`btn-violet full`}>
                  Create account
                </Button>
              </div>
              <div className="sign-line">
                <Line text={`or register with`} />
              </div>
              <div className="sign-auth">
                <Button type={`button`} variant={`btn-light half`}>
                  <div className="sign-auth-media">
                    <img src={Google} alt="" />
                  </div>
                  Google
                </Button>
                <Button type={`button`} variant={`btn-light half`}>
                  <div className="sign-auth-media">
                    <img src={Apple} alt="" />
                  </div>
                  Apple
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
