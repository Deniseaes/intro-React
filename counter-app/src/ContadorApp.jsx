import PropTypes from "prop-types";

function ContadorApp({ value }) {
  const imprimeValor = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <h1 className="ContadorApp">{value}</h1>
      <button onClick={imprimeValor}>Impimir Valor </button>
    </div>
  );
}
ContadorApp.propTypes = {
  value: PropTypes.number,
};
export default ContadorApp;
