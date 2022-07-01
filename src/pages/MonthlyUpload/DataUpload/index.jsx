import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBox } from "../../../components/common/Basics/DivBox";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledText } from "../../../components/common/Basics/StyledText";
import ButtonGroup from "../../../components/common/Button";
import { StyledButton } from "../../../components/common/Button/style";
import { StyledForm } from "../../../components/common/Form/style";
import { StyledInput, StyledLabel } from "../../../components/common/Input";
import { globalContext } from "../../../Context/GlobalContext";
import { Theme } from "../../../Theme";
import { useUploadMonthlyAvailability } from "../hooks/useUploadMonthlyAvailability";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MonthlyAvailabilityUpload = () => {
  const { data, error, isLoading, uploadMonthlyAvailability } =
    useUploadMonthlyAvailability();
  const [dataUpload, setDataUpload] = useState();
  const { setPageName, isAdmin } = useContext(globalContext);
  const [fileName, setFileName] = useState();

  const customId3 = "custom-id-no";
  const customId2 = "custom-id-error";

  const uploadCSV = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    // console.log("csv file", base64);
    return;
  };

  const successToast = () => {
    toast.success("File Successfully Uploaded", {
      toastId: customId3,
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorToast = () => {
    toast.error("File Not Uploaded", {
      toastId: customId2,
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const navigate = useNavigate();

  const handleChange = ({ name, value }) => {
    setDataUpload({ ...dataUpload, [name]: value });
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { ...dataUpload };
   
    const redirect = () => {
      successToast();

      setTimeout(() => {
        navigate("/client-management");
        setPageName("Client Management");
      }, 2000);
    };

    const onError = () => {
      errorToast();
    };

    uploadMonthlyAvailability(data, redirect, onError);
  };
  return (
    <StyledBox
      padding="2.5rem 8rem"
      minHeight="max-content"
      background={Theme.colors.neutralColor}
      marginTop="3rem"
      width="100%"
      paddingS="1rem"
    >
      <StyledText
        fontSize="2.4rem"
        color={Theme.colors.neutralColor2}
        style={{ padding: "5rem 0rem" }}
      >
        {/* Add user now */}
      </StyledText>
      <StyledForm onSubmit={handleSubmit}>
        <StyledDivFlex
          gap="15rem"
          // width="100%"
          justifyContent="space-between"
          padding="3rem 0rem 1.2rem 0rem"
          flexDirectionM="column"
          gapM="2rem"
        >
          <StyledDivFlex left="1" flexDirection="column" flex="1" gap="2rem">
            <StyledDivFlex flexDirection="column">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Truck
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Truck"
                padding="2.3rem"
                fontSize="2.3rem"
                fontSizeS="1.5rem"
                paddingS="2rem"
                name="Truck"
                value={dataUpload?.Truck}
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
                Day
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder=" Day"
                padding="2.3rem"
                fontSize="2.3rem"
                fontSizeS="1.5rem"
                paddingS="2rem"
                name="Day"
                value={dataUpload?.Day}
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
                Location
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Location"
                padding="2.3rem"
                fontSize="2.3rem"
                fontSizeS="1.5rem"
                paddingS="2rem"
                name="Location"
                value={dataUpload?.Location}
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
                Hours
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Hours"
                padding="2.3rem"
                fontSize="2.3rem"
                fontSizeS="1.5rem"
                paddingS="2rem"
                name="Hours"
                value={dataUpload?.Hours}
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
                Availability
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Availablity"
                padding="2.3rem"
                fontSize="2.3rem"
                fontSizeS="1.5rem"
                paddingS="2rem"
                name="Availablity"
                value={dataUpload?.Availablity}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>
          </StyledDivFlex>
          <StyledDivFlex
            right="1"
            flexDirection="column"
            gap="2rem"
            flex="1"
            // width="100%"
          >
            <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Days
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Days"
                padding="2.3rem"
                fontSize="2.3rem"
                fontSizeS="1.5rem"
                paddingS="2rem"
                name="Days"
                value={dataUpload?.Days}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>

            <StyledDivFlex flexDirection="column" gap="1rem">
              <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
                Expected Hours
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Time"
                padding="2.3rem"
                fontSize="2.3rem"
                fontSizeS="1.5rem"
                paddingS="2rem"
                name="Expected Hours"
                value={dataUpload?.expected_hours}
                onChange={(event) =>
                  handleChange({
                    name: event.target.name,
                    value: event.target.value,
                  })
                }
              />
            </StyledDivFlex>

            <StyledLabel fontSize="1.8rem" color={Theme.colors.neutralColor2}>
              Upload File
            </StyledLabel>

            <StyledLabel
              fontSize="1.8rem"
              color={Theme.colors.neutralColor2}
              htmlFor="monthly"
              padding="4rem"
              fontSizeS="1.5rem"
              paddingS="2rem"
              border="1px dashed #027351"
            >
              {fileName ? fileName : " Upload monthly availability here"}
            </StyledLabel>

            <StyledInput
              type="file"
              placeholder="Time"
              padding="2.3rem"
              fontSize="2.3rem"
              fontSizeS="1.5rem"
              paddingS="2rem"
              style={{ display: "none" }}
              id="monthly"
              width="100%"
              name="file"
              // value={dataUpload?.file}
              onChange={async (event) => {
              
                const file = event.target.files[0];
                setFileName(file.name);
                const base64 = await convertBase64(file);
              
                handleChange({
                  name: event.target.name,
                  value: base64,
                });

                // uploadCSV(event);
              }}
            />

            <StyledDivFlex
              gap="1rem"
              marginTop="5rem"
              justifyContent="space-between"
            >
              <StyledButton
                padding="1.2rem 6.7rem"
                fontSize="1.8rem"
                fontSizeS="1.5rem"
                paddingS="1rem 4rem"
                background={Theme.colors.neutralColor4}
                borderRadius="5rem"
                fontWeight="500"
                color={Theme.colors.neutralColor}
                onClick={() => navigate("/client-management")}
              >
                Cancel
              </StyledButton>

              <ButtonGroup
                padding="1.2rem 5.7rem"
                fontSize="1.8rem"
                fontSizeS="1.5rem"
                paddingS="1rem 4rem"
                spinnerHeight="1rem"
                spinnerWidth="1rem"
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
      <ToastContainer draggable={false} transition={Zoom} autoClose={3000} />
    </StyledBox>
  );
};

export default MonthlyAvailabilityUpload;
