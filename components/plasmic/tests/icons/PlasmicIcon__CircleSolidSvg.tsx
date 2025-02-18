// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleSolidSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleSolidSvgIcon(props: CircleSolidSvgIconProps) {
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

      <path d={"M256 512a256 256 0 100-512 256 256 0 100 512z"}></path>
    </svg>
  );
}

export default CircleSolidSvgIcon;
/* prettier-ignore-end */
