import React, { FC } from "react";
import { buttonProps } from "../../../../types/buttonProps123";

const ItemButton: FC<buttonProps> = ({
  nameClassDiv,
  nameClassText,
  onClick,
}) => {
  return (
    <div className={nameClassDiv} onClick={onClick}>
      <svg width="259" height="50" viewBox="0 0 259 50" fill="none">
        <path
          d="M16 7.5V1H243V7.5V16.25V16.8244L243.496 17.1138L257.015 25L243.496 32.8862L243 33.1756V33.75V42.5V49H16V42.5V33.75V33.1756L15.5039 32.8862L1.98463 25L15.5039 17.1138L16 16.8244V16.25V7.5Z"
          fill="#EEEEEE"
          stroke="#BB8C5F"
          stroke-width="2"
        />
        <text x="42" y="30" className={nameClassText}>
          Добавить в корзину
        </text>
      </svg>
    </div>
  );
};

export default ItemButton;
