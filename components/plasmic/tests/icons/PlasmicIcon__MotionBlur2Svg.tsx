// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MotionBlur2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MotionBlur2SvgIcon(props: MotionBlur2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 200 200"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"15"}
        r={"15"}
        cx={"35"}
        cy={"100"}
      >
        <animate
          attributeName={"cx"}
          calcMode={"spline"}
          dur={"2"}
          values={"35;165;165;35;35"}
          keySplines={"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"}
          repeatCount={"indefinite"}
          begin={"0"}
        ></animate>
      </circle>

      <circle
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"15"}
        opacity={".8"}
        r={"15"}
        cx={"35"}
        cy={"100"}
      >
        <animate
          attributeName={"cx"}
          calcMode={"spline"}
          dur={"2"}
          values={"35;165;165;35;35"}
          keySplines={"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"}
          repeatCount={"indefinite"}
          begin={".05"}
        ></animate>
      </circle>

      <circle
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"15"}
        opacity={".6"}
        r={"15"}
        cx={"35"}
        cy={"100"}
      >
        <animate
          attributeName={"cx"}
          calcMode={"spline"}
          dur={"2"}
          values={"35;165;165;35;35"}
          keySplines={"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"}
          repeatCount={"indefinite"}
          begin={".1"}
        ></animate>
      </circle>

      <circle
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"15"}
        opacity={".4"}
        r={"15"}
        cx={"35"}
        cy={"100"}
      >
        <animate
          attributeName={"cx"}
          calcMode={"spline"}
          dur={"2"}
          values={"35;165;165;35;35"}
          keySplines={"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"}
          repeatCount={"indefinite"}
          begin={".15"}
        ></animate>
      </circle>

      <circle
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"15"}
        opacity={".2"}
        r={"15"}
        cx={"35"}
        cy={"100"}
      >
        <animate
          attributeName={"cx"}
          calcMode={"spline"}
          dur={"2"}
          values={"35;165;165;35;35"}
          keySplines={"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"}
          repeatCount={"indefinite"}
          begin={".2"}
        ></animate>
      </circle>
    </svg>
  );
}

export default MotionBlur2SvgIcon;
/* prettier-ignore-end */
