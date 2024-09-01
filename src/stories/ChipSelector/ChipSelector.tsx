import React from "react";
import { StyledChipSelector } from "./chipSelector.style";

export interface ChipSelectProps {
  label?: string;
  description?: string | JSX.Element;
  selected: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ChipSelector = ({
  label,
  description,
  selected,
  ...props
}: ChipSelectProps) => {
  return (
    <StyledChipSelector
      type="button"
      {...props}
      $selected={selected}
      $description={!!description}
      $label={!!label}
    >
      {label && label}
      {description && <p>{description}</p>}
      {selected && <span aria-label="triangule component place holder" />}
    </StyledChipSelector>
  );
};
