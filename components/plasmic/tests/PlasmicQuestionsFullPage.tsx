// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fy2Wd7JJUEGBqb9w6rWnVF
// Component: h_LHLO-dBT7q

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

import BackButton from "../../BackButton"; // plasmic-import: MC3MUkg-XcCg/component
import Questions from "../../Questions"; // plasmic-import: El_QD23x2som/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: fy2Wd7JJUEGBqb9w6rWnVF/projectcss
import sty from "./PlasmicQuestionsFullPage.module.css"; // plasmic-import: h_LHLO-dBT7q/css

createPlasmicElementProxy;

export type PlasmicQuestionsFullPage__VariantMembers = {};
export type PlasmicQuestionsFullPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuestionsFullPage__VariantsArgs;
export const PlasmicQuestionsFullPage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicQuestionsFullPage__ArgsType = {
  testId?: number;
  userId?: string;
  selectedTestId?: number;
  onSelectedTestIdChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicQuestionsFullPage__ArgsType;
export const PlasmicQuestionsFullPage__ArgProps = new Array<ArgPropType>(
  "testId",
  "userId",
  "selectedTestId",
  "onSelectedTestIdChange"
);

export type PlasmicQuestionsFullPage__OverridesType = {
  root?: Flex__<"div">;
  backButton?: Flex__<typeof BackButton>;
  questions?: Flex__<typeof Questions>;
};

export interface DefaultQuestionsFullPageProps {
  testId?: number;
  userId?: string;
  selectedTestId?: number;
  onSelectedTestIdChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQuestionsFullPage__RenderFunc(props: {
  variants: PlasmicQuestionsFullPage__VariantsArgs;
  args: PlasmicQuestionsFullPage__ArgsType;
  overrides: PlasmicQuestionsFullPage__OverridesType;
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
        path: "selectedTestId",
        type: "writable",
        variableType: "number",

        valueProp: "selectedTestId",
        onChangeProp: "onSelectedTestIdChange"
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
      <div className={classNames(projectcss.all, sty.freeBox__m0AB1)}>
        <div className={classNames(projectcss.all, sty.freeBox__l7Frn)}>
          <BackButton
            data-plasmic-name={"backButton"}
            data-plasmic-override={overrides.backButton}
            className={classNames("__wab_instance", sty.backButton)}
            onClick={async () => {
              const $steps = {};

              $steps["updateSelectedTestId"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["selectedTestId"]
                      },
                      operation: 0,
                      value: 0
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateSelectedTestId"] != null &&
                typeof $steps["updateSelectedTestId"] === "object" &&
                typeof $steps["updateSelectedTestId"].then === "function"
              ) {
                $steps["updateSelectedTestId"] = await $steps[
                  "updateSelectedTestId"
                ];
              }
            }}
          />

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
                return $props.testId;
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
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "backButton", "questions"],
  backButton: ["backButton"],
  questions: ["questions"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  backButton: typeof BackButton;
  questions: typeof Questions;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuestionsFullPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuestionsFullPage__VariantsArgs;
    args?: PlasmicQuestionsFullPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuestionsFullPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQuestionsFullPage__ArgsType,
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
          internalArgPropNames: PlasmicQuestionsFullPage__ArgProps,
          internalVariantPropNames: PlasmicQuestionsFullPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuestionsFullPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuestionsFullPage";
  } else {
    func.displayName = `PlasmicQuestionsFullPage.${nodeName}`;
  }
  return func;
}

export const PlasmicQuestionsFullPage = Object.assign(
  // Top-level PlasmicQuestionsFullPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    backButton: makeNodeComponent("backButton"),
    questions: makeNodeComponent("questions"),

    // Metadata about props expected for PlasmicQuestionsFullPage
    internalVariantProps: PlasmicQuestionsFullPage__VariantProps,
    internalArgProps: PlasmicQuestionsFullPage__ArgProps
  }
);

export default PlasmicQuestionsFullPage;
/* prettier-ignore-end */
