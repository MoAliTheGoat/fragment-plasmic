// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fy2Wd7JJUEGBqb9w6rWnVF
// Component: 0gav2D2th5XT

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

import ShowResult from "../../ShowResult"; // plasmic-import: arB8QBSjXWbu/component
import ScoreCardContainer from "../../ScoreCardContainer"; // plasmic-import: fDBcVoWbGgMw/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: fy2Wd7JJUEGBqb9w6rWnVF/projectcss
import sty from "./PlasmicScoreCard.module.css"; // plasmic-import: 0gav2D2th5XT/css

createPlasmicElementProxy;

export type PlasmicScoreCard__VariantMembers = {};
export type PlasmicScoreCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicScoreCard__VariantsArgs;
export const PlasmicScoreCard__VariantProps = new Array<VariantPropType>();

export type PlasmicScoreCard__ArgsType = {
  testId?: number;
  userId?: string;
  score?: number;
  point?: number;
  questionText?: string;
  answerText?: string;
};
type ArgPropType = keyof PlasmicScoreCard__ArgsType;
export const PlasmicScoreCard__ArgProps = new Array<ArgPropType>(
  "testId",
  "userId",
  "score",
  "point",
  "questionText",
  "answerText"
);

export type PlasmicScoreCard__OverridesType = {
  root?: Flex__<"div">;
  showResult?: Flex__<typeof ShowResult>;
  text?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  scoreCardContainer?: Flex__<typeof ScoreCardContainer>;
};

export interface DefaultScoreCardProps {
  testId?: number;
  userId?: string;
  score?: number;
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

function PlasmicScoreCard__RenderFunc(props: {
  variants: PlasmicScoreCard__VariantsArgs;
  args: PlasmicScoreCard__ArgsType;
  overrides: PlasmicScoreCard__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <ShowResult
        data-plasmic-name={"showResult"}
        data-plasmic-override={overrides.showResult}
        className={classNames("__wab_instance", sty.showResult)}
        score={(() => {
          try {
            return $props.score;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {""}
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <ScoreCardContainer
          data-plasmic-name={"scoreCardContainer"}
          data-plasmic-override={overrides.scoreCardContainer}
          answerText={(() => {
            try {
              return $props.answerText;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          className={classNames("__wab_instance", sty.scoreCardContainer)}
          point={(() => {
            try {
              return $props.point;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          questionText={(() => {
            try {
              return $props.questionText;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "showResult", "text", "freeBox", "scoreCardContainer"],
  showResult: ["showResult"],
  text: ["text"],
  freeBox: ["freeBox", "scoreCardContainer"],
  scoreCardContainer: ["scoreCardContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  showResult: typeof ShowResult;
  text: "div";
  freeBox: "div";
  scoreCardContainer: typeof ScoreCardContainer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicScoreCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicScoreCard__VariantsArgs;
    args?: PlasmicScoreCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicScoreCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicScoreCard__ArgsType,
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
          internalArgPropNames: PlasmicScoreCard__ArgProps,
          internalVariantPropNames: PlasmicScoreCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicScoreCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicScoreCard";
  } else {
    func.displayName = `PlasmicScoreCard.${nodeName}`;
  }
  return func;
}

export const PlasmicScoreCard = Object.assign(
  // Top-level PlasmicScoreCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    showResult: makeNodeComponent("showResult"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    scoreCardContainer: makeNodeComponent("scoreCardContainer"),

    // Metadata about props expected for PlasmicScoreCard
    internalVariantProps: PlasmicScoreCard__VariantProps,
    internalArgProps: PlasmicScoreCard__ArgProps
  }
);

export default PlasmicScoreCard;
/* prettier-ignore-end */
