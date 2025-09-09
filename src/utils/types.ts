import en from './locales/en.json';

export type Messages = typeof en;

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5];

type Paths<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]-?: K extends string
          ? T[K] extends object
            ? Join<K, Paths<T[K], Prev[D]>>
            : K
          : never;
      }[keyof T]
    : '';

export type MessageKey = Paths<Messages>;
