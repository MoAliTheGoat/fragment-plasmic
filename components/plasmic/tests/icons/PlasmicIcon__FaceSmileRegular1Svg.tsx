// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaceSmileRegular1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaceSmileRegular1SvgIcon(props: FaceSmileRegular1SvgIconProps) {
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
          "M464 256a208 208 0 10-416 0 208 208 0 10416 0zM0 256a256 256 0 11512 0 256 256 0 11-512 0zm177.6 62.1c15.2 16.4 41.2 33.9 78.4 33.9s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1164 0 32 32 0 11-64 0zm192-32a32 32 0 110 64 32 32 0 110-64z"
        }
      ></path>
    </svg>
  );
}

export default FaceSmileRegular1SvgIcon;
/* prettier-ignore-end */
