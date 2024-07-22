import React, { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BugetForm() {

  const [budget, setBadget] = useState(0);

  const { dispatch } = useBudget() //llamando al contexApi POR EL CUSTOMHOOK

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setBadget(e.target.valueAsNumber) // EL INPUT ACEPTA BIEN ESTE TIPO DE DATOS PERO LOS TIPOS RADIO YA NO ES ASI SERIA MEJOR CON EL + 
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0
  },[budget])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type:'add-budget',payload:{budget}})
}

  return (
    <form className=" space-y-5" onSubmit={ handleSubmit}>
      <div className=" flex flex-col space gap-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          Definir Presupuesto
        </label>
        <input
          value={budget}
          type="number"
          name="budget"
          id="budgetID"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          onChange={ handleChange}
        />
      </div>
      <input
        type="submit"
        value="Definir presupuesto"
        className="bg-blue-600 uppercase hover:bg-blue-700 cursor-pointer w-full p-2 text-white  font-black disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  );
}
