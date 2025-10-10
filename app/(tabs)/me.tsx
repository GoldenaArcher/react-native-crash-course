import React from "react";
import { me } from "../../src/data/data";
import Profile from "../_components/_profile";

const index = () => {
  return <Profile contact={me} />;
};

export default index;
