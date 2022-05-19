import React from "react";
import { StyledDashboardContentWrapper } from "../../../components/common/Basics/DashboardContentWrapper";
import { StyledDivFlex } from "../../../components/common/Basics/DivFlex";
import { StyledButton } from "../../../components/common/Button/style";
import { StyledForm } from "../../../components/common/Form/style";
import { StyledInput, StyledLabel } from "../../../components/common/Input";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import PageHeaderLayout from "../../../components/Layouts/HeaderLayout";
import { Theme } from "../../../Theme";

const UploadData = () => {
  return (
    <DashboardLayout>
      <StyledDashboardContentWrapper>
        <PageHeaderLayout></PageHeaderLayout>
        <StyledDivFlex
          padding="5rem 8rem"
          background="#fff"
          marginTop="10rem"
          justifyContent="center"
          alignItem="center"
        >
          <StyledForm>
            <StyledDivFlex flexDirection="column">
              <StyledLabel
                htmlFor="file"
                fontSize="2.8rem"
                color={Theme.colors.neutralColor2}
                border={`1px ${Theme.colors.primaryColor} solid`}
                padding="2rem"
                cursor="pointer"
              >
                Choose File to Upload
              </StyledLabel>
              <StyledInput
                type="file"
                placeholder="Upload CSV File"
                // value=""
                // onChange=""
                // required
                // padding="2.3rem"
                fontSize="2.3rem"
                name="upload-data"
                id="file"
                style={{ display: "none" }}
              />

              <StyledButton
                marginTop="2rem"
                padding="1rem"
                fontSize="2rem"
                background={Theme.colors.primaryColor}
                color={Theme.colors.neutralColor}
              >
                Upload
              </StyledButton>
            </StyledDivFlex>
          </StyledForm>
        </StyledDivFlex>

        {/* forms comes in here */}
      </StyledDashboardContentWrapper>
    </DashboardLayout>
  );
};

export default UploadData;
