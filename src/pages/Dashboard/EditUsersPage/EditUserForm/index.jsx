import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../../components/common/Basics/DivFlex";
import { StyledText } from "../../../../components/common/Basics/StyledText";
import { StyledButton } from "../../../../components/common/Button/style";
import { StyledForm } from "../../../../components/common/Form/style";
import { StyledInput, StyledLabel } from "../../../../components/common/Input";
import { Theme } from "../../../../Theme";

import ImageUpload from "../../../../components/ImageUpload";
import ButtonGroup from "../../../../components/common/Button";
import { useGetAdmin } from "../../../AdminLogin/hooks/useGetAdmin";
import { useUpdateAdmin } from "../../../AdminLogin/hooks/useUpdateAdmin";

const EditUser = () => {
  const [adminData, setAdminData] = useState({});
  const navigate = useNavigate();

  const { getAdmin, error, data, isLoading } = useGetAdmin();
  const {
    isLoading: isLoadingAdmin,
    data: updateDate,
    updateAdmin,
    error: updateError,
  } = useUpdateAdmin();

  const { id } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...adminData, id };
    updateAdmin(data, () => navigate("/user-management"));
  };

  useEffect(() => {
    getAdmin(id, setAdminData);
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     setAdminData(data);
  //   }
  // }, [data]);
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
        Edit User
      </StyledText>
      <StyledForm onSubmit={handleSubmit}>
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
                placeholder="Enter first name"
                value={adminData.firstname}
                onChange={handleChange}
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                name="firstname"
              />
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
                placeholder="Enter last name"
                value={adminData.lastname}
                onChange={handleChange}
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                name="lastname"
              />
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column" fontSize="1.8rem" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Phone Number
              </StyledLabel>
              <StyledInput
                type="tel"
                placeholder="Enter phone number"
                value={adminData.phone}
                onChange={handleChange}
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                name="phone"
              />
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel color={Theme.colors.neutralColor2} fontSize="1.8rem">
                Email
              </StyledLabel>
              <StyledInput
                type="email"
                placeholder="Email"
                value={adminData.email}
                onChange={handleChange}
                // required
                padding="2.3rem"
                fontSize="2.3rem"
                // {...register("email", { required: "This field is required" })}
                name="email"
              />
            </StyledDivFlex>
          </StyledDivFlex>
          <StyledDivFlex right="1" flexDirection="column" gap="2rem" flex="1">
            {/* <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Role
              </StyledLabel>
              <Dropdown
                background={Theme.colors.secondaryColor}
                name="role"
                label="Role"
                onChange={(data) => console.log("user selection", data)}
                data={roleData}
                icon={<KeyboardArrowDownIcon fontSize="large" />}
              />
            </StyledDivFlex> */}
            <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor}>
              Upload Image
            </StyledLabel>

            <ImageUpload
              name="avatar_file"
              value={adminData.avatar}
              onImageChange={(imageUrl) =>
                setAdminData({ ...adminData, avatar: imageUrl })
              }
            />
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
                // onClick={() => setShowUserList(true)}
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
                // isLoading={isLoading}
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

export default EditUser;
