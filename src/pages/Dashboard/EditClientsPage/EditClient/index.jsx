import React, { useEffect, useState } from "react";
import { css } from "styled-components";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../../components/common/Basics/DivFlex";
import { StyledText } from "../../../../components/common/Basics/StyledText";
import { StyledButton } from "../../../../components/common/Button/style";
import { StyledForm } from "../../../../components/common/Form/style";
import { StyledInput, StyledLabel } from "../../../../components/common/Input";
import ImageUpload from "../../../../components/ImageUpload";
import { Theme } from "../../../../Theme";
import ButtonGroup from "../../../../components/common/Button";

const EditClient = ({ setShowClientList, getAllClient }) => {
  // const [imgUrl, setImgUrl] = useState(null);

  const [signUpClientData, setSignUpClientData] = useState({});

  const handleChange = ({ name, value }) => {
    // setSignUpClientData({ ...signUpClientData, [name]: value });
    // console.log("data=>=>=>", signUpClientData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = { ...signUpClientData, guard: "user" };
  };

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
                Firstname
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Enter name"
                required
                padding="2.3rem"
                fontSize="2.3rem"
                name="firstname"
                value={signUpClientData.firstname}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Lastname
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Enter name"
                required
                padding="2.3rem"
                fontSize="2.3rem"
                name="lastname"
                value={signUpClientData.lastname}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>

            <StyledDivFlex
              flexDirection="column"
              fontSize="1.8rem"
              // gap="1rem"
            >
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Client Code
              </StyledLabel>
              <StyledInput
                type="number"
                placeholder="Enter Client Code"
                required
                padding="2.3rem"
                fontSize="2.3rem"
                name="company_id"
                value={signUpClientData.company_id}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column" fontSize="1.8rem" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Phone number
              </StyledLabel>
              <StyledInput
                type="tel"
                placeholder="Phone Number"
                required
                padding="2.3rem"
                fontSize="2.3rem"
                name="phone"
                value={signUpClientData.phone}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel color={Theme.colors.neutralColor2} fontSize="1.8rem">
                Email
              </StyledLabel>
              <StyledInput
                type="email"
                placeholder="Email"
                required
                padding="2.3rem"
                fontSize="2.3rem"
                name="email"
                value={signUpClientData.email}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>
          </StyledDivFlex>
          <StyledDivFlex right="1" flexDirection="column" gap="2rem" flex="1">
            <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Company Address
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Company Address"
                required
                padding="2.3rem"
                fontSize="2.3rem"
                name="company_address"
                value={signUpClientData.company_address}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>
            <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
              Upload Image
            </StyledLabel>

            <ImageUpload name="avatar_file" onImageChange={handleChange} />

            <StyledDivFlex
              gap="1rem"
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
                onClick={() => setShowClientList(true)}
              >
                Cancel
              </StyledButton>

              <ButtonGroup
                padding="1.2rem 5.7rem"
                fontSize="1.8rem"
                spinnerHeight="1rem"
                spinnerWidth="1rem"
                background={Theme.colors.primaryColor}
                borderRadius="5rem"
                fontWeight="500"
                color={Theme.colors.neutralColor}
                // isLoading={isLoading}
              >
                Add Client
              </ButtonGroup>
            </StyledDivFlex>
          </StyledDivFlex>
        </StyledDivFlex>
      </StyledForm>
    </StyledBox>
  );
};

export default EditClient;
