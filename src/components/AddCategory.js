import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [InputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    InputValue
      ? setCategories((cat) => [InputValue])
      : console.log("Campo Requerido");
    setInputValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="tittle"> GiphyApp</h2>
      <div className="buscador">
        <input
          type="text"
          value={InputValue}
          onChange={handleInputChange}
          placeholder="Buscar..."
        />
      </div>
    </form>
  );
};
