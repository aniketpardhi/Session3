import React from "react";
import Input from "../../Components/Input";

const Colors = ({ handlechange }) => {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container color-title">
        <input type="radio" name="test2" onChange={handlechange} value="" />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handlechange={handlechange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handlechange={handlechange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />

<Input
        handlechange={handlechange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />

<label className="sidebar-label-container color-title">
        <input type="radio" name="test2" onChange={handlechange} value="white" />
        <span className="checkmark " style={{backgroundColor:"white",border:"2px solid black"}}></span>White
      </label>


    </div>
  );
};

export default Colors;
