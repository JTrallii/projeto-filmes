import React from "react";
import Label from "./label/Label";
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
        </div>
      </form>
    );
  }
}
export default Formulario;
