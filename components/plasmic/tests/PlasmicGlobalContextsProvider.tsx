// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fy2Wd7JJUEGBqb9w6rWnVF

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { EmbedCss } from "@plasmicpkgs/plasmic-embed-css";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: 8B9geO4eq2b6/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: YVo92HV0DNDV/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: gGifMJjbj50h/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  embedCssProps?: Partial<
    Omit<React.ComponentProps<typeof EmbedCss>, "children">
  >;

  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;

  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;

  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    embedCssProps,
    fragmentProps,
    growthBookProps,
    splunkProps
  } = props;

  return (
    <EmbedCss
      {...embedCssProps}
      css={
        embedCssProps && "css" in embedCssProps
          ? embedCssProps.css!
          : "@font-face {\n  font-family: 'DanaBlack';\n  src: url('https://site-assets.plasmic.app/db68fbf4dd134681f703b077ea227afd.ttf');\n}\n\n@font-face {\n  font-family: 'DanaMedium';\n  src: url('https://site-assets.plasmic.app/82abca3cbd2d19c236a673f85778ac78.ttf');\n}\n\n@font-face {\n  font-family: 'DanaLight';\n  src: url('https://site-assets.plasmic.app/a50fc4365bc5f3b9a160e707f9f1a2b4.ttf');\n}\n\n@font-face {\n  font-family: 'DanaBold';\n  src: url('https://site-assets.plasmic.app/87d824745e8855753d71bf9637a45891.ttf');\n}\n\n@font-face {\n  font-family: 'IranSansXRegular';\n  src: url('https://site-assets.plasmic.app/32e900508cd1f6220303f167f032df1f.ttf');\n}\n\n@font-face {\n  font-family: 'IranSansXBold';\n  src: url('https://site-assets.plasmic.app/f3942a4d1852bd1e5c557c0d2f1c9e53.ttf');\n}"
      }
    >
      <Fragment
        {...fragmentProps}
        apiConfig={
          fragmentProps && "apiConfig" in fragmentProps
            ? fragmentProps.apiConfig!
            : undefined
        }
        previewApiConfig={
          fragmentProps && "previewApiConfig" in fragmentProps
            ? fragmentProps.previewApiConfig!
            : undefined
        }
        primaryColor={
          fragmentProps && "primaryColor" in fragmentProps
            ? fragmentProps.primaryColor!
            : "#000000"
        }
        rtl={
          fragmentProps && "rtl" in fragmentProps
            ? fragmentProps.rtl!
            : undefined
        }
      >
        <GrowthBook
          {...growthBookProps}
          apiHost={
            growthBookProps && "apiHost" in growthBookProps
              ? growthBookProps.apiHost!
              : undefined
          }
          clientKey={
            growthBookProps && "clientKey" in growthBookProps
              ? growthBookProps.clientKey!
              : undefined
          }
          previewAttributes={
            growthBookProps && "previewAttributes" in growthBookProps
              ? growthBookProps.previewAttributes!
              : undefined
          }
        >
          <Splunk
            {...splunkProps}
            defaultApiHost={
              splunkProps && "defaultApiHost" in splunkProps
                ? splunkProps.defaultApiHost!
                : undefined
            }
            defaultApiKey={
              splunkProps && "defaultApiKey" in splunkProps
                ? splunkProps.defaultApiKey!
                : undefined
            }
          >
            {children}
          </Splunk>
        </GrowthBook>
      </Fragment>
    </EmbedCss>
  );
}
