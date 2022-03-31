// import antd from "antd/lib/message";
import { message, Button, Space } from 'antd';

// const feedbackMessage = ({
//     type = "success",
//     key,
//     message,
//     duration = "2.5",
// }) => {
//     console.log("called2");
//     antd[type]({ message, key, duration });
// };

// export default feedbackMessage;

export const successMessage = ({ text }) => {
    message.success(text);
};

export const errorMessage = () => {
    message.error('This is an error message');
};

export const warningMessage = () => {
    message.warning('This is a warning message');
};