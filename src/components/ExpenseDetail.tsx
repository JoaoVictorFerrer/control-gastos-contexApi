import { useMemo } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import { FormatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import "react-swipeable-list/dist/styles.css";
import { useBudget } from "../hooks/useBudget";
type ExpenseDetailProps = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const { dispatch } = useBudget();

  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type:'get-expense-by-id',payload:{id: expense.id}})}>Actualizar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() =>
          dispatch({ type: "remove-expense", payload: { id: expense.id } })
        }
        destructive={true}
      >
        eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={1}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-20 flex items-center gap-5">
          <div>
            <img
              src={`/icono_${categoryInfo.icon}.svg`}
              alt="icono gasto"
              className="w-20"
            />
          </div>
          <div className="flex-1 space-y-3">
            <p className="text-sm font-bold uppercase text-slate-500">
              {categoryInfo.name}
            </p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">
              {" "}
              {FormatDate(expense.date!.toString())}
            </p>
            {/* con la exclamacion le estoy diciendo que le garantizo que va exiasitir */}
          </div>
          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}