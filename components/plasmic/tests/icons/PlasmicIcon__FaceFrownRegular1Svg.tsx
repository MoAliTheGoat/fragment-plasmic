// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaceFrownRegular1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaceFrownRegular1SvgIcon(props: FaceFrownRegular1SvgIconProps) {
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
          "M464 256a208 208 0 10-416 0 208 208 0 10416 0zM0 256a256 256 0 11512 0 256 256 0 11-512 0zm174.6 128.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4c-9.3-25.7-40.3-48.2-81.5-48.2s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1164 0 32 32 0 11-64 0zm192-32a32 32 0 110 64 32 32 0 110-64z"
        }
      ></path>
    </svg>
  );
}

export default FaceFrownRegular1SvgIcon;
/* prettier-ignore-end */
