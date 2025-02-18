// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fy2Wd7JJUEGBqb9w6rWnVF
// Component: fDBcVoWbGgMw

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: fy2Wd7JJUEGBqb9w6rWnVF/projectcss
import sty from "./PlasmicScoreCardContainer.module.css"; // plasmic-import: fDBcVoWbGgMw/css

import FaceFrownRegular1SvgIcon from "./icons/PlasmicIcon__FaceFrownRegular1Svg"; // plasmic-import: JRheyVWzHC4V/icon
import FaceSmileRegular1SvgIcon from "./icons/PlasmicIcon__FaceSmileRegular1Svg"; // plasmic-import: xAxs3sX5qHJj/icon

createPlasmicElementProxy;

export type PlasmicScoreCardContainer__VariantMembers = {};
export type PlasmicScoreCardContainer__VariantsArgs = {};
type VariantPropType = keyof PlasmicScoreCardContainer__VariantsArgs;
export const PlasmicScoreCardContainer__VariantProps =
  new Array<VariantPropType>();

export type PlasmicScoreCardContainer__ArgsType = {
  point?: number;
  questionText?: string;
  answerText?: string;
};
type ArgPropType = keyof PlasmicScoreCardContainer__ArgsType;
export const PlasmicScoreCardContainer__ArgProps = new Array<ArgPropType>(
  "point",
  "questionText",
  "answerText"
);

export type PlasmicScoreCardContainer__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultScoreCardContainerProps {
  point?: number;
  questionText?: string;
  answerText?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicScoreCardContainer__RenderFunc(props: {
  variants: PlasmicScoreCardContainer__VariantsArgs;
  args: PlasmicScoreCardContainer__ArgsType;
  overrides: PlasmicScoreCardContainer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___64Gs2)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pugNc)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ieemW
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.point;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "-2";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          {(() => {
            try {
              return $props.point < 0;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <FaceFrownRegular1SvgIcon
              className={classNames(projectcss.all, sty.svg__bacun)}
              role={"img"}
            />
          ) : null}
          {(() => {
            try {
              return $props.point > 0;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <FaceSmileRegular1SvgIcon
              className={classNames(projectcss.all, sty.svg__w7BsS)}
              role={"img"}
            />
          ) : null}
        </Stack__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xyX74
          )}
        >
          {""}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zdZyk
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.questionText;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "\u0622\u06cc\u0627 \u062f\u0631 \u0641\u0627\u0645\u06cc\u0644 \u062f\u0631\u062c\u0647\u200c\u06cc\u06a9 \u0634\u0645\u0627\u060c \u0633\u0627\u0628\u0642\u0647\n\u0633\u0631\u0637\u0627\u0646 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0627\u0633\u062a\u061f";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__dlJ2T)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__byKg
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.answerText;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "\u0628\u0644\u0647";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__hY4WV
          )}
        >
          {":\u062c\u0648\u0627\u0628 \u0634\u0645\u0627"}
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicScoreCardContainer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicScoreCardContainer__VariantsArgs;
    args?: PlasmicScoreCardContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicScoreCardContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicScoreCardContainer__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicScoreCardContainer__ArgProps,
          internalVariantPropNames: PlasmicScoreCardContainer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicScoreCardContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicScoreCardContainer";
  } else {
    func.displayName = `PlasmicScoreCardContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicScoreCardContainer = Object.assign(
  // Top-level PlasmicScoreCardContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicScoreCardContainer
    internalVariantProps: PlasmicScoreCardContainer__VariantProps,
    internalArgProps: PlasmicScoreCardContainer__ArgProps
  }
);

export default PlasmicScoreCardContainer;
/* prettier-ignore-end */
