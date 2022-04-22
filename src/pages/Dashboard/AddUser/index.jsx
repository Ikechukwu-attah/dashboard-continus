import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledText } from "../../../components/common/Basics/StyledText";
import { StyledButton } from "../../../components/common/Button/style";
import { StyledForm } from "../../../components/common/Form/style";
import { StyledInput, StyledLabel } from "../../../components/common/Input";
import { Theme } from "../../../Theme";
import Dropdown from "../../../components/common/Dropdown";
import { roleData } from "../../../DUMMYDATA";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ImageUpload from "../../../components/ImageUpload";
import { useCreateUser } from "./hooks/UseCreateUser";
import ButtonGroup from "../../../components/common/Button";
import useMessages from "../../../components/common/messages/hooks/useMessages";

const AddUser = ({ setShowUserList, getAllUsers }) => {
  const [signUpData, setSignUpData] = useState({});
  const { createUser, data, isLoading, error } = useCreateUser();
  const { notify, ToastContainer } = useMessages();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = ({ name, value }) => {
    setSignUpData({ ...signUpData, [name]: value });
    // console.log("value", value);
  };

  const onHandleSubmit = () => {
    // event.preventDefault();
    const data = { ...signUpData, guard: "admin" };
    createUser(data);
  };
  useEffect(() => {
    console.log("data444", data);
    if (data) {
      setShowUserList(true);
      getAllUsers();
    }
  }, [data]);
  return (
    <StyledBox
      padding="2.5rem 8rem"
      minHeight="max-content"
      background={Theme.colors.neutralColor}
      marginTop="3rem"
    >
      <StyledText
        fontSize="2.4rem"
        color={Theme.colors.neutralColor2}
        style={{ padding: "5rem 0rem" }}
      >
        Add user now
      </StyledText>
      <StyledForm onSubmit={handleSubmit(onHandleSubmit)}>
        <StyledDivFlex
          gap="20rem"
          width="95%"
          justifyContent="space-between"
          padding="3rem 0rem 1.2rem 0rem"
        >
          <StyledDivFlex left="1" flexDirection="column" flex="1" gap="2rem">
            <StyledDivFlex flexDirection="column">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                FirstName
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Enter name"
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                name="firstname"
                // {...register("firstname", {
                //   required: "This field is required",
                // })}
                value={signUpData.firstname}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />

              {/* <StyledText color="yellow" fontSize="1.4rem">
                {errors.firstname?.message}
              </StyledText> */}
              {/* {validateError && (
                <StyledText color="red">
                  {validateError.firstname} check
                </StyledText>
              )} */}
            </StyledDivFlex>

            <StyledDivFlex
              flexDirection="column"
              fontSize="1.8rem"
              // gap="1rem"
            >
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                LastName
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Enter Username"
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                name="lastname"
                // {...register("lastname", {
                //   required: "This field is required",
                // })}
                value={signUpData.lastname}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
              {/* <StyledText color="yellow" fontSize="1.4rem">
                {errors.lastname?.message}
              </StyledText> */}
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column" fontSize="1.8rem" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Phone Number
              </StyledLabel>
              <StyledInput
                type="tel"
                placeholder="Phone Number"
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                name="phone"
                // {...register("phone", { required: "This field is required" })}
                value={signUpData.phone}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
              {/* <StyledText color="yellow" fontSize="1.4rem">
                {errors.phone?.message}
              </StyledText> */}
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel color={Theme.colors.neutralColor2} fontSize="1.8rem">
                Email
              </StyledLabel>
              <StyledInput
                type="email"
                placeholder="Email"
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                // {...register("email", { required: "This field is required" })}
                name="email"
                value={signUpData.email}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
              {/* <StyledText color="yellow" fontSize="1.4rem">
                {errors.email?.message}
              </StyledText> */}
            </StyledDivFlex>
          </StyledDivFlex>
          <StyledDivFlex right="1" flexDirection="column" gap="2rem" flex="1">
            <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Role
              </StyledLabel>
              <Dropdown
                background={Theme.colors.secondaryColor}
                name="role"
                label="Role"
                value={signUpData.role}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
                // console.log("role selection", data);

                data={roleData}
                icon={<KeyboardArrowDownIcon fontSize="large" />}
              />
            </StyledDivFlex>
            <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor}>
              Upload Image
            </StyledLabel>

            <ImageUpload name="avatar_file" onImageChange={handleChange} />
            {/* ADD THE COMPONENT HERE */}

            <StyledDivFlex
              gap="4rem"
              marginTop="5rem"
              justifyContent="space-between"
            >
              <StyledButton
                padding="1.2rem 6.7rem"
                fontSize="1.8rem"
                background={Theme.colors.neutralColor4}
                borderRadius="5rem"
                fontWeight="500"
                color={Theme.colors.neutralColor}
                onClick={() => setShowUserList(true)}
              >
                Cancel
              </StyledButton>
              <ButtonGroup
                padding="1.2rem 5.7rem"
                fontSize="1.8rem"
                spinnerHeight="1.5rem"
                spinnerWidth="1.5rem"
                background={Theme.colors.primaryColor}
                borderRadius="5rem"
                fontWeight="500"
                color={Theme.colors.neutralColor}
                isLoading={isLoading}
                // onClickMessage={error && <notify errorMessage={error} />}
              >
                {/* {error && <ToastContainer />} */}
                Add User
              </ButtonGroup>
            </StyledDivFlex>
          </StyledDivFlex>
        </StyledDivFlex>
      </StyledForm>
    </StyledBox>
  );
};

export default AddUser;
