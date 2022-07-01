import React, { useState } from "react";
import Icon from "react-icons-kit";
// import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'
// import {eye} from 'react-icons-kit/ionicons/eye'

import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const TogglePassword = () => {
  const [isVisible, setIsVisible] = useState(false);
  const icons = isVisible ? (
    <Icon size={30} icon={eyeOff} onClick={() => setIsVisible(!isVisible)} />
  ) : (
    <Icon size={30} onClick={() => setIsVisible(!isVisible)} icon={eye} />
  );
  
  const InputType = isVisible ? "text" : "password";
  return [icons, InputType];
};

export default TogglePassword;
