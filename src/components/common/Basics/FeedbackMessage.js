// import antd from "antd/lib/message";
import { message, Button, Space } from 'antd';



export const successMessage = ({ text }) => {
    message.success(text);
};

export const errorMessage = () => {
    message.error('This is an error message');
};

export const warningMessage = () => {
    message.warning('This is a warning message');
};