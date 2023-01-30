import React from "react";
import { useForm } from "react-hook-form";
export default function Addcolor(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    props.agregar(data);
    //limpiar
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label htmlFor="">Elige un color</label>
        <input
          type="color"
          className="form-control m-2"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          {...register("color", { required: true })}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
}
