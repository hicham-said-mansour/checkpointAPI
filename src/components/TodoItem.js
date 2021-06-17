import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function TodoItem(props) {
  return (
    <div>
      <input type="checkBox" />
      <span>{props.hichem}</span>
    </div>
  );
}

export default TodoItem;
