import React from "react";

import Form from "./Form/Form";
import Summary from "./Summary/Summary";

export default function Main() {
  const [count, setCount] = React.useState(0);

  const [checkPerPerson, setCheckPerPerson] = React.useState({
    tipAmount: "0.00",
    total: "0.00",
  });

  const [personAmount, setPersonAmount] = React.useState({
    bill: "",
    tip: "",
    people: "",
  });

  function handle(e) {
    const { value, name } = e.target;
    setPersonAmount({ ...personAmount, [name]: value.replace("%", "") });
    setCount(count + 1)
  }

  console.log(count)

  React.useEffect(() => {
    if (
      (personAmount.bill != "") &
      (personAmount.tip != "") &
      (personAmount.people != "")
    ) {
      calc(personAmount);
    }
  }, [count]);

  function calc(obj) {
    const percTot = ((obj.bill / 100) * obj.tip).toFixed(2);
    const percPerson = (percTot / obj.people).toFixed(2);
    const tot = (obj.bill / obj.people + parseFloat(percPerson)).toFixed(2);

    setCheckPerPerson({
      tipAmount: percPerson,
      total: tot,
    });
  }

  function reset() {
    setCheckPerPerson({ tipAmount: "0.00", total: "0.00" });
    setPersonAmount({
      bill: "",
      tip: "",
      people: "",
    });
    setCount(0)
  }

  return (
    <main className="p-8 bg-white rounded-3xl mx-auto grid gap-8 sm:w-3/4 lg:w-[85%] lg:grid-cols-2 lg:gap-10 max-w-[58em] lg:p-9">
      <Form
        handle={handle}
        billVal={personAmount.bill}
        nPeople={personAmount.people}
      />
      <Summary
        amountTip={checkPerPerson.tipAmount}
        amountTot={checkPerPerson.total}
        onClick={reset}
      />
    </main>
  );
}
