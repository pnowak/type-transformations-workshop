import { Equal, Expect } from "../helpers/type-utils";

// type MaybeError = Error | undefined; // We can't provide a default that doesn't match our constraint.
// So must be with ..| undefined;
// type CreateDataShape<TData, TError extends Error | undefined = undefined> = {
// type CreateDataShape<TData, TError extends MaybeError = undefined> = {
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string;
        error: undefined;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >,
];
