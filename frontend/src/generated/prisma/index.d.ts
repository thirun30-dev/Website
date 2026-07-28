
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>
/**
 * Model HackathonRegistration
 * 
 */
export type HackathonRegistration = $Result.DefaultSelection<Prisma.$HackathonRegistrationPayload>
/**
 * Model SponsorEnquiry
 * 
 */
export type SponsorEnquiry = $Result.DefaultSelection<Prisma.$SponsorEnquiryPayload>
/**
 * Model SpeakerProposal
 * 
 */
export type SpeakerProposal = $Result.DefaultSelection<Prisma.$SpeakerProposalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Registrations
 * const registrations = await prisma.registration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Registrations
   * const registrations = await prisma.registration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hackathonRegistration`: Exposes CRUD operations for the **HackathonRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HackathonRegistrations
    * const hackathonRegistrations = await prisma.hackathonRegistration.findMany()
    * ```
    */
  get hackathonRegistration(): Prisma.HackathonRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sponsorEnquiry`: Exposes CRUD operations for the **SponsorEnquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SponsorEnquiries
    * const sponsorEnquiries = await prisma.sponsorEnquiry.findMany()
    * ```
    */
  get sponsorEnquiry(): Prisma.SponsorEnquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.speakerProposal`: Exposes CRUD operations for the **SpeakerProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeakerProposals
    * const speakerProposals = await prisma.speakerProposal.findMany()
    * ```
    */
  get speakerProposal(): Prisma.SpeakerProposalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Registration: 'Registration',
    HackathonRegistration: 'HackathonRegistration',
    SponsorEnquiry: 'SponsorEnquiry',
    SpeakerProposal: 'SpeakerProposal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "registration" | "hackathonRegistration" | "sponsorEnquiry" | "speakerProposal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
          }
        }
      }
      HackathonRegistration: {
        payload: Prisma.$HackathonRegistrationPayload<ExtArgs>
        fields: Prisma.HackathonRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HackathonRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HackathonRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          findFirst: {
            args: Prisma.HackathonRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HackathonRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          findMany: {
            args: Prisma.HackathonRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>[]
          }
          create: {
            args: Prisma.HackathonRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          createMany: {
            args: Prisma.HackathonRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HackathonRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>[]
          }
          delete: {
            args: Prisma.HackathonRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          update: {
            args: Prisma.HackathonRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.HackathonRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HackathonRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HackathonRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.HackathonRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          aggregate: {
            args: Prisma.HackathonRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHackathonRegistration>
          }
          groupBy: {
            args: Prisma.HackathonRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<HackathonRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HackathonRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<HackathonRegistrationCountAggregateOutputType> | number
          }
        }
      }
      SponsorEnquiry: {
        payload: Prisma.$SponsorEnquiryPayload<ExtArgs>
        fields: Prisma.SponsorEnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SponsorEnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SponsorEnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>
          }
          findFirst: {
            args: Prisma.SponsorEnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SponsorEnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>
          }
          findMany: {
            args: Prisma.SponsorEnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>[]
          }
          create: {
            args: Prisma.SponsorEnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>
          }
          createMany: {
            args: Prisma.SponsorEnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SponsorEnquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>[]
          }
          delete: {
            args: Prisma.SponsorEnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>
          }
          update: {
            args: Prisma.SponsorEnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>
          }
          deleteMany: {
            args: Prisma.SponsorEnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SponsorEnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SponsorEnquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>[]
          }
          upsert: {
            args: Prisma.SponsorEnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorEnquiryPayload>
          }
          aggregate: {
            args: Prisma.SponsorEnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSponsorEnquiry>
          }
          groupBy: {
            args: Prisma.SponsorEnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SponsorEnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SponsorEnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<SponsorEnquiryCountAggregateOutputType> | number
          }
        }
      }
      SpeakerProposal: {
        payload: Prisma.$SpeakerProposalPayload<ExtArgs>
        fields: Prisma.SpeakerProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeakerProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeakerProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>
          }
          findFirst: {
            args: Prisma.SpeakerProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeakerProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>
          }
          findMany: {
            args: Prisma.SpeakerProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>[]
          }
          create: {
            args: Prisma.SpeakerProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>
          }
          createMany: {
            args: Prisma.SpeakerProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeakerProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>[]
          }
          delete: {
            args: Prisma.SpeakerProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>
          }
          update: {
            args: Prisma.SpeakerProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>
          }
          deleteMany: {
            args: Prisma.SpeakerProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeakerProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpeakerProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>[]
          }
          upsert: {
            args: Prisma.SpeakerProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeakerProposalPayload>
          }
          aggregate: {
            args: Prisma.SpeakerProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeakerProposal>
          }
          groupBy: {
            args: Prisma.SpeakerProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeakerProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeakerProposalCountArgs<ExtArgs>
            result: $Utils.Optional<SpeakerProposalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    registration?: RegistrationOmit
    hackathonRegistration?: HackathonRegistrationOmit
    sponsorEnquiry?: SponsorEnquiryOmit
    speakerProposal?: SpeakerProposalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationAvgAggregateOutputType = {
    id: number | null
  }

  export type RegistrationSumAggregateOutputType = {
    id: number | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    organization: string | null
    designation: string | null
    city: string | null
    address: string | null
    avatar: string | null
    createdAt: Date | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    organization: string | null
    designation: string | null
    city: string | null
    address: string | null
    avatar: string | null
    createdAt: Date | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    organization: number
    designation: number
    city: number
    address: number
    avatar: number
    createdAt: number
    _all: number
  }


  export type RegistrationAvgAggregateInputType = {
    id?: true
  }

  export type RegistrationSumAggregateInputType = {
    id?: true
  }

  export type RegistrationMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    designation?: true
    city?: true
    address?: true
    avatar?: true
    createdAt?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    designation?: true
    city?: true
    address?: true
    avatar?: true
    createdAt?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    organization?: true
    designation?: true
    city?: true
    address?: true
    avatar?: true
    createdAt?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _avg?: RegistrationAvgAggregateInputType
    _sum?: RegistrationSumAggregateInputType
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: number
    fullName: string
    email: string
    phone: string
    organization: string
    designation: string
    city: string
    address: string
    avatar: string
    createdAt: Date
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    address?: boolean
    avatar?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    address?: boolean
    avatar?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    address?: boolean
    avatar?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    address?: boolean
    avatar?: boolean
    createdAt?: boolean
  }

  export type RegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "organization" | "designation" | "city" | "address" | "avatar" | "createdAt", ExtArgs["result"]["registration"]>

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      phone: string
      organization: string
      designation: string
      city: string
      address: string
      avatar: string
      createdAt: Date
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registrations and returns the data saved in the database.
     * @param {RegistrationCreateManyAndReturnArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registrations and only return the `id`
     * const registrationWithIdOnly = await prisma.registration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations and returns the data updated in the database.
     * @param {RegistrationUpdateManyAndReturnArgs} args - Arguments to update many Registrations.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registrations and only return the `id`
     * const registrationWithIdOnly = await prisma.registration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registration model
   */
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'Int'>
    readonly fullName: FieldRef<"Registration", 'String'>
    readonly email: FieldRef<"Registration", 'String'>
    readonly phone: FieldRef<"Registration", 'String'>
    readonly organization: FieldRef<"Registration", 'String'>
    readonly designation: FieldRef<"Registration", 'String'>
    readonly city: FieldRef<"Registration", 'String'>
    readonly address: FieldRef<"Registration", 'String'>
    readonly avatar: FieldRef<"Registration", 'String'>
    readonly createdAt: FieldRef<"Registration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration createManyAndReturn
   */
  export type RegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registration updateManyAndReturn
   */
  export type RegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to delete.
     */
    limit?: number
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
  }


  /**
   * Model HackathonRegistration
   */

  export type AggregateHackathonRegistration = {
    _count: HackathonRegistrationCountAggregateOutputType | null
    _avg: HackathonRegistrationAvgAggregateOutputType | null
    _sum: HackathonRegistrationSumAggregateOutputType | null
    _min: HackathonRegistrationMinAggregateOutputType | null
    _max: HackathonRegistrationMaxAggregateOutputType | null
  }

  export type HackathonRegistrationAvgAggregateOutputType = {
    id: number | null
  }

  export type HackathonRegistrationSumAggregateOutputType = {
    id: number | null
  }

  export type HackathonRegistrationMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    college: string | null
    team: string | null
    domain: string | null
    size: string | null
    createdAt: Date | null
  }

  export type HackathonRegistrationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    college: string | null
    team: string | null
    domain: string | null
    size: string | null
    createdAt: Date | null
  }

  export type HackathonRegistrationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    college: number
    team: number
    domain: number
    size: number
    createdAt: number
    _all: number
  }


  export type HackathonRegistrationAvgAggregateInputType = {
    id?: true
  }

  export type HackathonRegistrationSumAggregateInputType = {
    id?: true
  }

  export type HackathonRegistrationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    college?: true
    team?: true
    domain?: true
    size?: true
    createdAt?: true
  }

  export type HackathonRegistrationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    college?: true
    team?: true
    domain?: true
    size?: true
    createdAt?: true
  }

  export type HackathonRegistrationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    college?: true
    team?: true
    domain?: true
    size?: true
    createdAt?: true
    _all?: true
  }

  export type HackathonRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HackathonRegistration to aggregate.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HackathonRegistrations
    **/
    _count?: true | HackathonRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HackathonRegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HackathonRegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HackathonRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HackathonRegistrationMaxAggregateInputType
  }

  export type GetHackathonRegistrationAggregateType<T extends HackathonRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateHackathonRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHackathonRegistration[P]>
      : GetScalarType<T[P], AggregateHackathonRegistration[P]>
  }




  export type HackathonRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonRegistrationWhereInput
    orderBy?: HackathonRegistrationOrderByWithAggregationInput | HackathonRegistrationOrderByWithAggregationInput[]
    by: HackathonRegistrationScalarFieldEnum[] | HackathonRegistrationScalarFieldEnum
    having?: HackathonRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HackathonRegistrationCountAggregateInputType | true
    _avg?: HackathonRegistrationAvgAggregateInputType
    _sum?: HackathonRegistrationSumAggregateInputType
    _min?: HackathonRegistrationMinAggregateInputType
    _max?: HackathonRegistrationMaxAggregateInputType
  }

  export type HackathonRegistrationGroupByOutputType = {
    id: number
    name: string
    email: string
    college: string
    team: string
    domain: string
    size: string
    createdAt: Date
    _count: HackathonRegistrationCountAggregateOutputType | null
    _avg: HackathonRegistrationAvgAggregateOutputType | null
    _sum: HackathonRegistrationSumAggregateOutputType | null
    _min: HackathonRegistrationMinAggregateOutputType | null
    _max: HackathonRegistrationMaxAggregateOutputType | null
  }

  type GetHackathonRegistrationGroupByPayload<T extends HackathonRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HackathonRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HackathonRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HackathonRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], HackathonRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type HackathonRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hackathonRegistration"]>

  export type HackathonRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hackathonRegistration"]>

  export type HackathonRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hackathonRegistration"]>

  export type HackathonRegistrationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    createdAt?: boolean
  }

  export type HackathonRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "college" | "team" | "domain" | "size" | "createdAt", ExtArgs["result"]["hackathonRegistration"]>

  export type $HackathonRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HackathonRegistration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      college: string
      team: string
      domain: string
      size: string
      createdAt: Date
    }, ExtArgs["result"]["hackathonRegistration"]>
    composites: {}
  }

  type HackathonRegistrationGetPayload<S extends boolean | null | undefined | HackathonRegistrationDefaultArgs> = $Result.GetResult<Prisma.$HackathonRegistrationPayload, S>

  type HackathonRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HackathonRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HackathonRegistrationCountAggregateInputType | true
    }

  export interface HackathonRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HackathonRegistration'], meta: { name: 'HackathonRegistration' } }
    /**
     * Find zero or one HackathonRegistration that matches the filter.
     * @param {HackathonRegistrationFindUniqueArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HackathonRegistrationFindUniqueArgs>(args: SelectSubset<T, HackathonRegistrationFindUniqueArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HackathonRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HackathonRegistrationFindUniqueOrThrowArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HackathonRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, HackathonRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HackathonRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationFindFirstArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HackathonRegistrationFindFirstArgs>(args?: SelectSubset<T, HackathonRegistrationFindFirstArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HackathonRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationFindFirstOrThrowArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HackathonRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, HackathonRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HackathonRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HackathonRegistrations
     * const hackathonRegistrations = await prisma.hackathonRegistration.findMany()
     * 
     * // Get first 10 HackathonRegistrations
     * const hackathonRegistrations = await prisma.hackathonRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hackathonRegistrationWithIdOnly = await prisma.hackathonRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HackathonRegistrationFindManyArgs>(args?: SelectSubset<T, HackathonRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HackathonRegistration.
     * @param {HackathonRegistrationCreateArgs} args - Arguments to create a HackathonRegistration.
     * @example
     * // Create one HackathonRegistration
     * const HackathonRegistration = await prisma.hackathonRegistration.create({
     *   data: {
     *     // ... data to create a HackathonRegistration
     *   }
     * })
     * 
     */
    create<T extends HackathonRegistrationCreateArgs>(args: SelectSubset<T, HackathonRegistrationCreateArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HackathonRegistrations.
     * @param {HackathonRegistrationCreateManyArgs} args - Arguments to create many HackathonRegistrations.
     * @example
     * // Create many HackathonRegistrations
     * const hackathonRegistration = await prisma.hackathonRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HackathonRegistrationCreateManyArgs>(args?: SelectSubset<T, HackathonRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HackathonRegistrations and returns the data saved in the database.
     * @param {HackathonRegistrationCreateManyAndReturnArgs} args - Arguments to create many HackathonRegistrations.
     * @example
     * // Create many HackathonRegistrations
     * const hackathonRegistration = await prisma.hackathonRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HackathonRegistrations and only return the `id`
     * const hackathonRegistrationWithIdOnly = await prisma.hackathonRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HackathonRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, HackathonRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HackathonRegistration.
     * @param {HackathonRegistrationDeleteArgs} args - Arguments to delete one HackathonRegistration.
     * @example
     * // Delete one HackathonRegistration
     * const HackathonRegistration = await prisma.hackathonRegistration.delete({
     *   where: {
     *     // ... filter to delete one HackathonRegistration
     *   }
     * })
     * 
     */
    delete<T extends HackathonRegistrationDeleteArgs>(args: SelectSubset<T, HackathonRegistrationDeleteArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HackathonRegistration.
     * @param {HackathonRegistrationUpdateArgs} args - Arguments to update one HackathonRegistration.
     * @example
     * // Update one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HackathonRegistrationUpdateArgs>(args: SelectSubset<T, HackathonRegistrationUpdateArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HackathonRegistrations.
     * @param {HackathonRegistrationDeleteManyArgs} args - Arguments to filter HackathonRegistrations to delete.
     * @example
     * // Delete a few HackathonRegistrations
     * const { count } = await prisma.hackathonRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HackathonRegistrationDeleteManyArgs>(args?: SelectSubset<T, HackathonRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HackathonRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HackathonRegistrations
     * const hackathonRegistration = await prisma.hackathonRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HackathonRegistrationUpdateManyArgs>(args: SelectSubset<T, HackathonRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HackathonRegistrations and returns the data updated in the database.
     * @param {HackathonRegistrationUpdateManyAndReturnArgs} args - Arguments to update many HackathonRegistrations.
     * @example
     * // Update many HackathonRegistrations
     * const hackathonRegistration = await prisma.hackathonRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HackathonRegistrations and only return the `id`
     * const hackathonRegistrationWithIdOnly = await prisma.hackathonRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HackathonRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, HackathonRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HackathonRegistration.
     * @param {HackathonRegistrationUpsertArgs} args - Arguments to update or create a HackathonRegistration.
     * @example
     * // Update or create a HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.upsert({
     *   create: {
     *     // ... data to create a HackathonRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HackathonRegistration we want to update
     *   }
     * })
     */
    upsert<T extends HackathonRegistrationUpsertArgs>(args: SelectSubset<T, HackathonRegistrationUpsertArgs<ExtArgs>>): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HackathonRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationCountArgs} args - Arguments to filter HackathonRegistrations to count.
     * @example
     * // Count the number of HackathonRegistrations
     * const count = await prisma.hackathonRegistration.count({
     *   where: {
     *     // ... the filter for the HackathonRegistrations we want to count
     *   }
     * })
    **/
    count<T extends HackathonRegistrationCountArgs>(
      args?: Subset<T, HackathonRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HackathonRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HackathonRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HackathonRegistrationAggregateArgs>(args: Subset<T, HackathonRegistrationAggregateArgs>): Prisma.PrismaPromise<GetHackathonRegistrationAggregateType<T>>

    /**
     * Group by HackathonRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HackathonRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HackathonRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: HackathonRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HackathonRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHackathonRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HackathonRegistration model
   */
  readonly fields: HackathonRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HackathonRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HackathonRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HackathonRegistration model
   */
  interface HackathonRegistrationFieldRefs {
    readonly id: FieldRef<"HackathonRegistration", 'Int'>
    readonly name: FieldRef<"HackathonRegistration", 'String'>
    readonly email: FieldRef<"HackathonRegistration", 'String'>
    readonly college: FieldRef<"HackathonRegistration", 'String'>
    readonly team: FieldRef<"HackathonRegistration", 'String'>
    readonly domain: FieldRef<"HackathonRegistration", 'String'>
    readonly size: FieldRef<"HackathonRegistration", 'String'>
    readonly createdAt: FieldRef<"HackathonRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HackathonRegistration findUnique
   */
  export type HackathonRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where: HackathonRegistrationWhereUniqueInput
  }

  /**
   * HackathonRegistration findUniqueOrThrow
   */
  export type HackathonRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where: HackathonRegistrationWhereUniqueInput
  }

  /**
   * HackathonRegistration findFirst
   */
  export type HackathonRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HackathonRegistrations.
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HackathonRegistrations.
     */
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }

  /**
   * HackathonRegistration findFirstOrThrow
   */
  export type HackathonRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HackathonRegistrations.
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HackathonRegistrations.
     */
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }

  /**
   * HackathonRegistration findMany
   */
  export type HackathonRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * Filter, which HackathonRegistrations to fetch.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HackathonRegistrations.
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }

  /**
   * HackathonRegistration create
   */
  export type HackathonRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * The data needed to create a HackathonRegistration.
     */
    data: XOR<HackathonRegistrationCreateInput, HackathonRegistrationUncheckedCreateInput>
  }

  /**
   * HackathonRegistration createMany
   */
  export type HackathonRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HackathonRegistrations.
     */
    data: HackathonRegistrationCreateManyInput | HackathonRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HackathonRegistration createManyAndReturn
   */
  export type HackathonRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many HackathonRegistrations.
     */
    data: HackathonRegistrationCreateManyInput | HackathonRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HackathonRegistration update
   */
  export type HackathonRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * The data needed to update a HackathonRegistration.
     */
    data: XOR<HackathonRegistrationUpdateInput, HackathonRegistrationUncheckedUpdateInput>
    /**
     * Choose, which HackathonRegistration to update.
     */
    where: HackathonRegistrationWhereUniqueInput
  }

  /**
   * HackathonRegistration updateMany
   */
  export type HackathonRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HackathonRegistrations.
     */
    data: XOR<HackathonRegistrationUpdateManyMutationInput, HackathonRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which HackathonRegistrations to update
     */
    where?: HackathonRegistrationWhereInput
    /**
     * Limit how many HackathonRegistrations to update.
     */
    limit?: number
  }

  /**
   * HackathonRegistration updateManyAndReturn
   */
  export type HackathonRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update HackathonRegistrations.
     */
    data: XOR<HackathonRegistrationUpdateManyMutationInput, HackathonRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which HackathonRegistrations to update
     */
    where?: HackathonRegistrationWhereInput
    /**
     * Limit how many HackathonRegistrations to update.
     */
    limit?: number
  }

  /**
   * HackathonRegistration upsert
   */
  export type HackathonRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * The filter to search for the HackathonRegistration to update in case it exists.
     */
    where: HackathonRegistrationWhereUniqueInput
    /**
     * In case the HackathonRegistration found by the `where` argument doesn't exist, create a new HackathonRegistration with this data.
     */
    create: XOR<HackathonRegistrationCreateInput, HackathonRegistrationUncheckedCreateInput>
    /**
     * In case the HackathonRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HackathonRegistrationUpdateInput, HackathonRegistrationUncheckedUpdateInput>
  }

  /**
   * HackathonRegistration delete
   */
  export type HackathonRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
    /**
     * Filter which HackathonRegistration to delete.
     */
    where: HackathonRegistrationWhereUniqueInput
  }

  /**
   * HackathonRegistration deleteMany
   */
  export type HackathonRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HackathonRegistrations to delete
     */
    where?: HackathonRegistrationWhereInput
    /**
     * Limit how many HackathonRegistrations to delete.
     */
    limit?: number
  }

  /**
   * HackathonRegistration without action
   */
  export type HackathonRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HackathonRegistration
     */
    omit?: HackathonRegistrationOmit<ExtArgs> | null
  }


  /**
   * Model SponsorEnquiry
   */

  export type AggregateSponsorEnquiry = {
    _count: SponsorEnquiryCountAggregateOutputType | null
    _avg: SponsorEnquiryAvgAggregateOutputType | null
    _sum: SponsorEnquirySumAggregateOutputType | null
    _min: SponsorEnquiryMinAggregateOutputType | null
    _max: SponsorEnquiryMaxAggregateOutputType | null
  }

  export type SponsorEnquiryAvgAggregateOutputType = {
    id: number | null
  }

  export type SponsorEnquirySumAggregateOutputType = {
    id: number | null
  }

  export type SponsorEnquiryMinAggregateOutputType = {
    id: number | null
    company: string | null
    contact: string | null
    contactNumber: string | null
    alternateNumber: string | null
    email: string | null
    tier: string | null
    message: string | null
    createdAt: Date | null
  }

  export type SponsorEnquiryMaxAggregateOutputType = {
    id: number | null
    company: string | null
    contact: string | null
    contactNumber: string | null
    alternateNumber: string | null
    email: string | null
    tier: string | null
    message: string | null
    createdAt: Date | null
  }

  export type SponsorEnquiryCountAggregateOutputType = {
    id: number
    company: number
    contact: number
    contactNumber: number
    alternateNumber: number
    email: number
    tier: number
    message: number
    createdAt: number
    _all: number
  }


  export type SponsorEnquiryAvgAggregateInputType = {
    id?: true
  }

  export type SponsorEnquirySumAggregateInputType = {
    id?: true
  }

  export type SponsorEnquiryMinAggregateInputType = {
    id?: true
    company?: true
    contact?: true
    contactNumber?: true
    alternateNumber?: true
    email?: true
    tier?: true
    message?: true
    createdAt?: true
  }

  export type SponsorEnquiryMaxAggregateInputType = {
    id?: true
    company?: true
    contact?: true
    contactNumber?: true
    alternateNumber?: true
    email?: true
    tier?: true
    message?: true
    createdAt?: true
  }

  export type SponsorEnquiryCountAggregateInputType = {
    id?: true
    company?: true
    contact?: true
    contactNumber?: true
    alternateNumber?: true
    email?: true
    tier?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type SponsorEnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SponsorEnquiry to aggregate.
     */
    where?: SponsorEnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorEnquiries to fetch.
     */
    orderBy?: SponsorEnquiryOrderByWithRelationInput | SponsorEnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SponsorEnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorEnquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorEnquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SponsorEnquiries
    **/
    _count?: true | SponsorEnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SponsorEnquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SponsorEnquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorEnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorEnquiryMaxAggregateInputType
  }

  export type GetSponsorEnquiryAggregateType<T extends SponsorEnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsorEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsorEnquiry[P]>
      : GetScalarType<T[P], AggregateSponsorEnquiry[P]>
  }




  export type SponsorEnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorEnquiryWhereInput
    orderBy?: SponsorEnquiryOrderByWithAggregationInput | SponsorEnquiryOrderByWithAggregationInput[]
    by: SponsorEnquiryScalarFieldEnum[] | SponsorEnquiryScalarFieldEnum
    having?: SponsorEnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorEnquiryCountAggregateInputType | true
    _avg?: SponsorEnquiryAvgAggregateInputType
    _sum?: SponsorEnquirySumAggregateInputType
    _min?: SponsorEnquiryMinAggregateInputType
    _max?: SponsorEnquiryMaxAggregateInputType
  }

  export type SponsorEnquiryGroupByOutputType = {
    id: number
    company: string
    contact: string
    contactNumber: string
    alternateNumber: string | null
    email: string
    tier: string
    message: string | null
    createdAt: Date
    _count: SponsorEnquiryCountAggregateOutputType | null
    _avg: SponsorEnquiryAvgAggregateOutputType | null
    _sum: SponsorEnquirySumAggregateOutputType | null
    _min: SponsorEnquiryMinAggregateOutputType | null
    _max: SponsorEnquiryMaxAggregateOutputType | null
  }

  type GetSponsorEnquiryGroupByPayload<T extends SponsorEnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorEnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorEnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorEnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorEnquiryGroupByOutputType[P]>
        }
      >
    >


  export type SponsorEnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    contact?: boolean
    contactNumber?: boolean
    alternateNumber?: boolean
    email?: boolean
    tier?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sponsorEnquiry"]>

  export type SponsorEnquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    contact?: boolean
    contactNumber?: boolean
    alternateNumber?: boolean
    email?: boolean
    tier?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sponsorEnquiry"]>

  export type SponsorEnquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    contact?: boolean
    contactNumber?: boolean
    alternateNumber?: boolean
    email?: boolean
    tier?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sponsorEnquiry"]>

  export type SponsorEnquirySelectScalar = {
    id?: boolean
    company?: boolean
    contact?: boolean
    contactNumber?: boolean
    alternateNumber?: boolean
    email?: boolean
    tier?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type SponsorEnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "contact" | "contactNumber" | "alternateNumber" | "email" | "tier" | "message" | "createdAt", ExtArgs["result"]["sponsorEnquiry"]>

  export type $SponsorEnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SponsorEnquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company: string
      contact: string
      contactNumber: string
      alternateNumber: string | null
      email: string
      tier: string
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["sponsorEnquiry"]>
    composites: {}
  }

  type SponsorEnquiryGetPayload<S extends boolean | null | undefined | SponsorEnquiryDefaultArgs> = $Result.GetResult<Prisma.$SponsorEnquiryPayload, S>

  type SponsorEnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SponsorEnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SponsorEnquiryCountAggregateInputType | true
    }

  export interface SponsorEnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SponsorEnquiry'], meta: { name: 'SponsorEnquiry' } }
    /**
     * Find zero or one SponsorEnquiry that matches the filter.
     * @param {SponsorEnquiryFindUniqueArgs} args - Arguments to find a SponsorEnquiry
     * @example
     * // Get one SponsorEnquiry
     * const sponsorEnquiry = await prisma.sponsorEnquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SponsorEnquiryFindUniqueArgs>(args: SelectSubset<T, SponsorEnquiryFindUniqueArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SponsorEnquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SponsorEnquiryFindUniqueOrThrowArgs} args - Arguments to find a SponsorEnquiry
     * @example
     * // Get one SponsorEnquiry
     * const sponsorEnquiry = await prisma.sponsorEnquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SponsorEnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, SponsorEnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SponsorEnquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorEnquiryFindFirstArgs} args - Arguments to find a SponsorEnquiry
     * @example
     * // Get one SponsorEnquiry
     * const sponsorEnquiry = await prisma.sponsorEnquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SponsorEnquiryFindFirstArgs>(args?: SelectSubset<T, SponsorEnquiryFindFirstArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SponsorEnquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorEnquiryFindFirstOrThrowArgs} args - Arguments to find a SponsorEnquiry
     * @example
     * // Get one SponsorEnquiry
     * const sponsorEnquiry = await prisma.sponsorEnquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SponsorEnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, SponsorEnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SponsorEnquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorEnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SponsorEnquiries
     * const sponsorEnquiries = await prisma.sponsorEnquiry.findMany()
     * 
     * // Get first 10 SponsorEnquiries
     * const sponsorEnquiries = await prisma.sponsorEnquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sponsorEnquiryWithIdOnly = await prisma.sponsorEnquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SponsorEnquiryFindManyArgs>(args?: SelectSubset<T, SponsorEnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SponsorEnquiry.
     * @param {SponsorEnquiryCreateArgs} args - Arguments to create a SponsorEnquiry.
     * @example
     * // Create one SponsorEnquiry
     * const SponsorEnquiry = await prisma.sponsorEnquiry.create({
     *   data: {
     *     // ... data to create a SponsorEnquiry
     *   }
     * })
     * 
     */
    create<T extends SponsorEnquiryCreateArgs>(args: SelectSubset<T, SponsorEnquiryCreateArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SponsorEnquiries.
     * @param {SponsorEnquiryCreateManyArgs} args - Arguments to create many SponsorEnquiries.
     * @example
     * // Create many SponsorEnquiries
     * const sponsorEnquiry = await prisma.sponsorEnquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SponsorEnquiryCreateManyArgs>(args?: SelectSubset<T, SponsorEnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SponsorEnquiries and returns the data saved in the database.
     * @param {SponsorEnquiryCreateManyAndReturnArgs} args - Arguments to create many SponsorEnquiries.
     * @example
     * // Create many SponsorEnquiries
     * const sponsorEnquiry = await prisma.sponsorEnquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SponsorEnquiries and only return the `id`
     * const sponsorEnquiryWithIdOnly = await prisma.sponsorEnquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SponsorEnquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, SponsorEnquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SponsorEnquiry.
     * @param {SponsorEnquiryDeleteArgs} args - Arguments to delete one SponsorEnquiry.
     * @example
     * // Delete one SponsorEnquiry
     * const SponsorEnquiry = await prisma.sponsorEnquiry.delete({
     *   where: {
     *     // ... filter to delete one SponsorEnquiry
     *   }
     * })
     * 
     */
    delete<T extends SponsorEnquiryDeleteArgs>(args: SelectSubset<T, SponsorEnquiryDeleteArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SponsorEnquiry.
     * @param {SponsorEnquiryUpdateArgs} args - Arguments to update one SponsorEnquiry.
     * @example
     * // Update one SponsorEnquiry
     * const sponsorEnquiry = await prisma.sponsorEnquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SponsorEnquiryUpdateArgs>(args: SelectSubset<T, SponsorEnquiryUpdateArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SponsorEnquiries.
     * @param {SponsorEnquiryDeleteManyArgs} args - Arguments to filter SponsorEnquiries to delete.
     * @example
     * // Delete a few SponsorEnquiries
     * const { count } = await prisma.sponsorEnquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SponsorEnquiryDeleteManyArgs>(args?: SelectSubset<T, SponsorEnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SponsorEnquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorEnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SponsorEnquiries
     * const sponsorEnquiry = await prisma.sponsorEnquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SponsorEnquiryUpdateManyArgs>(args: SelectSubset<T, SponsorEnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SponsorEnquiries and returns the data updated in the database.
     * @param {SponsorEnquiryUpdateManyAndReturnArgs} args - Arguments to update many SponsorEnquiries.
     * @example
     * // Update many SponsorEnquiries
     * const sponsorEnquiry = await prisma.sponsorEnquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SponsorEnquiries and only return the `id`
     * const sponsorEnquiryWithIdOnly = await prisma.sponsorEnquiry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SponsorEnquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, SponsorEnquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SponsorEnquiry.
     * @param {SponsorEnquiryUpsertArgs} args - Arguments to update or create a SponsorEnquiry.
     * @example
     * // Update or create a SponsorEnquiry
     * const sponsorEnquiry = await prisma.sponsorEnquiry.upsert({
     *   create: {
     *     // ... data to create a SponsorEnquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SponsorEnquiry we want to update
     *   }
     * })
     */
    upsert<T extends SponsorEnquiryUpsertArgs>(args: SelectSubset<T, SponsorEnquiryUpsertArgs<ExtArgs>>): Prisma__SponsorEnquiryClient<$Result.GetResult<Prisma.$SponsorEnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SponsorEnquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorEnquiryCountArgs} args - Arguments to filter SponsorEnquiries to count.
     * @example
     * // Count the number of SponsorEnquiries
     * const count = await prisma.sponsorEnquiry.count({
     *   where: {
     *     // ... the filter for the SponsorEnquiries we want to count
     *   }
     * })
    **/
    count<T extends SponsorEnquiryCountArgs>(
      args?: Subset<T, SponsorEnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorEnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SponsorEnquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorEnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SponsorEnquiryAggregateArgs>(args: Subset<T, SponsorEnquiryAggregateArgs>): Prisma.PrismaPromise<GetSponsorEnquiryAggregateType<T>>

    /**
     * Group by SponsorEnquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorEnquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SponsorEnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SponsorEnquiryGroupByArgs['orderBy'] }
        : { orderBy?: SponsorEnquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SponsorEnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SponsorEnquiry model
   */
  readonly fields: SponsorEnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SponsorEnquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SponsorEnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SponsorEnquiry model
   */
  interface SponsorEnquiryFieldRefs {
    readonly id: FieldRef<"SponsorEnquiry", 'Int'>
    readonly company: FieldRef<"SponsorEnquiry", 'String'>
    readonly contact: FieldRef<"SponsorEnquiry", 'String'>
    readonly contactNumber: FieldRef<"SponsorEnquiry", 'String'>
    readonly alternateNumber: FieldRef<"SponsorEnquiry", 'String'>
    readonly email: FieldRef<"SponsorEnquiry", 'String'>
    readonly tier: FieldRef<"SponsorEnquiry", 'String'>
    readonly message: FieldRef<"SponsorEnquiry", 'String'>
    readonly createdAt: FieldRef<"SponsorEnquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SponsorEnquiry findUnique
   */
  export type SponsorEnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * Filter, which SponsorEnquiry to fetch.
     */
    where: SponsorEnquiryWhereUniqueInput
  }

  /**
   * SponsorEnquiry findUniqueOrThrow
   */
  export type SponsorEnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * Filter, which SponsorEnquiry to fetch.
     */
    where: SponsorEnquiryWhereUniqueInput
  }

  /**
   * SponsorEnquiry findFirst
   */
  export type SponsorEnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * Filter, which SponsorEnquiry to fetch.
     */
    where?: SponsorEnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorEnquiries to fetch.
     */
    orderBy?: SponsorEnquiryOrderByWithRelationInput | SponsorEnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SponsorEnquiries.
     */
    cursor?: SponsorEnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorEnquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorEnquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SponsorEnquiries.
     */
    distinct?: SponsorEnquiryScalarFieldEnum | SponsorEnquiryScalarFieldEnum[]
  }

  /**
   * SponsorEnquiry findFirstOrThrow
   */
  export type SponsorEnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * Filter, which SponsorEnquiry to fetch.
     */
    where?: SponsorEnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorEnquiries to fetch.
     */
    orderBy?: SponsorEnquiryOrderByWithRelationInput | SponsorEnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SponsorEnquiries.
     */
    cursor?: SponsorEnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorEnquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorEnquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SponsorEnquiries.
     */
    distinct?: SponsorEnquiryScalarFieldEnum | SponsorEnquiryScalarFieldEnum[]
  }

  /**
   * SponsorEnquiry findMany
   */
  export type SponsorEnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * Filter, which SponsorEnquiries to fetch.
     */
    where?: SponsorEnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SponsorEnquiries to fetch.
     */
    orderBy?: SponsorEnquiryOrderByWithRelationInput | SponsorEnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SponsorEnquiries.
     */
    cursor?: SponsorEnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SponsorEnquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SponsorEnquiries.
     */
    skip?: number
    distinct?: SponsorEnquiryScalarFieldEnum | SponsorEnquiryScalarFieldEnum[]
  }

  /**
   * SponsorEnquiry create
   */
  export type SponsorEnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a SponsorEnquiry.
     */
    data: XOR<SponsorEnquiryCreateInput, SponsorEnquiryUncheckedCreateInput>
  }

  /**
   * SponsorEnquiry createMany
   */
  export type SponsorEnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SponsorEnquiries.
     */
    data: SponsorEnquiryCreateManyInput | SponsorEnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SponsorEnquiry createManyAndReturn
   */
  export type SponsorEnquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * The data used to create many SponsorEnquiries.
     */
    data: SponsorEnquiryCreateManyInput | SponsorEnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SponsorEnquiry update
   */
  export type SponsorEnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a SponsorEnquiry.
     */
    data: XOR<SponsorEnquiryUpdateInput, SponsorEnquiryUncheckedUpdateInput>
    /**
     * Choose, which SponsorEnquiry to update.
     */
    where: SponsorEnquiryWhereUniqueInput
  }

  /**
   * SponsorEnquiry updateMany
   */
  export type SponsorEnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SponsorEnquiries.
     */
    data: XOR<SponsorEnquiryUpdateManyMutationInput, SponsorEnquiryUncheckedUpdateManyInput>
    /**
     * Filter which SponsorEnquiries to update
     */
    where?: SponsorEnquiryWhereInput
    /**
     * Limit how many SponsorEnquiries to update.
     */
    limit?: number
  }

  /**
   * SponsorEnquiry updateManyAndReturn
   */
  export type SponsorEnquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * The data used to update SponsorEnquiries.
     */
    data: XOR<SponsorEnquiryUpdateManyMutationInput, SponsorEnquiryUncheckedUpdateManyInput>
    /**
     * Filter which SponsorEnquiries to update
     */
    where?: SponsorEnquiryWhereInput
    /**
     * Limit how many SponsorEnquiries to update.
     */
    limit?: number
  }

  /**
   * SponsorEnquiry upsert
   */
  export type SponsorEnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the SponsorEnquiry to update in case it exists.
     */
    where: SponsorEnquiryWhereUniqueInput
    /**
     * In case the SponsorEnquiry found by the `where` argument doesn't exist, create a new SponsorEnquiry with this data.
     */
    create: XOR<SponsorEnquiryCreateInput, SponsorEnquiryUncheckedCreateInput>
    /**
     * In case the SponsorEnquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SponsorEnquiryUpdateInput, SponsorEnquiryUncheckedUpdateInput>
  }

  /**
   * SponsorEnquiry delete
   */
  export type SponsorEnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
    /**
     * Filter which SponsorEnquiry to delete.
     */
    where: SponsorEnquiryWhereUniqueInput
  }

  /**
   * SponsorEnquiry deleteMany
   */
  export type SponsorEnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SponsorEnquiries to delete
     */
    where?: SponsorEnquiryWhereInput
    /**
     * Limit how many SponsorEnquiries to delete.
     */
    limit?: number
  }

  /**
   * SponsorEnquiry without action
   */
  export type SponsorEnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SponsorEnquiry
     */
    select?: SponsorEnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SponsorEnquiry
     */
    omit?: SponsorEnquiryOmit<ExtArgs> | null
  }


  /**
   * Model SpeakerProposal
   */

  export type AggregateSpeakerProposal = {
    _count: SpeakerProposalCountAggregateOutputType | null
    _avg: SpeakerProposalAvgAggregateOutputType | null
    _sum: SpeakerProposalSumAggregateOutputType | null
    _min: SpeakerProposalMinAggregateOutputType | null
    _max: SpeakerProposalMaxAggregateOutputType | null
  }

  export type SpeakerProposalAvgAggregateOutputType = {
    id: number | null
  }

  export type SpeakerProposalSumAggregateOutputType = {
    id: number | null
  }

  export type SpeakerProposalMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    topic: string | null
    abstract: string | null
    createdAt: Date | null
  }

  export type SpeakerProposalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    topic: string | null
    abstract: string | null
    createdAt: Date | null
  }

  export type SpeakerProposalCountAggregateOutputType = {
    id: number
    name: number
    email: number
    topic: number
    abstract: number
    createdAt: number
    _all: number
  }


  export type SpeakerProposalAvgAggregateInputType = {
    id?: true
  }

  export type SpeakerProposalSumAggregateInputType = {
    id?: true
  }

  export type SpeakerProposalMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    topic?: true
    abstract?: true
    createdAt?: true
  }

  export type SpeakerProposalMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    topic?: true
    abstract?: true
    createdAt?: true
  }

  export type SpeakerProposalCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    topic?: true
    abstract?: true
    createdAt?: true
    _all?: true
  }

  export type SpeakerProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakerProposal to aggregate.
     */
    where?: SpeakerProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerProposals to fetch.
     */
    orderBy?: SpeakerProposalOrderByWithRelationInput | SpeakerProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeakerProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeakerProposals
    **/
    _count?: true | SpeakerProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeakerProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeakerProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeakerProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeakerProposalMaxAggregateInputType
  }

  export type GetSpeakerProposalAggregateType<T extends SpeakerProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeakerProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeakerProposal[P]>
      : GetScalarType<T[P], AggregateSpeakerProposal[P]>
  }




  export type SpeakerProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeakerProposalWhereInput
    orderBy?: SpeakerProposalOrderByWithAggregationInput | SpeakerProposalOrderByWithAggregationInput[]
    by: SpeakerProposalScalarFieldEnum[] | SpeakerProposalScalarFieldEnum
    having?: SpeakerProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeakerProposalCountAggregateInputType | true
    _avg?: SpeakerProposalAvgAggregateInputType
    _sum?: SpeakerProposalSumAggregateInputType
    _min?: SpeakerProposalMinAggregateInputType
    _max?: SpeakerProposalMaxAggregateInputType
  }

  export type SpeakerProposalGroupByOutputType = {
    id: number
    name: string
    email: string
    topic: string
    abstract: string
    createdAt: Date
    _count: SpeakerProposalCountAggregateOutputType | null
    _avg: SpeakerProposalAvgAggregateOutputType | null
    _sum: SpeakerProposalSumAggregateOutputType | null
    _min: SpeakerProposalMinAggregateOutputType | null
    _max: SpeakerProposalMaxAggregateOutputType | null
  }

  type GetSpeakerProposalGroupByPayload<T extends SpeakerProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeakerProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeakerProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeakerProposalGroupByOutputType[P]>
            : GetScalarType<T[P], SpeakerProposalGroupByOutputType[P]>
        }
      >
    >


  export type SpeakerProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    topic?: boolean
    abstract?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["speakerProposal"]>

  export type SpeakerProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    topic?: boolean
    abstract?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["speakerProposal"]>

  export type SpeakerProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    topic?: boolean
    abstract?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["speakerProposal"]>

  export type SpeakerProposalSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    topic?: boolean
    abstract?: boolean
    createdAt?: boolean
  }

  export type SpeakerProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "topic" | "abstract" | "createdAt", ExtArgs["result"]["speakerProposal"]>

  export type $SpeakerProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeakerProposal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      topic: string
      abstract: string
      createdAt: Date
    }, ExtArgs["result"]["speakerProposal"]>
    composites: {}
  }

  type SpeakerProposalGetPayload<S extends boolean | null | undefined | SpeakerProposalDefaultArgs> = $Result.GetResult<Prisma.$SpeakerProposalPayload, S>

  type SpeakerProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeakerProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeakerProposalCountAggregateInputType | true
    }

  export interface SpeakerProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeakerProposal'], meta: { name: 'SpeakerProposal' } }
    /**
     * Find zero or one SpeakerProposal that matches the filter.
     * @param {SpeakerProposalFindUniqueArgs} args - Arguments to find a SpeakerProposal
     * @example
     * // Get one SpeakerProposal
     * const speakerProposal = await prisma.speakerProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeakerProposalFindUniqueArgs>(args: SelectSubset<T, SpeakerProposalFindUniqueArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpeakerProposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeakerProposalFindUniqueOrThrowArgs} args - Arguments to find a SpeakerProposal
     * @example
     * // Get one SpeakerProposal
     * const speakerProposal = await prisma.speakerProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeakerProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeakerProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeakerProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerProposalFindFirstArgs} args - Arguments to find a SpeakerProposal
     * @example
     * // Get one SpeakerProposal
     * const speakerProposal = await prisma.speakerProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeakerProposalFindFirstArgs>(args?: SelectSubset<T, SpeakerProposalFindFirstArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeakerProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerProposalFindFirstOrThrowArgs} args - Arguments to find a SpeakerProposal
     * @example
     * // Get one SpeakerProposal
     * const speakerProposal = await prisma.speakerProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeakerProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeakerProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpeakerProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeakerProposals
     * const speakerProposals = await prisma.speakerProposal.findMany()
     * 
     * // Get first 10 SpeakerProposals
     * const speakerProposals = await prisma.speakerProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speakerProposalWithIdOnly = await prisma.speakerProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeakerProposalFindManyArgs>(args?: SelectSubset<T, SpeakerProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpeakerProposal.
     * @param {SpeakerProposalCreateArgs} args - Arguments to create a SpeakerProposal.
     * @example
     * // Create one SpeakerProposal
     * const SpeakerProposal = await prisma.speakerProposal.create({
     *   data: {
     *     // ... data to create a SpeakerProposal
     *   }
     * })
     * 
     */
    create<T extends SpeakerProposalCreateArgs>(args: SelectSubset<T, SpeakerProposalCreateArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpeakerProposals.
     * @param {SpeakerProposalCreateManyArgs} args - Arguments to create many SpeakerProposals.
     * @example
     * // Create many SpeakerProposals
     * const speakerProposal = await prisma.speakerProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeakerProposalCreateManyArgs>(args?: SelectSubset<T, SpeakerProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpeakerProposals and returns the data saved in the database.
     * @param {SpeakerProposalCreateManyAndReturnArgs} args - Arguments to create many SpeakerProposals.
     * @example
     * // Create many SpeakerProposals
     * const speakerProposal = await prisma.speakerProposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpeakerProposals and only return the `id`
     * const speakerProposalWithIdOnly = await prisma.speakerProposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeakerProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeakerProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpeakerProposal.
     * @param {SpeakerProposalDeleteArgs} args - Arguments to delete one SpeakerProposal.
     * @example
     * // Delete one SpeakerProposal
     * const SpeakerProposal = await prisma.speakerProposal.delete({
     *   where: {
     *     // ... filter to delete one SpeakerProposal
     *   }
     * })
     * 
     */
    delete<T extends SpeakerProposalDeleteArgs>(args: SelectSubset<T, SpeakerProposalDeleteArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpeakerProposal.
     * @param {SpeakerProposalUpdateArgs} args - Arguments to update one SpeakerProposal.
     * @example
     * // Update one SpeakerProposal
     * const speakerProposal = await prisma.speakerProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeakerProposalUpdateArgs>(args: SelectSubset<T, SpeakerProposalUpdateArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpeakerProposals.
     * @param {SpeakerProposalDeleteManyArgs} args - Arguments to filter SpeakerProposals to delete.
     * @example
     * // Delete a few SpeakerProposals
     * const { count } = await prisma.speakerProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeakerProposalDeleteManyArgs>(args?: SelectSubset<T, SpeakerProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeakerProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeakerProposals
     * const speakerProposal = await prisma.speakerProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeakerProposalUpdateManyArgs>(args: SelectSubset<T, SpeakerProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeakerProposals and returns the data updated in the database.
     * @param {SpeakerProposalUpdateManyAndReturnArgs} args - Arguments to update many SpeakerProposals.
     * @example
     * // Update many SpeakerProposals
     * const speakerProposal = await prisma.speakerProposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpeakerProposals and only return the `id`
     * const speakerProposalWithIdOnly = await prisma.speakerProposal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpeakerProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, SpeakerProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpeakerProposal.
     * @param {SpeakerProposalUpsertArgs} args - Arguments to update or create a SpeakerProposal.
     * @example
     * // Update or create a SpeakerProposal
     * const speakerProposal = await prisma.speakerProposal.upsert({
     *   create: {
     *     // ... data to create a SpeakerProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeakerProposal we want to update
     *   }
     * })
     */
    upsert<T extends SpeakerProposalUpsertArgs>(args: SelectSubset<T, SpeakerProposalUpsertArgs<ExtArgs>>): Prisma__SpeakerProposalClient<$Result.GetResult<Prisma.$SpeakerProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpeakerProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerProposalCountArgs} args - Arguments to filter SpeakerProposals to count.
     * @example
     * // Count the number of SpeakerProposals
     * const count = await prisma.speakerProposal.count({
     *   where: {
     *     // ... the filter for the SpeakerProposals we want to count
     *   }
     * })
    **/
    count<T extends SpeakerProposalCountArgs>(
      args?: Subset<T, SpeakerProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeakerProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeakerProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeakerProposalAggregateArgs>(args: Subset<T, SpeakerProposalAggregateArgs>): Prisma.PrismaPromise<GetSpeakerProposalAggregateType<T>>

    /**
     * Group by SpeakerProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeakerProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeakerProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeakerProposalGroupByArgs['orderBy'] }
        : { orderBy?: SpeakerProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeakerProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeakerProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpeakerProposal model
   */
  readonly fields: SpeakerProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeakerProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeakerProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpeakerProposal model
   */
  interface SpeakerProposalFieldRefs {
    readonly id: FieldRef<"SpeakerProposal", 'Int'>
    readonly name: FieldRef<"SpeakerProposal", 'String'>
    readonly email: FieldRef<"SpeakerProposal", 'String'>
    readonly topic: FieldRef<"SpeakerProposal", 'String'>
    readonly abstract: FieldRef<"SpeakerProposal", 'String'>
    readonly createdAt: FieldRef<"SpeakerProposal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpeakerProposal findUnique
   */
  export type SpeakerProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerProposal to fetch.
     */
    where: SpeakerProposalWhereUniqueInput
  }

  /**
   * SpeakerProposal findUniqueOrThrow
   */
  export type SpeakerProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerProposal to fetch.
     */
    where: SpeakerProposalWhereUniqueInput
  }

  /**
   * SpeakerProposal findFirst
   */
  export type SpeakerProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerProposal to fetch.
     */
    where?: SpeakerProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerProposals to fetch.
     */
    orderBy?: SpeakerProposalOrderByWithRelationInput | SpeakerProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakerProposals.
     */
    cursor?: SpeakerProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakerProposals.
     */
    distinct?: SpeakerProposalScalarFieldEnum | SpeakerProposalScalarFieldEnum[]
  }

  /**
   * SpeakerProposal findFirstOrThrow
   */
  export type SpeakerProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerProposal to fetch.
     */
    where?: SpeakerProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerProposals to fetch.
     */
    orderBy?: SpeakerProposalOrderByWithRelationInput | SpeakerProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeakerProposals.
     */
    cursor?: SpeakerProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeakerProposals.
     */
    distinct?: SpeakerProposalScalarFieldEnum | SpeakerProposalScalarFieldEnum[]
  }

  /**
   * SpeakerProposal findMany
   */
  export type SpeakerProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * Filter, which SpeakerProposals to fetch.
     */
    where?: SpeakerProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeakerProposals to fetch.
     */
    orderBy?: SpeakerProposalOrderByWithRelationInput | SpeakerProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeakerProposals.
     */
    cursor?: SpeakerProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeakerProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeakerProposals.
     */
    skip?: number
    distinct?: SpeakerProposalScalarFieldEnum | SpeakerProposalScalarFieldEnum[]
  }

  /**
   * SpeakerProposal create
   */
  export type SpeakerProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * The data needed to create a SpeakerProposal.
     */
    data: XOR<SpeakerProposalCreateInput, SpeakerProposalUncheckedCreateInput>
  }

  /**
   * SpeakerProposal createMany
   */
  export type SpeakerProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeakerProposals.
     */
    data: SpeakerProposalCreateManyInput | SpeakerProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeakerProposal createManyAndReturn
   */
  export type SpeakerProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * The data used to create many SpeakerProposals.
     */
    data: SpeakerProposalCreateManyInput | SpeakerProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeakerProposal update
   */
  export type SpeakerProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * The data needed to update a SpeakerProposal.
     */
    data: XOR<SpeakerProposalUpdateInput, SpeakerProposalUncheckedUpdateInput>
    /**
     * Choose, which SpeakerProposal to update.
     */
    where: SpeakerProposalWhereUniqueInput
  }

  /**
   * SpeakerProposal updateMany
   */
  export type SpeakerProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeakerProposals.
     */
    data: XOR<SpeakerProposalUpdateManyMutationInput, SpeakerProposalUncheckedUpdateManyInput>
    /**
     * Filter which SpeakerProposals to update
     */
    where?: SpeakerProposalWhereInput
    /**
     * Limit how many SpeakerProposals to update.
     */
    limit?: number
  }

  /**
   * SpeakerProposal updateManyAndReturn
   */
  export type SpeakerProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * The data used to update SpeakerProposals.
     */
    data: XOR<SpeakerProposalUpdateManyMutationInput, SpeakerProposalUncheckedUpdateManyInput>
    /**
     * Filter which SpeakerProposals to update
     */
    where?: SpeakerProposalWhereInput
    /**
     * Limit how many SpeakerProposals to update.
     */
    limit?: number
  }

  /**
   * SpeakerProposal upsert
   */
  export type SpeakerProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * The filter to search for the SpeakerProposal to update in case it exists.
     */
    where: SpeakerProposalWhereUniqueInput
    /**
     * In case the SpeakerProposal found by the `where` argument doesn't exist, create a new SpeakerProposal with this data.
     */
    create: XOR<SpeakerProposalCreateInput, SpeakerProposalUncheckedCreateInput>
    /**
     * In case the SpeakerProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeakerProposalUpdateInput, SpeakerProposalUncheckedUpdateInput>
  }

  /**
   * SpeakerProposal delete
   */
  export type SpeakerProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
    /**
     * Filter which SpeakerProposal to delete.
     */
    where: SpeakerProposalWhereUniqueInput
  }

  /**
   * SpeakerProposal deleteMany
   */
  export type SpeakerProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeakerProposals to delete
     */
    where?: SpeakerProposalWhereInput
    /**
     * Limit how many SpeakerProposals to delete.
     */
    limit?: number
  }

  /**
   * SpeakerProposal without action
   */
  export type SpeakerProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeakerProposal
     */
    select?: SpeakerProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeakerProposal
     */
    omit?: SpeakerProposalOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    organization: 'organization',
    designation: 'designation',
    city: 'city',
    address: 'address',
    avatar: 'avatar',
    createdAt: 'createdAt'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const HackathonRegistrationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    college: 'college',
    team: 'team',
    domain: 'domain',
    size: 'size',
    createdAt: 'createdAt'
  };

  export type HackathonRegistrationScalarFieldEnum = (typeof HackathonRegistrationScalarFieldEnum)[keyof typeof HackathonRegistrationScalarFieldEnum]


  export const SponsorEnquiryScalarFieldEnum: {
    id: 'id',
    company: 'company',
    contact: 'contact',
    contactNumber: 'contactNumber',
    alternateNumber: 'alternateNumber',
    email: 'email',
    tier: 'tier',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type SponsorEnquiryScalarFieldEnum = (typeof SponsorEnquiryScalarFieldEnum)[keyof typeof SponsorEnquiryScalarFieldEnum]


  export const SpeakerProposalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    topic: 'topic',
    abstract: 'abstract',
    createdAt: 'createdAt'
  };

  export type SpeakerProposalScalarFieldEnum = (typeof SpeakerProposalScalarFieldEnum)[keyof typeof SpeakerProposalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: IntFilter<"Registration"> | number
    fullName?: StringFilter<"Registration"> | string
    email?: StringFilter<"Registration"> | string
    phone?: StringFilter<"Registration"> | string
    organization?: StringFilter<"Registration"> | string
    designation?: StringFilter<"Registration"> | string
    city?: StringFilter<"Registration"> | string
    address?: StringFilter<"Registration"> | string
    avatar?: StringFilter<"Registration"> | string
    createdAt?: DateTimeFilter<"Registration"> | Date | string
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    fullName?: StringFilter<"Registration"> | string
    phone?: StringFilter<"Registration"> | string
    organization?: StringFilter<"Registration"> | string
    designation?: StringFilter<"Registration"> | string
    city?: StringFilter<"Registration"> | string
    address?: StringFilter<"Registration"> | string
    avatar?: StringFilter<"Registration"> | string
    createdAt?: DateTimeFilter<"Registration"> | Date | string
  }, "id" | "email">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _avg?: RegistrationAvgOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
    _sum?: RegistrationSumOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registration"> | number
    fullName?: StringWithAggregatesFilter<"Registration"> | string
    email?: StringWithAggregatesFilter<"Registration"> | string
    phone?: StringWithAggregatesFilter<"Registration"> | string
    organization?: StringWithAggregatesFilter<"Registration"> | string
    designation?: StringWithAggregatesFilter<"Registration"> | string
    city?: StringWithAggregatesFilter<"Registration"> | string
    address?: StringWithAggregatesFilter<"Registration"> | string
    avatar?: StringWithAggregatesFilter<"Registration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
  }

  export type HackathonRegistrationWhereInput = {
    AND?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    OR?: HackathonRegistrationWhereInput[]
    NOT?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    id?: IntFilter<"HackathonRegistration"> | number
    name?: StringFilter<"HackathonRegistration"> | string
    email?: StringFilter<"HackathonRegistration"> | string
    college?: StringFilter<"HackathonRegistration"> | string
    team?: StringFilter<"HackathonRegistration"> | string
    domain?: StringFilter<"HackathonRegistration"> | string
    size?: StringFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
  }

  export type HackathonRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type HackathonRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    OR?: HackathonRegistrationWhereInput[]
    NOT?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    name?: StringFilter<"HackathonRegistration"> | string
    email?: StringFilter<"HackathonRegistration"> | string
    college?: StringFilter<"HackathonRegistration"> | string
    team?: StringFilter<"HackathonRegistration"> | string
    domain?: StringFilter<"HackathonRegistration"> | string
    size?: StringFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
  }, "id">

  export type HackathonRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    _count?: HackathonRegistrationCountOrderByAggregateInput
    _avg?: HackathonRegistrationAvgOrderByAggregateInput
    _max?: HackathonRegistrationMaxOrderByAggregateInput
    _min?: HackathonRegistrationMinOrderByAggregateInput
    _sum?: HackathonRegistrationSumOrderByAggregateInput
  }

  export type HackathonRegistrationScalarWhereWithAggregatesInput = {
    AND?: HackathonRegistrationScalarWhereWithAggregatesInput | HackathonRegistrationScalarWhereWithAggregatesInput[]
    OR?: HackathonRegistrationScalarWhereWithAggregatesInput[]
    NOT?: HackathonRegistrationScalarWhereWithAggregatesInput | HackathonRegistrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HackathonRegistration"> | number
    name?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    email?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    college?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    team?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    domain?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    size?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HackathonRegistration"> | Date | string
  }

  export type SponsorEnquiryWhereInput = {
    AND?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    OR?: SponsorEnquiryWhereInput[]
    NOT?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    id?: IntFilter<"SponsorEnquiry"> | number
    company?: StringFilter<"SponsorEnquiry"> | string
    contact?: StringFilter<"SponsorEnquiry"> | string
    contactNumber?: StringFilter<"SponsorEnquiry"> | string
    alternateNumber?: StringNullableFilter<"SponsorEnquiry"> | string | null
    email?: StringFilter<"SponsorEnquiry"> | string
    tier?: StringFilter<"SponsorEnquiry"> | string
    message?: StringNullableFilter<"SponsorEnquiry"> | string | null
    createdAt?: DateTimeFilter<"SponsorEnquiry"> | Date | string
  }

  export type SponsorEnquiryOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    contact?: SortOrder
    contactNumber?: SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    email?: SortOrder
    tier?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SponsorEnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    OR?: SponsorEnquiryWhereInput[]
    NOT?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    company?: StringFilter<"SponsorEnquiry"> | string
    contact?: StringFilter<"SponsorEnquiry"> | string
    contactNumber?: StringFilter<"SponsorEnquiry"> | string
    alternateNumber?: StringNullableFilter<"SponsorEnquiry"> | string | null
    email?: StringFilter<"SponsorEnquiry"> | string
    tier?: StringFilter<"SponsorEnquiry"> | string
    message?: StringNullableFilter<"SponsorEnquiry"> | string | null
    createdAt?: DateTimeFilter<"SponsorEnquiry"> | Date | string
  }, "id">

  export type SponsorEnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    contact?: SortOrder
    contactNumber?: SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    email?: SortOrder
    tier?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SponsorEnquiryCountOrderByAggregateInput
    _avg?: SponsorEnquiryAvgOrderByAggregateInput
    _max?: SponsorEnquiryMaxOrderByAggregateInput
    _min?: SponsorEnquiryMinOrderByAggregateInput
    _sum?: SponsorEnquirySumOrderByAggregateInput
  }

  export type SponsorEnquiryScalarWhereWithAggregatesInput = {
    AND?: SponsorEnquiryScalarWhereWithAggregatesInput | SponsorEnquiryScalarWhereWithAggregatesInput[]
    OR?: SponsorEnquiryScalarWhereWithAggregatesInput[]
    NOT?: SponsorEnquiryScalarWhereWithAggregatesInput | SponsorEnquiryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SponsorEnquiry"> | number
    company?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    contact?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    contactNumber?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    alternateNumber?: StringNullableWithAggregatesFilter<"SponsorEnquiry"> | string | null
    email?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    tier?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    message?: StringNullableWithAggregatesFilter<"SponsorEnquiry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SponsorEnquiry"> | Date | string
  }

  export type SpeakerProposalWhereInput = {
    AND?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    OR?: SpeakerProposalWhereInput[]
    NOT?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    id?: IntFilter<"SpeakerProposal"> | number
    name?: StringFilter<"SpeakerProposal"> | string
    email?: StringFilter<"SpeakerProposal"> | string
    topic?: StringFilter<"SpeakerProposal"> | string
    abstract?: StringFilter<"SpeakerProposal"> | string
    createdAt?: DateTimeFilter<"SpeakerProposal"> | Date | string
  }

  export type SpeakerProposalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeakerProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    OR?: SpeakerProposalWhereInput[]
    NOT?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    name?: StringFilter<"SpeakerProposal"> | string
    email?: StringFilter<"SpeakerProposal"> | string
    topic?: StringFilter<"SpeakerProposal"> | string
    abstract?: StringFilter<"SpeakerProposal"> | string
    createdAt?: DateTimeFilter<"SpeakerProposal"> | Date | string
  }, "id">

  export type SpeakerProposalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    createdAt?: SortOrder
    _count?: SpeakerProposalCountOrderByAggregateInput
    _avg?: SpeakerProposalAvgOrderByAggregateInput
    _max?: SpeakerProposalMaxOrderByAggregateInput
    _min?: SpeakerProposalMinOrderByAggregateInput
    _sum?: SpeakerProposalSumOrderByAggregateInput
  }

  export type SpeakerProposalScalarWhereWithAggregatesInput = {
    AND?: SpeakerProposalScalarWhereWithAggregatesInput | SpeakerProposalScalarWhereWithAggregatesInput[]
    OR?: SpeakerProposalScalarWhereWithAggregatesInput[]
    NOT?: SpeakerProposalScalarWhereWithAggregatesInput | SpeakerProposalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpeakerProposal"> | number
    name?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    email?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    topic?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    abstract?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpeakerProposal"> | Date | string
  }

  export type RegistrationCreateInput = {
    fullName: string
    email: string
    phone: string
    organization: string
    designation: string
    city: string
    address: string
    avatar?: string
    createdAt?: Date | string
  }

  export type RegistrationUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    phone: string
    organization: string
    designation: string
    city: string
    address: string
    avatar?: string
    createdAt?: Date | string
  }

  export type RegistrationUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCreateManyInput = {
    id?: number
    fullName: string
    email: string
    phone: string
    organization: string
    designation: string
    city: string
    address: string
    avatar?: string
    createdAt?: Date | string
  }

  export type RegistrationUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationCreateInput = {
    name: string
    email: string
    college: string
    team: string
    domain: string
    size: string
    createdAt?: Date | string
  }

  export type HackathonRegistrationUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    college: string
    team: string
    domain: string
    size: string
    createdAt?: Date | string
  }

  export type HackathonRegistrationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationCreateManyInput = {
    id?: number
    name: string
    email: string
    college: string
    team: string
    domain: string
    size: string
    createdAt?: Date | string
  }

  export type HackathonRegistrationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryCreateInput = {
    company: string
    contact: string
    contactNumber: string
    alternateNumber?: string | null
    email: string
    tier: string
    message?: string | null
    createdAt?: Date | string
  }

  export type SponsorEnquiryUncheckedCreateInput = {
    id?: number
    company: string
    contact: string
    contactNumber: string
    alternateNumber?: string | null
    email: string
    tier: string
    message?: string | null
    createdAt?: Date | string
  }

  export type SponsorEnquiryUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryCreateManyInput = {
    id?: number
    company: string
    contact: string
    contactNumber: string
    alternateNumber?: string | null
    email: string
    tier: string
    message?: string | null
    createdAt?: Date | string
  }

  export type SponsorEnquiryUpdateManyMutationInput = {
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalCreateInput = {
    name: string
    email: string
    topic: string
    abstract: string
    createdAt?: Date | string
  }

  export type SpeakerProposalUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    topic: string
    abstract: string
    createdAt?: Date | string
  }

  export type SpeakerProposalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalCreateManyInput = {
    id?: number
    name: string
    email: string
    topic: string
    abstract: string
    createdAt?: Date | string
  }

  export type SpeakerProposalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type HackathonRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type HackathonRegistrationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HackathonRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type HackathonRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type HackathonRegistrationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SponsorEnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contact?: SortOrder
    contactNumber?: SortOrder
    alternateNumber?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type SponsorEnquiryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SponsorEnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contact?: SortOrder
    contactNumber?: SortOrder
    alternateNumber?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type SponsorEnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    contact?: SortOrder
    contactNumber?: SortOrder
    alternateNumber?: SortOrder
    email?: SortOrder
    tier?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type SponsorEnquirySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SpeakerProposalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeakerProposalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpeakerProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeakerProposalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeakerProposalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}