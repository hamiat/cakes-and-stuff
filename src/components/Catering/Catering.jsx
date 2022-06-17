import style from "./catering.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Catering() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const handleInputData = (e) => {
    console.log(JSON.stringify(data))
    
  }

  return (
    <section className={style.catering}>
      <h2 className={style.sectionTitle}>Catering</h2>
      <p>(we'll get back to you as soon as possible!)</p>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <label>
          Email
        <input {...register("email")} placeholder="Email" />
        </label>
        <label>
          Message
        <textarea {...register("message")} placeholder="Message" />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
}
