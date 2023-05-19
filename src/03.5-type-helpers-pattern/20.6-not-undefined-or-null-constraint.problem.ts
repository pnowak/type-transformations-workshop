type PrimitiveWithoutNullish = string | number | boolean | symbol | bigint;
export type Maybe<T extends PrimitiveWithoutNullish> = T | null | undefined;

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
