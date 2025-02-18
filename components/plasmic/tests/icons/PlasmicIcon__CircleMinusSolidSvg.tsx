// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleMinusSolidSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleMinusSolidSvgIcon(props: CircleMinusSolidSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 512a256 256 0 100-512 256 256 0 100 512zm-72-280h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
        }
      ></path>
    </svg>
  );
}

export default CircleMinusSolidSvgIcon;
/* prettier-ignore-end */
