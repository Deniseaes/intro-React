import PropTypes from "prop-types";
import React, { useState } from "react";

function ContadorApp(props) {
  const [count, setCount] = useState(props.valueInicial);

  const imprimeValorSuma = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const imprimeValorResta = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  const valorReset = (e) => {
    e.preventDefault();
    setCount(props.valueInicial);
  };

  return (
    <div>
      <h1 className="ContadorApp">{count}</h1>
      <button onClick={imprimeValorSuma}>Sumar</button>
      <button onClick={imprimeValorResta}>Restar</button>
      <button onClick={valorReset}>Reset</button>
    </div>
  );
}
ContadorApp.propTypes = {
  valueInicial: PropTypes.number,
};

export default ContadorApp;
