import React from "react";
import Label from "./label/Label";
import Input from "./input/Input";
class Formulario extends React.Component {
  render() {
    return (
      <form>
        <div className="teste">
          <Label 
          htmlFor="name" 
          id="name"
          >
            Nome:
          </Label>
          <Input
          type="number"
          name="name"
          id="name"
          placeholder="Digite algo aqui..."
          value=""
          />
        </div>
      </form>
    );
  }
}
export default Formulario;
