// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fy2Wd7JJUEGBqb9w6rWnVF
// Component: NS5HItibdY0W

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

import Landing from "../../Landing"; // plasmic-import: WpQt0yXXwjjF/component
import Questions from "../../Questions"; // plasmic-import: El_QD23x2som/component
import QuestionsFullPage from "../../QuestionsFullPage"; // plasmic-import: h_LHLO-dBT7q/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: fy2Wd7JJUEGBqb9w6rWnVF/projectcss
import sty from "./PlasmicSelectTestPage.module.css"; // plasmic-import: NS5HItibdY0W/css

createPlasmicElementProxy;

export type PlasmicSelectTestPage__VariantMembers = {};
export type PlasmicSelectTestPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicSelectTestPage__VariantsArgs;
export const PlasmicSelectTestPage__VariantProps = new Array<VariantPropType>();

export type PlasmicSelectTestPage__ArgsType = {
  userId?: string;
  userName?: string;
};
type ArgPropType = keyof PlasmicSelectTestPage__ArgsType;
export const PlasmicSelectTestPage__ArgProps = new Array<ArgPropType>(
  "userId",
  "userName"
);

export type PlasmicSelectTestPage__OverridesType = {
  root?: Flex__<"div">;
  landing?: Flex__<typeof Landing>;
  questions?: Flex__<typeof Questions>;
  questionsFullPage?: Flex__<typeof QuestionsFullPage>;
};

export interface DefaultSelectTestPageProps {
  userId?: string;
  userName?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelectTestPage__RenderFunc(props: {
  variants: PlasmicSelectTestPage__VariantsArgs;
  args: PlasmicSelectTestPage__ArgsType;
  overrides: PlasmicSelectTestPage__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "questions.currentQuestion",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "questions.showResults",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "landing.selectedTestId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.selectedTestId;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 0;
              }
              throw e;
            }
          })()
      },
      {
        path: "selectedTestId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      },
      {
        path: "questionsFullPage.selectedTestId",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.landing.selectedTestId;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return 0;
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
      {(() => {
        try {
          return $state.landing.selectedTestId == 0;
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
        <Landing
          data-plasmic-name={"landing"}
          data-plasmic-override={overrides.landing}
          className={classNames("__wab_instance", sty.landing)}
          onSelectedTestIdChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, [
              "landing",
              "selectedTestId"
            ]).apply(null, eventArgs);

            if (
              eventArgs.length > 1 &&
              eventArgs[1] &&
              eventArgs[1]._plasmic_state_init_
            ) {
              return;
            }
          }}
          selectedTestId={generateStateValueProp($state, [
            "landing",
            "selectedTestId"
          ])}
          userId={(() => {
            try {
              return $props.userId;
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
          userName={(() => {
            try {
              return $props.userName;
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
      ) : null}
      {(() => {
        try {
          return !$state.landing.selectedTestId == 0;
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
        <Questions
          data-plasmic-name={"questions"}
          data-plasmic-override={overrides.questions}
          className={classNames("__wab_instance", sty.questions)}
          onCurrentQuestionChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, [
              "questions",
              "currentQuestion"
            ]).apply(null, eventArgs);

            if (
              eventArgs.length > 1 &&
              eventArgs[1] &&
              eventArgs[1]._plasmic_state_init_
            ) {
              return;
            }
          }}
          onShowResultsChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, [
              "questions",
              "showResults"
            ]).apply(null, eventArgs);

            if (
              eventArgs.length > 1 &&
              eventArgs[1] &&
              eventArgs[1]._plasmic_state_init_
            ) {
              return;
            }
          }}
          testId={(() => {
            try {
              return $state.landing.selectedTestId;
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
          userId={(() => {
            try {
              return $props.userId;
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
      ) : null}
      {false ? (
        <QuestionsFullPage
          data-plasmic-name={"questionsFullPage"}
          data-plasmic-override={overrides.questionsFullPage}
          className={classNames("__wab_instance", sty.questionsFullPage)}
          onSelectedTestIdChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, [
              "questionsFullPage",
              "selectedTestId"
            ]).apply(null, eventArgs);

            if (
              eventArgs.length > 1 &&
              eventArgs[1] &&
              eventArgs[1]._plasmic_state_init_
            ) {
              return;
            }
          }}
          selectedTestId={generateStateValueProp($state, [
            "questionsFullPage",
            "selectedTestId"
          ])}
          testId={(() => {
            try {
              return $state.landing.selectedTestId;
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
          userId={(() => {
            try {
              return $props.userId;
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
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "landing", "questions", "questionsFullPage"],
  landing: ["landing"],
  questions: ["questions"],
  questionsFullPage: ["questionsFullPage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  landing: typeof Landing;
  questions: typeof Questions;
  questionsFullPage: typeof QuestionsFullPage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelectTestPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelectTestPage__VariantsArgs;
    args?: PlasmicSelectTestPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelectTestPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelectTestPage__ArgsType,
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
          internalArgPropNames: PlasmicSelectTestPage__ArgProps,
          internalVariantPropNames: PlasmicSelectTestPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelectTestPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelectTestPage";
  } else {
    func.displayName = `PlasmicSelectTestPage.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectTestPage = Object.assign(
  // Top-level PlasmicSelectTestPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    landing: makeNodeComponent("landing"),
    questions: makeNodeComponent("questions"),
    questionsFullPage: makeNodeComponent("questionsFullPage"),

    // Metadata about props expected for PlasmicSelectTestPage
    internalVariantProps: PlasmicSelectTestPage__VariantProps,
    internalArgProps: PlasmicSelectTestPage__ArgProps
  }
);

export default PlasmicSelectTestPage;
/* prettier-ignore-end */
