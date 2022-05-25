import React, { useContext, useEffect, useState } from "react";
import { css } from "styled-components";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledText } from "../../../components/common/Basics/StyledText";
import { StyledButton } from "../../../components/common/Button/style";
import { StyledForm } from "../../../components/common/Form/style";
import { StyledInput, StyledLabel } from "../../../components/common/Input";
import ImageUpload from "../../../components/ImageUpload";
import { Theme } from "../../../Theme";
import { useCreateClient } from "./hooks/CreateClient";
import ButtonGroup from "../../../components/common/Button";
import { roleData } from "../../../DUMMYDATA";
import Dropdown from "../../../components/common/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { globalContext } from "../../../Context/GlobalContext";
import { useGetAllCompanies } from "../../../components/Company/hooks/useGetAllCompanies";

const AddClient = ({ setShowList, getList, userType }) => {
  // const [imgUrl, setImgUrl] = useState(null);
  const { data: companyData, getAllCompany } = useGetAllCompanies();
  // console.log("company data==>", companyData[1]);

  const [companyName, setCompanyName] = useState();
  console.log("company==>", companyName);
  const [signUpClientData, setSignUpClientData] = useState({});
  const { createClient, isLoading, data, error } = useCreateClient();

  const handleChange = ({ name, value }) => {
    setSignUpClientData({ ...signUpClientData, [name]: value });
    // console.log("data=>=>=>", signUpClientData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      ...signUpClientData,
      ...(userType === "client" && { role: "user" }),
    };
    createClient(data);
  };

  useEffect(() => {
    getAllCompany();
  }, []);

  useEffect(() => {
    if (companyData) {
      console.log("checking ooooooooooooooooooo");
      const newData = companyData?.map((data) => {
        return data.name;
      });
      setCompanyName(newData);
      console.log("companyName=>>> ", newData);
    }
  }, [companyData]);

  useEffect(() => {
    // console.log("data444", data);
    if (data) {
      setShowList(true);
      getList();
    }
  }, [data]);

  return (
    <StyledBox
      padding="2.5rem 8rem"
      paddingS="1rem"
      minHeight="max-content"
      background={Theme.colors.neutralColor}
      marginTop="3rem"
    >
      <StyledText
        fontSize="2.4rem"
        color={Theme.colors.neutralColor2}
        style={{ padding: "5rem 0rem" }}
        fontSizeS="2rem"
      >
        Add user now
      </StyledText>
      <StyledForm onSubmit={handleSubmit}>
        <StyledDivFlex
          gap="15rem"
          width="95%"
          justifyContent="space-between"
          padding="3rem 0rem 1.2rem 0rem"
          flexDirectionM="column"
          gapM="2rem"
          widthS="100%"
          paddingS="1rem"
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
                fontSizeS="1.5rem"
                paddingS="2rem"
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
                fontSizeS="1.5rem"
                paddingS="2rem"
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
              <Dropdown
                background={Theme.colors.secondaryColor}
                name="company_id"
                Top="6.8rem"
                TopS="5.8rem"
                padding="2rem"
                label="Client Code"
                fontSizeS="1.5rem"
                paddingS="1.5rem !important"
                value={signUpClientData.company_id}
                onChange={(data) => {
                  const { company_id } = data;
                  handleChange({
                    name: "company_id",
                    value: company_id,
                  });
                }}
                // console.log("role selection", data);

                data={companyName}
                icon={<KeyboardArrowDownIcon fontSize="large" />}
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
                fontSizeS="1.5rem"
                paddingS="2rem"
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
                fontSizeS="1.5rem"
                paddingS="2rem"
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
            {userType === "client" && (
              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel
                  fontSize="1.8rem"
                  color={Theme.colors.neutralColor2}
                >
                  Company Address
                </StyledLabel>
                <StyledInput
                  type="text"
                  placeholder="Company Address"
                  padding="2.3rem"
                  fontSize="2.3rem"
                  fontSizeS="1.5rem"
                  paddingS="2rem"
                  name="company_address"
                  value={signUpClientData.company_adrress}
                  onChange={(event) =>
                    handleChange({
                      name: event.target.name,
                      value: event.target.value,
                    })
                  }
                />
              </StyledDivFlex>
            )}

            {userType === "admin" && (
              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel
                  fontSize="1.8rem"
                  color={Theme.colors.neutralColor2}
                >
                  Role
                </StyledLabel>
                <Dropdown
                  background={Theme.colors.secondaryColor}
                  name="role"
                  Top="6.8rem"
                  padding="2rem"
                  TopS="5.8rem"
                  paddingS="1.5rem !important"
                  label="Role"
                  value={signUpClientData.role}
                  onChange={(data) => {
                    const { role } = data;
                    handleChange({
                      name: "role",
                      value: role,
                    });
                  }}
                  // console.log("role selection", data);

                  data={roleData}
                  icon={<KeyboardArrowDownIcon fontSize="large" />}
                />
              </StyledDivFlex>
            )}

            {userType === "client" && (
              <StyledDivFlex flexDirection="column" gap="1rem">
                <StyledLabel
                  fontSize="1.8rem"
                  color={Theme.colors.neutralColor2}
                >
                  Availability Threshold
                </StyledLabel>
                <StyledInput
                  type="number"
                  placeholder="Availability Threshold"
                  padding="2.3rem"
                  fontSize="2.3rem"
                  fontSizeS="1.5rem"
                  paddingS="2rem"
                  name="availability_threshold"
                  value={signUpClientData.availability_threshold}
                  onChange={(event) =>
                    handleChange({
                      name: event.target.name,
                      value: event.target.value,
                    })
                  }
                />
              </StyledDivFlex>
            )}

            <StyledLabel
              fontSize="1.8rem"
              fontSizeS="1.7rem"
              color={Theme.colors.neutralColor2}
            >
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
                fontSizeS="1.5rem"
                paddingS="1rem 4rem"
                color={Theme.colors.neutralColor}
                onClick={() => setShowList(true)}
              >
                Cancel
              </StyledButton>

              <ButtonGroup
                padding="1.2rem 5.7rem"
                fontSize="1.8rem"
                spinnerHeight="1rem"
                spinnerWidth="1rem"
                fontSizeS="1.5rem"
                paddingS="1rem 4rem"
                background={Theme.colors.primaryColor}
                borderRadius="5rem"
                fontWeight="500"
                color={Theme.colors.neutralColor}
                isLoading={isLoading}
              >
                Submit
              </ButtonGroup>
            </StyledDivFlex>
          </StyledDivFlex>
        </StyledDivFlex>
      </StyledForm>
    </StyledBox>
  );
};

export default AddClient;
