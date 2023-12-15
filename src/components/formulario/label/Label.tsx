import React, { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  id: string;
  children: ReactNode; // Adicionei a propriedade children à interface
}

const Label: React.FC<LabelProps> = ({ htmlFor, id, children }) => {
  return (
    <>
      <label 
        htmlFor={htmlFor}
        id={id}
      >
        {children} {/* Aqui utiliza a propriedade children */}
      </label>
    </>
  );
};

export default Label;
