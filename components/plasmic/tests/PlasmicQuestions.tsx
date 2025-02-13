// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fy2Wd7JJUEGBqb9w6rWnVF
// Component: El_QD23x2som

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

import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: 25Vs_9R29fZY/codeComponent
import QuestionContainer from "../../QuestionContainer"; // plasmic-import: dUNsHrAjueyS/component
import PreviousQuestionButton from "../../PreviousQuestionButton"; // plasmic-import: vgie_seeuj1v/component
import ShowResult from "../../ShowResult"; // plasmic-import: arB8QBSjXWbu/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: fy2Wd7JJUEGBqb9w6rWnVF/projectcss
import sty from "./PlasmicQuestions.module.css"; // plasmic-import: El_QD23x2som/css

import MotionBlur2SvgIcon from "./icons/PlasmicIcon__MotionBlur2Svg"; // plasmic-import: U318mCBIhz8C/icon

createPlasmicElementProxy;

export type PlasmicQuestions__VariantMembers = {};
export type PlasmicQuestions__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuestions__VariantsArgs;
export const PlasmicQuestions__VariantProps = new Array<VariantPropType>();

export type PlasmicQuestions__ArgsType = {
  onCurrentQuestionChange?: (val: string) => void;
  userId?: string;
  onShowResultsChange?: (val: string) => void;
  testId?: number;
};
type ArgPropType = keyof PlasmicQuestions__ArgsType;
export const PlasmicQuestions__ArgProps = new Array<ArgPropType>(
  "onCurrentQuestionChange",
  "userId",
  "onShowResultsChange",
  "testId"
);

export type PlasmicQuestions__OverridesType = {
  root?: Flex__<"div">;
  apiRequest?: Flex__<typeof ApiRequest>;
  questionContainer?: Flex__<typeof QuestionContainer>;
  previousQuestionButton?: Flex__<typeof PreviousQuestionButton>;
  apiRequest2?: Flex__<typeof ApiRequest>;
  showResult?: Flex__<typeof ShowResult>;
};

