import { Equal, Expect } from "../helpers/type-utils";

type Maybe<T> = T | null | undefined;
type MaybeAny = Maybe<any>; // Any destroys this whole union

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>, // null will get collapsed, because if there's two unions at the same type or two union members of the same type, and they get squashed together.
];
