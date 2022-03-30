import React from "react";
import { getByTestId, render } from "@testing-library/react";
import TimeLine from "./TimeLine";

test("Evaluación de nombre", ()=>{
  //Arrange
  const {getByTestId} = render(<TimeLine/>);
  const nombre = getByTestId("result");
  
  //Act

  //Assert
  expect(nombre.textContent).toBe("Repeat");
})