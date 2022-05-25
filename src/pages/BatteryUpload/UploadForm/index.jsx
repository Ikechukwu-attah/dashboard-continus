import React, { useContext, useEffect, useState } from "react";
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
import { useUploadBattery } from "../hooks/useUploadBattery";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BatteryUploadForm = () => {
  const { data, uploadBatteryData, isLoading, error } = useUploadBattery();
  const navigate = useNavigate();
  const [batteryData, setBatteryData] = useState();
  const { setPageName, isAdmin } = useContext(globalContext);
  const [fileName, setFileName] = useState();

  const customId2 = "custom-id-now";
  const customId3 = "custom-id-error";

  const handleChange = ({ name, value }) => {
    setBatteryData({ ...batteryData, [name]: value });
  };

  const uploadCSV = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    // console.log("csv file", base64);
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

  const successToast = () => {
    toast.success("File Successfully Uploaded", {
      toastId: customId2,
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorToast = () => {
    toast.error("File Not Uploaded", {
      toastId: customId3,
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const uploadData = {
      ...batteryData,
    };
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
    uploadBatteryData(uploadData, redirect, onError);
    // setFileName("");
  };

  return (
    <StyledBox
      padding="2.5rem 8rem"
      minHeight="max-content"
      background={Theme.colors.neutralColor}
      marginTop="3rem"
      width="100%"
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
          gap="20rem"
          width="95%"
          justifyContent="space-between"
          padding="3rem 0rem 1.2rem 0rem"
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
                name="truck"
                value={batteryData?.truck}
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
                Truck Chasis Number
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder=" Truck Chasis Number"
                padding="2.3rem"
                fontSize="2.3rem"
                name="truck_chasis_number"
                value={batteryData?.truck_chasis_number}
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
                Driver
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Driver"
                padding="2.3rem"
                fontSize="2.3rem"
                name="driver"
                value={batteryData?.driver}
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
                Login/Logout
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Login/Logout"
                padding="2.3rem"
                fontSize="2.3rem"
                name="login_logout"
                value={batteryData?.login_logout}
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
                Event
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Event"
                padding="2.3rem"
                fontSize="2.3rem"
                name="event"
                value={batteryData?.event}
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
                Value
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="value"
                padding="2.3rem"
                fontSize="2.3rem"
                name="value"
                value={batteryData?.value}
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
                Time
              </StyledLabel>
              <StyledInput
                type="text"
                placeholder="Time"
                padding="2.3rem"
                fontSize="2.3rem"
                name="time"
                value={batteryData?.time}
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
              htmlFor="csv"
              padding="4rem"
              border="1px dashed #027351"
            >
              {fileName ? fileName : " Upload battery management here"}
            </StyledLabel>
            <StyledInput
              type="file"
              id="csv"
              style={{ display: "none" }}
              placeholder="Time"
              padding="2.3rem"
              fontSize="2.3rem"
              width="100%"
              name="file"
              // value={batteryData?.file}
              onChange={async (event) => {
                console.log("mekus");
                const file = event.target.files[0];
                setFileName(file.name);
                console.log("finename", file.name);
                const base64 = await convertBase64(file);
                // console.log("mekus");
                handleChange({
                  name: event.target.name,
                  value: base64,
                });

                // uploadCSV(event);
              }}
            />

            {/* <ImageUpload name="avatar_file" onImageChange={handleChange} /> */}

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
                onClick={() => {
                  navigate("/client-management");
                }}
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
                isLoading={isLoading}
              >
                Submit
              </ButtonGroup>
              {/* {data && successToast()} */}
            </StyledDivFlex>
          </StyledDivFlex>
        </StyledDivFlex>
      </StyledForm>

      <ToastContainer draggable={false} transition={Zoom} autoClose={3000} />
    </StyledBox>
  );
};

export default BatteryUploadForm;