export interface DefaultQuestionsProps {
  onCurrentQuestionChange?: (val: string) => void;
  userId?: string;
  onShowResultsChange?: (val: string) => void;
  testId?: number;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQuestions__RenderFunc(props: {
  variants: PlasmicQuestions__VariantsArgs;
  args: PlasmicQuestions__ArgsType;
  overrides: PlasmicQuestions__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "currentQuestion",
        type: "readonly",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        onChangeProp: "onCurrentQuestionChange"
      },
      {
        path: "showResults",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        onChangeProp: "onShowResultsChange"
      },
      {
        path: "apiRequest.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequest.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequest.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequest2.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequest2.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequest2.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "questions",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.apiRequest.data;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
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
      <ApiRequest
        data-plasmic-name={"apiRequest"}
        data-plasmic-override={overrides.apiRequest}
        className={classNames("__wab_instance", sty.apiRequest)}
        errorDisplay={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__olr0G
            )}
          >
            {"Error fetching data"}
          </div>
        }
        loadingDisplay={
          <MotionBlur2SvgIcon
            className={classNames(projectcss.all, sty.svg___0V6Lu)}
            role={"img"}
          />
        }
        method={"GET"}
        onError={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["apiRequest", "error"]).apply(
            null,
            eventArgs
          );
        }}
        onLoading={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["apiRequest", "loading"]).apply(
            null,
            eventArgs
          );
        }}
        onSuccess={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["apiRequest", "data"]).apply(
            null,
            eventArgs
          );
        }}
        url={(() => {
          try {
            return `https://n8n-doctorjan.darkube.app/webhook/v1/tests?id=${$props.testId}`;
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
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__y34Bm)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hs3Y
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $state.currentQuestion + "/" + $state.questions.length;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "1/30";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oeLd)}
          >
            {(() => {
              try {
                return !$state.showResults;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
              ? (_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return [$state.questions[$state.currentQuestion]];
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()
                ).map((__plasmic_item_0, __plasmic_idx_0) => {
                  const currentItem = __plasmic_item_0;
                  const currentIndex = __plasmic_idx_0;
                  return (
                    <QuestionContainer
                      data-plasmic-name={"questionContainer"}
                      data-plasmic-override={overrides.questionContainer}
                      answerNo={(() => {
                        try {
                          return currentItem.answers[1].answer_text;
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
                      answerYes={(() => {
                        try {
                          return currentItem.answers[0].answer_text;
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
                      className={classNames(
                        "__wab_instance",
                        sty.questionContainer
                      )}
                      key={currentIndex}
                      onClickNo={async () => {
                        const $steps = {};

                        $steps["updateCurrentQuestion"] =
                          $state.currentQuestion < $state.questions.length
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["currentQuestion"]
                                  },
                                  operation: 2
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  const oldValue = $stateGet(
                                    objRoot,
                                    variablePath
                                  );
                                  $stateSet(
                                    objRoot,
                                    variablePath,
                                    oldValue + 1
                                  );
                                  return oldValue + 1;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                        if (
                          $steps["updateCurrentQuestion"] != null &&
                          typeof $steps["updateCurrentQuestion"] === "object" &&
                          typeof $steps["updateCurrentQuestion"].then ===
                            "function"
                        ) {
                          $steps["updateCurrentQuestion"] = await $steps[
                            "updateCurrentQuestion"
                          ];
                        }

                        $steps["updateCurrentQuestion2"] =
                          $state.currentQuestion === $state.questions.length
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["showResults"]
                                  },
                                  operation: 0,
                                  value: true
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
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
                          $steps["updateCurrentQuestion2"] != null &&
                          typeof $steps["updateCurrentQuestion2"] ===
                            "object" &&
                          typeof $steps["updateCurrentQuestion2"].then ===
                            "function"
                        ) {
                          $steps["updateCurrentQuestion2"] = await $steps[
                            "updateCurrentQuestion2"
                          ];
                        }

                        $steps["updateCurrentQuestion3"] = true
                          ? (() => {
                              const actionArgs = {
                                args: [
                                  "POST",
                                  "https://n8n-doctorjan.darkube.app/webhook/v1/submitScore",
                                  undefined,
                                  (() => {
                                    try {
                                      return {
                                        userId: $props.userId,
                                        test_id: $props.testId,
                                        question_id: currentItem.question_id,
                                        answer_id:
                                          currentItem.answers[1].answer_id
                                      };
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()
                                ]
                              };
                              return $globalActions[
                                "Fragment.apiRequest"
                              ]?.apply(null, [...actionArgs.args]);
                            })()
                          : undefined;
                        if (
                          $steps["updateCurrentQuestion3"] != null &&
                          typeof $steps["updateCurrentQuestion3"] ===
                            "object" &&
                          typeof $steps["updateCurrentQuestion3"].then ===
                            "function"
                        ) {
                          $steps["updateCurrentQuestion3"] = await $steps[
                            "updateCurrentQuestion3"
                          ];
                        }
                      }}
                      onClickYes={async () => {
                        const $steps = {};

                        $steps["updateCurrentQuestion"] =
                          $state.currentQuestion < $state.questions.length
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["currentQuestion"]
                                  },
                                  operation: 2
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  const oldValue = $stateGet(
                                    objRoot,
                                    variablePath
                                  );
                                  $stateSet(
                                    objRoot,
                                    variablePath,
                                    oldValue + 1
                                  );
                                  return oldValue + 1;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                        if (
                          $steps["updateCurrentQuestion"] != null &&
                          typeof $steps["updateCurrentQuestion"] === "object" &&
                          typeof $steps["updateCurrentQuestion"].then ===
                            "function"
                        ) {
                          $steps["updateCurrentQuestion"] = await $steps[
                            "updateCurrentQuestion"
                          ];
                        }

                        $steps["updateCurrentQuestion2"] =
                          $state.currentQuestion === $state.questions.length
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["showResults"]
                                  },
                                  operation: 0,
                                  value: true
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
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
                          $steps["updateCurrentQuestion2"] != null &&
                          typeof $steps["updateCurrentQuestion2"] ===
                            "object" &&
                          typeof $steps["updateCurrentQuestion2"].then ===
                            "function"
                        ) {
                          $steps["updateCurrentQuestion2"] = await $steps[
                            "updateCurrentQuestion2"
                          ];
                        }

                        $steps["updateCurrentQuestion3"] = true
                          ? (() => {
                              const actionArgs = {
                                args: [
                                  "POST",
                                  "https://n8n-doctorjan.darkube.app/webhook/v1/submitScore",
                                  undefined,
                                  (() => {
                                    try {
                                      return {
                                        userId: $props.userId,
                                        test_id: $props.testId,
                                        question_id: currentItem.question_id,
                                        answer_id:
                                          currentItem.answers[0].answer_id
                                      };
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()
                                ]
                              };
                              return $globalActions[
                                "Fragment.apiRequest"
                              ]?.apply(null, [...actionArgs.args]);
                            })()
                          : undefined;
                        if (
                          $steps["updateCurrentQuestion3"] != null &&
                          typeof $steps["updateCurrentQuestion3"] ===
                            "object" &&
                          typeof $steps["updateCurrentQuestion3"].then ===
                            "function"
                        ) {
                          $steps["updateCurrentQuestion3"] = await $steps[
                            "updateCurrentQuestion3"
                          ];
                        }
                      }}
                      question={(() => {
                        try {
                          return currentItem.question_text;
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
                  );
                })
              : null}
            {(() => {
              try {
                return !$state.showResults && !$state.currentQuestion == 0;
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
              <PreviousQuestionButton
                data-plasmic-name={"previousQuestionButton"}
                data-plasmic-override={overrides.previousQuestionButton}
                className={classNames(
                  "__wab_instance",
                  sty.previousQuestionButton
                )}
                onClick={async () => {
                  const $steps = {};

                  $steps["updateCurrentQuestion"] =
                    $state.currentQuestion > 0
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["currentQuestion"]
                            },
                            operation: 3
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            const oldValue = $stateGet(objRoot, variablePath);
                            $stateSet(objRoot, variablePath, oldValue - 1);
                            return oldValue - 1;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                  if (
                    $steps["updateCurrentQuestion"] != null &&
                    typeof $steps["updateCurrentQuestion"] === "object" &&
                    typeof $steps["updateCurrentQuestion"].then === "function"
                  ) {
                    $steps["updateCurrentQuestion"] = await $steps[
                      "updateCurrentQuestion"
                    ];
                  }
                }}
              />
            ) : null}
          </Stack__>
          {(() => {
            try {
              return !!$state.showResults;
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
            <ApiRequest
              data-plasmic-name={"apiRequest2"}
              data-plasmic-override={overrides.apiRequest2}
              className={classNames("__wab_instance", sty.apiRequest2)}
              errorDisplay={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___8Tu59
                  )}
                >
                  {"Error fetching data"}
                </div>
              }
              loadingDisplay={
                <div
                  className={classNames(projectcss.all, sty.freeBox___9DTNz)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hn6Hq
                    )}
                  >
                    {
                      "\u0628\u0630\u0627\u0631 \u0628\u0628\u06cc\u0646\u06cc\u0645 \u0628\u0647\u062a \u0627\u0645\u06cc\u062f\u06cc \u0647\u0633\u062a\u061f"
                    }
                  </div>
                  <MotionBlur2SvgIcon
                    className={classNames(projectcss.all, sty.svg__eClXc)}
                    role={"img"}
                  />
                </div>
              }
              method={"GET"}
              onError={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "apiRequest2",
                  "error"
                ]).apply(null, eventArgs);
              }}
              onLoading={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "apiRequest2",
                  "loading"
                ]).apply(null, eventArgs);
              }}
              onSuccess={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "apiRequest2",
                  "data"
                ]).apply(null, eventArgs);
              }}
              url={(() => {
                try {
                  return `https://n8n-doctorjan.darkube.app/webhook/v1/scores?id=${$props.userId}&testId=${$props.testId}`;
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
            >
              {(() => {
                try {
                  return (
                    !!$state.showResults &&
                    !!$state.apiRequest2.data[0]?.finalScore &&
                    $state.apiRequest2.data[0].currentCount ==
                      $state.apiRequest2.data[0].actualCount
                  );
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
                <ShowResult
                  data-plasmic-name={"showResult"}
                  data-plasmic-override={overrides.showResult}
                  className={classNames("__wab_instance", sty.showResult)}
                  score={(() => {
                    try {
                      return $state.apiRequest2.data[0].finalScore;
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
            </ApiRequest>
          ) : null}
        </Stack__>
      </ApiRequest>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "apiRequest",
    "questionContainer",
    "previousQuestionButton",
    "apiRequest2",
    "showResult"
  ],
  apiRequest: [
    "apiRequest",
    "questionContainer",
    "previousQuestionButton",
    "apiRequest2",
    "showResult"
  ],
  questionContainer: ["questionContainer"],
  previousQuestionButton: ["previousQuestionButton"],
  apiRequest2: ["apiRequest2", "showResult"],
  showResult: ["showResult"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  apiRequest: typeof ApiRequest;
  questionContainer: typeof QuestionContainer;
  previousQuestionButton: typeof PreviousQuestionButton;
  apiRequest2: typeof ApiRequest;
  showResult: typeof ShowResult;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuestions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuestions__VariantsArgs;
    args?: PlasmicQuestions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuestions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQuestions__ArgsType,
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
          internalArgPropNames: PlasmicQuestions__ArgProps,
          internalVariantPropNames: PlasmicQuestions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuestions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuestions";
  } else {
    func.displayName = `PlasmicQuestions.${nodeName}`;
  }
  return func;
}

export const PlasmicQuestions = Object.assign(
  // Top-level PlasmicQuestions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    apiRequest: makeNodeComponent("apiRequest"),
    questionContainer: makeNodeComponent("questionContainer"),
    previousQuestionButton: makeNodeComponent("previousQuestionButton"),
    apiRequest2: makeNodeComponent("apiRequest2"),
    showResult: makeNodeComponent("showResult"),

    // Metadata about props expected for PlasmicQuestions
    internalVariantProps: PlasmicQuestions__VariantProps,
    internalArgProps: PlasmicQuestions__ArgProps
  }
);

export default PlasmicQuestions;
/* prettier-ignore-end */
