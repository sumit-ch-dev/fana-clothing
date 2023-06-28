import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { UserData, AdditionalData } from "../../utils/firebase/firebase.utils";

export type checkUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type setCurrentUser = ActionWithPayload<
    USER_ACTION_TYPES.SET_CURRENT_USER,
    UserData | null
>;

export type googleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export const checkUserSession = withMatcher(
  (): checkUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export type emailSignInStart = ActionWithPayload<
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    {
        email: string;
        password: string;
    }
>;

export type signInSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    UserData
>;

export type signInFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_FAILED,
    Error
>;

export type signUpStart = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_START,
    {
        email: string;
        password: string;
        displayName: string;
    }
>;

export type signUpSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    {
        user: UserData;
        additionalData: AdditionalData;
    }
>;

export type signUpFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_FAILED,
    Error
>;

export type signOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type signOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type signOutFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_OUT_FAILED,
    Error
>;

export const setCurrentUser = withMatcher((user: UserData): setCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const googleSignInStart = withMatcher((): googleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withMatcher((email: string, password: string): emailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  }));

export const signInSuccess = withMatcher((user: UserData): signInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((error: Error): signInFailed =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = (email: string, password: string, displayName: string) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = withMatcher((user: UserData, additionalData: AdditionalData): signUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalData,
  }));

export const signUpFailed = withMatcher((error: Error): signUpFailed =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signOutStart = withMatcher((): signOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): signOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: Error): signOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));


