import React from "react";
import Label from "./Label";
import Error from "./Error";
import Input from "./Input";
import Button from "./Button";
import Custom from "./Custom";
import GridBtn from "../UI/GridBtn";

// img
import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";

export default function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <Label for="bill" name="Bill" />
      {props.billVal === "0" && <Error />}
      <Input
        id="bill"
        step="0.01"
        alt="dollar symbol"
        img={dollar}
        onChange={props.handle}
      />

      <fieldset className="my-8 lg:my-11">
        <legend className="block text-Dark_grayish_cyan mb-4">
          Select Tip %
        </legend>
        <GridBtn>
          <Button value="5%" for="five" onClick={props.handle} />
          <Button value="10%" for="ten" onClick={props.handle} />
          <Button value="15%" for="fifteen" onClick={props.handle} />
          <Button value="25%" for="twentyfive" onClick={props.handle} />
          <Button value="50%" for="fifty" onClick={props.handle} />
          <Custom for="custom" onChange={props.handle} />
        </GridBtn>
      </fieldset>

      <Label for="people" name="Number of People" />
      {props.nPeople === "0" && <Error />}
      <Input
        id="people"
        step="1"
        alt="person icon"
        img={person}
        onChange={props.handle}
      />
    </form>
  );
}
