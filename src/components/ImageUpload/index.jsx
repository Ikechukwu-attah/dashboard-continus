import React, { useState } from "react";
import { css } from "styled-components";
import { Theme } from "../../Theme";
import { StyledDivFlex } from "../common/Basics/DivFlex";
import { StyledText } from "../common/Basics/StyledText";
import { StyledInput, StyledLabel } from "../common/Input";

const ImageUpload = ({ name, value, onImageChange }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = (event) => {
    const file = event.target.files[0];

    const objectUrl = URL.createObjectURL(file);
    setImgUrl(objectUrl);

    if (!file) {
      console.log("image is required");
      return setErrorMessage("Valid image is required");
    }

    if (!file.name.match(/\.(jpg|jpeg|png|gif|PNG)$/)) {
      return setErrorMessage("Valid image is required");
    }
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      // this is the base64 data
      const fileRes = reader && window.btoa(reader.result);
      const imageString = `data:image/jpg;base64,${fileRes}`;
      onImageChange({
        name,
        value: imageString,
      });
    };

    reader.onerror = () => {
      console.log("There is a problem while uploading...");
    };

    setErrorMessage("");
  };

  const displayImageCover = css`
    & > div#img-cover {
      display: flex;
    }
  `;

  return (
    <>
      <StyledLabel htmlFor="file">
        <StyledDivFlex
          width="20.8rem"
          height="13.9rem"
          // background={Theme.colors.primaryColor}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          background={Theme.colors.neutralColor3}
          border="1px dashed rgba(2, 115, 81, 0.5)"
          backgroundImage={`url(${
            imgUrl || `${process.env.REACT_APP_BASE_URL}/${value}`
          })`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          position="relative"
          onHover={displayImageCover}
        >
          <StyledText
            color={Theme.colors.primaryColor}
            cursor="pointer"
            fontSize="1.8rem"
          >
            {!imgUrl && "Upload Image ..."}
          </StyledText>
          {imgUrl && (
            <StyledDivFlex
              position="absolute"
              background={Theme.colors.neutralColor2}
              Top="0"
              Bottom="0"
              Left="0"
              Right="0"
              justifyContent="center"
              alignItems="center"
              opacity="0.5"
              id="img-cover"
              display="none"
            >
              <StyledText>Edit</StyledText>
            </StyledDivFlex>
          )}
        </StyledDivFlex>
      </StyledLabel>

      <StyledInput
        type="file"
        id="file"
        // required
        accept=".png,.gif,.svg, .jpg, .jpeg, .jfif, .pjpeg, .pjp,.webp"
        padding="2.3rem"
        fontSize="2.3rem"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <StyledText color="red">{errorMessage}</StyledText>
    </>
  );
};

export default ImageUpload;
