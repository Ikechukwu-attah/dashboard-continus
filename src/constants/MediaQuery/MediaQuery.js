import styled, { css } from "styled-components";
import { breakPoint } from "../breakPoints";

export const veryLargeDevice = css `
  @media (max-width: ${breakPoint.VeryLargeScreen}) {
    width: ${({ widthV }) => widthV};
    padding: ${({ paddingV }) => paddingV};
    margin: ${({ marginV }) => marginV};
    flex-direction: ${({ flexDirectionV }) => flexDirectionV};
    align-items: ${({ alignItemsV }) => alignItemsV};
    justify-content: ${({ justifyContentV }) => justifyContentV};
    min-width: ${({ minWidthV }) => minWidthV};
    display: ${({ displayV }) => displayV};
  }
`;

export const largeDevice = css `
  @media (max-width: ${breakPoint.largeScreen}) {
    width: ${({ widthL }) => widthL};
    padding: ${({ paddingL }) => paddingL};
    margin: ${({ marginL }) => marginL};
    flex-direction: ${({ flexDirectionL }) => flexDirectionL};
    align-items: ${({ alignItemsL }) => alignItemsL};
    justify-content: ${({ justifyContentL }) => justifyContentL};
    min-width: ${({ minWidthL }) => minWidthL};
    display: ${({ displayL }) => displayL};
    color: ${({ colorL }) => colorL};
    position: ${({ positionL }) => positionL};
    font-size: ${({ fontSizeL }) => fontSizeL};
    overflow: ${({ overFlowL }) => overFlowL};
  }
`;

export const mediumDevice = css `
  @media (max-width: ${breakPoint.mediumScreen}) {
    width: ${({ widthM }) => widthM};
    gap: ${({ gapM }) => gapM};
    padding: ${({ paddingM }) => paddingM};
    margin: ${({ marginM }) => marginM};
    flex-direction: ${({ flexDirectionM }) => flexDirectionM};
    align-items: ${({ alignItemsM }) => alignItemsM};
    justify-content: ${({ justifyContentM }) => justifyContentM};
    min-width: ${({ minWidthM }) => minWidthM};
    display: ${({ displayM }) => displayM};
    font-size: ${({ fontSizeM }) => fontSizeM};
    grid-column: ${({ gridColumnM }) => gridColumnM};
  }
`;

export const smallDevice = css `
  @media (max-width: ${breakPoint.smallScreen}) {
    width: ${({ widthS }) => widthS};
    height: ${({ heightS }) => heightS};
    padding: ${({ paddingS }) => paddingS};
    margin: ${({ marginS }) => marginS};
    flex-direction: ${({ flexDirectionS }) => flexDirectionS};
    align-items: ${({ alignItemsS }) => alignItemsS};
    justify-content: ${({ justifyContentS }) => justifyContentS};
    min-width: ${({ minWidthS }) => minWidthS};
    font-size: ${({ fontSizeS }) => fontSizeS};
    white-space: ${({ whiteSpaceS }) => whiteSpaceS};
    justify-content: ${({ justifyContentS }) => justifyContentS};
    gap: ${({ gapS }) => gapS};
    top: ${({ TopS }) => TopS};
    overflow-x: ${({ overFlowXS }) => overFlowXS};
    overflow-y: ${({ overFlowYS }) => overFlowYS};
  }
`;

export const smallestDevice = css `
  @media (max-width: ${breakPoint.smallestScreen}) {
    width: ${({ widthSd }) => widthSd};
    height: ${({ heightSd }) => heightSd};
    padding: ${({ paddingSd }) => paddingSd};
    line-height: ${(lineHeightSd) => lineHeightSd};
    margin: ${({ marginSd }) => marginSd};
    flex-direction: ${({ flexDirectionSd }) => flexDirectionSd};
    align-items: ${({ alignItemsSd }) => alignItemsSd};
    justify-content: ${({ justifyContentSd }) => justifyContentSd};
    min-width: ${({ minWidthSd }) => minWidthSd};
    font-size: ${({ fontSizeSd }) => fontSizeSd};
    white-space: ${({ whiteSpaceSd }) => whiteSpaceSd};
    justify-content: ${({ justifyContentSd }) => justifyContentSd};
    gap: ${({ gapSd }) => gapSd};
    top: ${({ TopSd }) => TopSd};
    overflow-x: ${({ overFlowXSd }) => overFlowXSd};
    overflow-y: ${({ overFlowYSd }) => overFlowYSd};
  }
`;