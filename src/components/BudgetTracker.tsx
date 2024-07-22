import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";
import "react-circular-progressbar/dist/styles.css"
export default function BudgetTracker() {

  const { state, totalExpenses, remainingBudget,dispatch } = useBudget()
  
  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2) // el tofix lo passa a string con el + le obligo que sea numero 
  
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? '#DC2626': '#3b82f6',
            trailColor: '#f5f5f5',
            textSize: 8,
            textColor: '#3b82f6'
          })}
          text={`${percentage}% Gastado`}
        />
          </div>
        <div className=" felx flex-col justify-center items-center gap-8">
        <button
          onClick={()=>dispatch({type:'reset-app'})}
            type="button"
            className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          >
            Resetear App
          </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="disponible" amount={remainingBudget} />
        <AmountDisplay label="gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
