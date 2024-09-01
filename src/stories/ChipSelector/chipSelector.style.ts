import styled, { css } from "styled-components";

export const StyledChipSelector = styled.button<{
  $selected: boolean;
  $description: boolean;
  $label: boolean;
}>`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  text-align: left;
  line-height: 20px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #f0f1f6;
  display: flex;
  position: relative;

  ${(props) => {
    if (props.$description && props.$label) {
      return css`
        font-weight: 700;
        flex-direction: column;
        padding: 8px 12px;
        min-width: 172px;
        max-width: 336px;
      `;
    }
    if (!props.$label && props.$description) {
      return css`
        font-weight: 400;
        padding: 8px 52px 8px 12px;
      `;
    }
    if (props.$label) {
      return css`
        font-weight: 400;
        padding: 12px;
        min-width: 172px;
        max-width: 336px;
      `;
    }
  }}

  ${(props) =>
    props.$selected
      ? css`
          background-color: #f0f1f6;
          color: #53545e;
          font-weight: 700;
        `
      : css`
          background-color: white;
          color: #15161a;
        `}

  &:hover:enabled {
    background-color: #f0f1f6;
    color: #53545e;
  }
  &:disabled {
    cursor: not-allowed;
    color: #b0b2bc;
  }
  &:focus-visible {
    outline: 2px solid #a46df8;
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    width: 0px;
    height: 0px;
    border-style: solid;
    ${(props) =>
      props.$label
        ? css`
            border-width: 0 36px 36px 0;
          `
        : css`
            border-width: 0 50px 50px 0;
          `}
    border-color: transparent #8540ef transparent transparent;
    transform: rotate(0deg);
    border-top-right-radius: 4px;
  }
  p {
    margin: 0px;
    font-weight: 400;
    overflow: auto;
    ${(props) =>
      !!props.$label &&
      css`
        max-width: 336px;
        width: calc(100% - 36px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
  }
`;
