import React, { useContext, useState } from "react";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";
import { Form } from "../../components/form/Form";
import { Input } from "../../components/form/Input";
import { useForm } from "../../hooks/useForm";
import { IRegister } from "../../interfaces/user";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Modal } from "../../components/modal/Modal";

export const RegisterPage = () => {

  const { registerUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const [errorMsg, setErrorMsg] = useState({
    hasError: false,
    message: "",
  });

  const { values, handleInputChange, reset, isError, handleError } = useForm<IRegister>({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const submitForm = async (e: FormDataEvent) => {
    e.preventDefault();

    console.log(values);
    const { lastname, firstname, ...rest } = values;

    const response = await registerUser({
      ...rest,
      name: {
        firstname,
        lastname,
      },
    });

    setOpenModal(!response.hasError);
    if (!response.hasError) {
      reset();
    }
    setErrorMsg(response);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-3 xs:w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="w-36 h-40">
            <img
              className="w-full h-full object-contain"
              src="https://res.cloudinary.com/dl9e7nlbu/image/upload/v1681727299/logoEW-small_bnuqea.png"
              alt=""
            />
          </div>
          <p className="font-bold text-2xl text-gray-800">
            The best products and prices
          </p>
        </div>

        {errorMsg.hasError && (
          <div>
            <p className="font-bold text-xl text-red-500">{errorMsg.message}</p>
          </div>
        )}

        <Form onSubmit={submitForm}>

          <Input
            key={"username"}
            type="text"
            name="username"
            placeholder="Username..."
            onChange={handleInputChange}
            onError={handleError}
            value={values.username}
            maxLength={{
              num: 10,
              text: "Maximum 10 characters",
            }}
            minLength={{
              num: 2,
              text: "Minimum 2 characters",
            }}
          />

          <Input
            key={"password"}
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleInputChange}
            onError={handleError}
            value={values.password}
            maxLength={{
              num: 10,
              text: "Maximum 10 characters",
            }}
            minLength={{
              num: 2,
              text: "Minimum 2 characters",
            }}
          />

          <Input
            key={"email"}
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleInputChange}
            value={values.email}
          />

          <Input
            key={"firstname"}
            type="text"
            name="firstname"
            placeholder="Firstname..."
            onChange={handleInputChange}
            onError={handleError}
            value={values.firstname}
            maxLength={{
              num: 10,
              text: "Maximum 10 characters",
            }}
            minLength={{
              num: 2,
              text: "Minimum 2 characters",
            }}
          />

          <Input
            key={"lastname"}
            type="text"
            name="lastname"
            placeholder="Lastname..."
            onChange={handleInputChange}
            onError={handleError}
            value={values.lastname}
            maxLength={{
              num: 10,
              text: "Maximum 10 characters",
            }}
            minLength={{
              num: 2,
              text: "Minimum 2 characters",
            }}
             
          />

          <div className="mt-5">
            <Button
              disabled={isError()}
              type="submit"
              text="REGISTER"
              bgColor="bg-black"
              color="text-white"
              rounded="rounded-lg"
              size="lg"
            />
          </div>

          <p className="font-semibold text-base">
            Already a member?{" "}
            <Link to="/login" className="text-cyan-500 underline">
              Log in
            </Link>
          </p>
        </Form>
      </div>

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="font-semibold text-xl text-gray-800">
              Your ID is{" "}
              <span className="text-cyan-500">{errorMsg.message}</span>
            </p>

            <Link
              to="/login"
              className="w-full p-2 rounded-2xl border border-cyan-500 font-semibold relative text-center"
            >
              Accept
            </Link>
          </div>
        </Modal>
      )}
    </div>
  );
};
