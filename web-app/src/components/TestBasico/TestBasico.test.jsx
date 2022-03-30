import React from "react";
import { getByTestId, render } from "@testing-library/react";
import TestBasico from "./TestBasico";

test("Evaluación de nombre", ()=>{
  //Arrange
  const {getByTestId} = render(<TestBasico/>);
  const nombre = getByTestId("result");
  
  //Act

  //Assert
  expect(nombre.textContent).toBe("SA-201700529");
})