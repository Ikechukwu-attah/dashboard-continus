import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
import { useGetClient } from "../../../Login/hooks/useGetClient";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { useUpdateClient } from "../../../Login/hooks/useUpdateClients";
import { roleData } from "../../../../DUMMYDATA";
import Dropdown from "../../../../components/common/Dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { globalContext } from "../../../../Context/GlobalContext";
import { useGetAllCompanies } from "../../../../components/Company/hooks/useGetAllCompanies";

const EditClient = ({ setShowClientList }) => {
  const { data: companyData, getAllCompany } = useGetAllCompanies();

  const [companyName, setCompanyName] = useState();

  const [clientData, setClientData] = useState({});
  const { isLoading, data, getClient, error } = useGetClient();
  const { updateClient, isLoading: isUserUpdating } = useUpdateClient();
  const { id, userType } = useParams();


  const handleChange = ({ name, value }) => {
    setClientData({ ...clientData, [name]: value });
  };

  const navigate = useNavigate();

  useEffect(() => {
    getAllCompany();
  }, []);

  useEffect(() => {
    if (companyData) {
      const newData = companyData?.map((data) => {
        return data.name;
      });
      setCompanyName(newData);
    }
  }, [companyData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      ...clientData,
      id,
    };
    updateClient(data, () =>
      navigate(userType === "admin" ? "/user-management" : "/client-management")
    );
  };

  useEffect(() => {
    getClient(id, setClientData);
  }, []);

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
                value={clientData?.firstname}
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
                value={clientData?.lastname}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>

            {/* {userType === "client" && ( */}
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
                padding="2rem"
                label="Client Code"
                value={clientData?.company_id}
                onChange={(data) => {
                  const { company_id } = data;
                  handleChange({
                    name: "company_id",
                    value: company_id,
                  });
                }}

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
                name="phone"
                value={clientData?.phone}
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
                value={clientData?.email}
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
                  name="company_adrress"
                  value={clientData?.company_address}
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
                  label="Role"
                  Top="6.8rem"
                  padding="2rem"
                  value={clientData?.role}
                  // onChange={(event) => {
                  //   handleChange({
                  //     name: event.target.name,
                  //     value: event.target.value,
                  //   });
                  // }}
                  onChange={(data) => {
                    const { role } = data;
                    handleChange({
                      name: "role",
                      value: role,
                    });
                  }}

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
                  name="availability_threshold"
                  value={clientData?.availability_threshold}
                  onChange={(event) =>
                    handleChange({
                      name: event.target.name,
                      value: event.target.value,
                    })
                  }
                />
              </StyledDivFlex>
            )}

            <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
              Upload Image
            </StyledLabel>

            <ImageUpload name="avatar_file" onImageChange={handleChange} />

            <StyledDivFlex
              gap="1rem"
              marginTop="5rem"
              justifyContent="space-between"
            >
              <Link
                to={
                  userType === "admin"
                    ? "/user-management"
                    : "/client-management"
                }
                style={{ textDecoration: "none" }}
              >
                <StyledButton
                  padding="1.2rem 6.7rem"
                  fontSize="1.8rem"
                  background={Theme.colors.neutralColor4}
                  borderRadius="5rem"
                  fontWeight="500"
                  color={Theme.colors.neutralColor}
                  // onClick={() => <Link></Link>}
                  type="button"
                >
                  Cancel
                </StyledButton>
              </Link>

              <ButtonGroup
                padding="1.2rem 5.7rem"
                fontSize="1.8rem"
                spinnerHeight="1rem"
                spinnerWidth="1rem"
                background={Theme.colors.primaryColor}
                borderRadius="5rem"
                fontWeight="500"
                color={Theme.colors.neutralColor}
                isLoading={isLoading | isUserUpdating}
              >
                Update
              </ButtonGroup>
            </StyledDivFlex>
          </StyledDivFlex>
        </StyledDivFlex>
      </StyledForm>
    </StyledBox>
  );
};

export default EditClient;
