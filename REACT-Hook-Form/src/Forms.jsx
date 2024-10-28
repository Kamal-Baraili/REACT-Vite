import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Forms = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required!"),
    email: yup.string().email().required("Your Email is required!"),
    age: yup
      .number("Age should be an integer")
      .positive("Age should be an integer")
      .integer("Age should be an integer")
      .min(18)
      .required("Your Age is required!"),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required("Your Password is required!"),
    comfirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match!")
      .required("Please confirm your Password!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d_flex">
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>
      </div>

      <div className="d_flex">
        <input type="text" placeholder="Email..." {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>

      <div className="d_flex">
        <input type="number" placeholder="Age..." {...register("age")} />
        <p>{errors.age?.message}</p>
      </div>

      <div className="d_flex">
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>

      <div className="d_flex">
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("comfirmPassword")}
        />
        <p>{errors.comfirmPassword?.message}</p>
      </div>
      <input type="submit" />
    </form>
  );
};

export default Forms;
