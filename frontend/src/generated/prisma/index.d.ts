
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
 * Model EventConfig
 * 
 */
export type EventConfig = $Result.DefaultSelection<Prisma.$EventConfigPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
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
 * Model ConfirmedSpeaker
 * 
 */
export type ConfirmedSpeaker = $Result.DefaultSelection<Prisma.$ConfirmedSpeakerPayload>
/**
 * Model ConfirmedSponsor
 * 
 */
export type ConfirmedSponsor = $Result.DefaultSelection<Prisma.$ConfirmedSponsorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PARTICIPANT: 'PARTICIPANT',
  ORGANIZER: 'ORGANIZER',
  SPEAKER: 'SPEAKER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const EmailStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus]


export const ActivityType: {
  PARTICIPANT_REGISTERED: 'PARTICIPANT_REGISTERED',
  ENTRY_VERIFIED: 'ENTRY_VERIFIED',
  GOODIES_CLAIMED: 'GOODIES_CLAIMED',
  ORGANIZER_LOGIN: 'ORGANIZER_LOGIN',
  EMAIL_SENT: 'EMAIL_SENT',
  EMAIL_FAILED: 'EMAIL_FAILED',
  QR_RESENT: 'QR_RESENT',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED',
  CSV_EXPORTED: 'CSV_EXPORTED',
  EMAIL_SENT_SES: 'EMAIL_SENT_SES',
  EMAIL_SENT_GMAIL: 'EMAIL_SENT_GMAIL',
  EMAIL_FAILED_SES: 'EMAIL_FAILED_SES',
  EMAIL_FAILED_GMAIL: 'EMAIL_FAILED_GMAIL',
  EMAIL_FALLBACK_SUCCESS: 'EMAIL_FALLBACK_SUCCESS'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type EmailStatus = $Enums.EmailStatus

export const EmailStatus: typeof $Enums.EmailStatus

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EventConfigs
 * const eventConfigs = await prisma.eventConfig.findMany()
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
   * // Fetch zero or more EventConfigs
   * const eventConfigs = await prisma.eventConfig.findMany()
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
   * `prisma.eventConfig`: Exposes CRUD operations for the **EventConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventConfigs
    * const eventConfigs = await prisma.eventConfig.findMany()
    * ```
    */
  get eventConfig(): Prisma.EventConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.confirmedSpeaker`: Exposes CRUD operations for the **ConfirmedSpeaker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfirmedSpeakers
    * const confirmedSpeakers = await prisma.confirmedSpeaker.findMany()
    * ```
    */
  get confirmedSpeaker(): Prisma.ConfirmedSpeakerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.confirmedSponsor`: Exposes CRUD operations for the **ConfirmedSponsor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfirmedSponsors
    * const confirmedSponsors = await prisma.confirmedSponsor.findMany()
    * ```
    */
  get confirmedSponsor(): Prisma.ConfirmedSponsorDelegate<ExtArgs, ClientOptions>;
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
    EventConfig: 'EventConfig',
    User: 'User',
    Registration: 'Registration',
    ActivityLog: 'ActivityLog',
    HackathonRegistration: 'HackathonRegistration',
    SponsorEnquiry: 'SponsorEnquiry',
    SpeakerProposal: 'SpeakerProposal',
    ConfirmedSpeaker: 'ConfirmedSpeaker',
    ConfirmedSponsor: 'ConfirmedSponsor'
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
      modelProps: "eventConfig" | "user" | "registration" | "activityLog" | "hackathonRegistration" | "sponsorEnquiry" | "speakerProposal" | "confirmedSpeaker" | "confirmedSponsor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EventConfig: {
        payload: Prisma.$EventConfigPayload<ExtArgs>
        fields: Prisma.EventConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>
          }
          findFirst: {
            args: Prisma.EventConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>
          }
          findMany: {
            args: Prisma.EventConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>[]
          }
          create: {
            args: Prisma.EventConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>
          }
          createMany: {
            args: Prisma.EventConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>[]
          }
          delete: {
            args: Prisma.EventConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>
          }
          update: {
            args: Prisma.EventConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>
          }
          deleteMany: {
            args: Prisma.EventConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>[]
          }
          upsert: {
            args: Prisma.EventConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventConfigPayload>
          }
          aggregate: {
            args: Prisma.EventConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventConfig>
          }
          groupBy: {
            args: Prisma.EventConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventConfigCountArgs<ExtArgs>
            result: $Utils.Optional<EventConfigCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
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
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
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
      ConfirmedSpeaker: {
        payload: Prisma.$ConfirmedSpeakerPayload<ExtArgs>
        fields: Prisma.ConfirmedSpeakerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmedSpeakerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmedSpeakerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>
          }
          findFirst: {
            args: Prisma.ConfirmedSpeakerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmedSpeakerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>
          }
          findMany: {
            args: Prisma.ConfirmedSpeakerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>[]
          }
          create: {
            args: Prisma.ConfirmedSpeakerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>
          }
          createMany: {
            args: Prisma.ConfirmedSpeakerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfirmedSpeakerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>[]
          }
          delete: {
            args: Prisma.ConfirmedSpeakerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>
          }
          update: {
            args: Prisma.ConfirmedSpeakerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>
          }
          deleteMany: {
            args: Prisma.ConfirmedSpeakerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmedSpeakerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfirmedSpeakerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>[]
          }
          upsert: {
            args: Prisma.ConfirmedSpeakerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSpeakerPayload>
          }
          aggregate: {
            args: Prisma.ConfirmedSpeakerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfirmedSpeaker>
          }
          groupBy: {
            args: Prisma.ConfirmedSpeakerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfirmedSpeakerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmedSpeakerCountArgs<ExtArgs>
            result: $Utils.Optional<ConfirmedSpeakerCountAggregateOutputType> | number
          }
        }
      }
      ConfirmedSponsor: {
        payload: Prisma.$ConfirmedSponsorPayload<ExtArgs>
        fields: Prisma.ConfirmedSponsorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmedSponsorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmedSponsorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>
          }
          findFirst: {
            args: Prisma.ConfirmedSponsorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmedSponsorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>
          }
          findMany: {
            args: Prisma.ConfirmedSponsorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>[]
          }
          create: {
            args: Prisma.ConfirmedSponsorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>
          }
          createMany: {
            args: Prisma.ConfirmedSponsorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfirmedSponsorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>[]
          }
          delete: {
            args: Prisma.ConfirmedSponsorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>
          }
          update: {
            args: Prisma.ConfirmedSponsorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>
          }
          deleteMany: {
            args: Prisma.ConfirmedSponsorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmedSponsorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfirmedSponsorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>[]
          }
          upsert: {
            args: Prisma.ConfirmedSponsorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmedSponsorPayload>
          }
          aggregate: {
            args: Prisma.ConfirmedSponsorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfirmedSponsor>
          }
          groupBy: {
            args: Prisma.ConfirmedSponsorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfirmedSponsorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmedSponsorCountArgs<ExtArgs>
            result: $Utils.Optional<ConfirmedSponsorCountAggregateOutputType> | number
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
    eventConfig?: EventConfigOmit
    user?: UserOmit
    registration?: RegistrationOmit
    activityLog?: ActivityLogOmit
    hackathonRegistration?: HackathonRegistrationOmit
    sponsorEnquiry?: SponsorEnquiryOmit
    speakerProposal?: SpeakerProposalOmit
    confirmedSpeaker?: ConfirmedSpeakerOmit
    confirmedSponsor?: ConfirmedSponsorOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EventConfig
   */

  export type AggregateEventConfig = {
    _count: EventConfigCountAggregateOutputType | null
    _min: EventConfigMinAggregateOutputType | null
    _max: EventConfigMaxAggregateOutputType | null
  }

  export type EventConfigMinAggregateOutputType = {
    id: string | null
    eventName: string | null
    registrationPrefix: string | null
    eventDate: Date | null
    registrationsOpen: boolean | null
    goodiesEnabled: boolean | null
    createdAt: Date | null
  }

  export type EventConfigMaxAggregateOutputType = {
    id: string | null
    eventName: string | null
    registrationPrefix: string | null
    eventDate: Date | null
    registrationsOpen: boolean | null
    goodiesEnabled: boolean | null
    createdAt: Date | null
  }

  export type EventConfigCountAggregateOutputType = {
    id: number
    eventName: number
    registrationPrefix: number
    eventDate: number
    registrationsOpen: number
    goodiesEnabled: number
    createdAt: number
    _all: number
  }


  export type EventConfigMinAggregateInputType = {
    id?: true
    eventName?: true
    registrationPrefix?: true
    eventDate?: true
    registrationsOpen?: true
    goodiesEnabled?: true
    createdAt?: true
  }

  export type EventConfigMaxAggregateInputType = {
    id?: true
    eventName?: true
    registrationPrefix?: true
    eventDate?: true
    registrationsOpen?: true
    goodiesEnabled?: true
    createdAt?: true
  }

  export type EventConfigCountAggregateInputType = {
    id?: true
    eventName?: true
    registrationPrefix?: true
    eventDate?: true
    registrationsOpen?: true
    goodiesEnabled?: true
    createdAt?: true
    _all?: true
  }

  export type EventConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventConfig to aggregate.
     */
    where?: EventConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventConfigs to fetch.
     */
    orderBy?: EventConfigOrderByWithRelationInput | EventConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventConfigs
    **/
    _count?: true | EventConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventConfigMaxAggregateInputType
  }

  export type GetEventConfigAggregateType<T extends EventConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateEventConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventConfig[P]>
      : GetScalarType<T[P], AggregateEventConfig[P]>
  }




  export type EventConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventConfigWhereInput
    orderBy?: EventConfigOrderByWithAggregationInput | EventConfigOrderByWithAggregationInput[]
    by: EventConfigScalarFieldEnum[] | EventConfigScalarFieldEnum
    having?: EventConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventConfigCountAggregateInputType | true
    _min?: EventConfigMinAggregateInputType
    _max?: EventConfigMaxAggregateInputType
  }

  export type EventConfigGroupByOutputType = {
    id: string
    eventName: string
    registrationPrefix: string
    eventDate: Date
    registrationsOpen: boolean
    goodiesEnabled: boolean
    createdAt: Date
    _count: EventConfigCountAggregateOutputType | null
    _min: EventConfigMinAggregateOutputType | null
    _max: EventConfigMaxAggregateOutputType | null
  }

  type GetEventConfigGroupByPayload<T extends EventConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventConfigGroupByOutputType[P]>
            : GetScalarType<T[P], EventConfigGroupByOutputType[P]>
        }
      >
    >


  export type EventConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    registrationPrefix?: boolean
    eventDate?: boolean
    registrationsOpen?: boolean
    goodiesEnabled?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["eventConfig"]>

  export type EventConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    registrationPrefix?: boolean
    eventDate?: boolean
    registrationsOpen?: boolean
    goodiesEnabled?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["eventConfig"]>

  export type EventConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventName?: boolean
    registrationPrefix?: boolean
    eventDate?: boolean
    registrationsOpen?: boolean
    goodiesEnabled?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["eventConfig"]>

  export type EventConfigSelectScalar = {
    id?: boolean
    eventName?: boolean
    registrationPrefix?: boolean
    eventDate?: boolean
    registrationsOpen?: boolean
    goodiesEnabled?: boolean
    createdAt?: boolean
  }

  export type EventConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventName" | "registrationPrefix" | "eventDate" | "registrationsOpen" | "goodiesEnabled" | "createdAt", ExtArgs["result"]["eventConfig"]>

  export type $EventConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventName: string
      registrationPrefix: string
      eventDate: Date
      registrationsOpen: boolean
      goodiesEnabled: boolean
      createdAt: Date
    }, ExtArgs["result"]["eventConfig"]>
    composites: {}
  }

  type EventConfigGetPayload<S extends boolean | null | undefined | EventConfigDefaultArgs> = $Result.GetResult<Prisma.$EventConfigPayload, S>

  type EventConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventConfigCountAggregateInputType | true
    }

  export interface EventConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventConfig'], meta: { name: 'EventConfig' } }
    /**
     * Find zero or one EventConfig that matches the filter.
     * @param {EventConfigFindUniqueArgs} args - Arguments to find a EventConfig
     * @example
     * // Get one EventConfig
     * const eventConfig = await prisma.eventConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventConfigFindUniqueArgs>(args: SelectSubset<T, EventConfigFindUniqueArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventConfigFindUniqueOrThrowArgs} args - Arguments to find a EventConfig
     * @example
     * // Get one EventConfig
     * const eventConfig = await prisma.eventConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, EventConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventConfigFindFirstArgs} args - Arguments to find a EventConfig
     * @example
     * // Get one EventConfig
     * const eventConfig = await prisma.eventConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventConfigFindFirstArgs>(args?: SelectSubset<T, EventConfigFindFirstArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventConfigFindFirstOrThrowArgs} args - Arguments to find a EventConfig
     * @example
     * // Get one EventConfig
     * const eventConfig = await prisma.eventConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, EventConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventConfigs
     * const eventConfigs = await prisma.eventConfig.findMany()
     * 
     * // Get first 10 EventConfigs
     * const eventConfigs = await prisma.eventConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventConfigWithIdOnly = await prisma.eventConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventConfigFindManyArgs>(args?: SelectSubset<T, EventConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventConfig.
     * @param {EventConfigCreateArgs} args - Arguments to create a EventConfig.
     * @example
     * // Create one EventConfig
     * const EventConfig = await prisma.eventConfig.create({
     *   data: {
     *     // ... data to create a EventConfig
     *   }
     * })
     * 
     */
    create<T extends EventConfigCreateArgs>(args: SelectSubset<T, EventConfigCreateArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventConfigs.
     * @param {EventConfigCreateManyArgs} args - Arguments to create many EventConfigs.
     * @example
     * // Create many EventConfigs
     * const eventConfig = await prisma.eventConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventConfigCreateManyArgs>(args?: SelectSubset<T, EventConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventConfigs and returns the data saved in the database.
     * @param {EventConfigCreateManyAndReturnArgs} args - Arguments to create many EventConfigs.
     * @example
     * // Create many EventConfigs
     * const eventConfig = await prisma.eventConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventConfigs and only return the `id`
     * const eventConfigWithIdOnly = await prisma.eventConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, EventConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventConfig.
     * @param {EventConfigDeleteArgs} args - Arguments to delete one EventConfig.
     * @example
     * // Delete one EventConfig
     * const EventConfig = await prisma.eventConfig.delete({
     *   where: {
     *     // ... filter to delete one EventConfig
     *   }
     * })
     * 
     */
    delete<T extends EventConfigDeleteArgs>(args: SelectSubset<T, EventConfigDeleteArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventConfig.
     * @param {EventConfigUpdateArgs} args - Arguments to update one EventConfig.
     * @example
     * // Update one EventConfig
     * const eventConfig = await prisma.eventConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventConfigUpdateArgs>(args: SelectSubset<T, EventConfigUpdateArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventConfigs.
     * @param {EventConfigDeleteManyArgs} args - Arguments to filter EventConfigs to delete.
     * @example
     * // Delete a few EventConfigs
     * const { count } = await prisma.eventConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventConfigDeleteManyArgs>(args?: SelectSubset<T, EventConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventConfigs
     * const eventConfig = await prisma.eventConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventConfigUpdateManyArgs>(args: SelectSubset<T, EventConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventConfigs and returns the data updated in the database.
     * @param {EventConfigUpdateManyAndReturnArgs} args - Arguments to update many EventConfigs.
     * @example
     * // Update many EventConfigs
     * const eventConfig = await prisma.eventConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventConfigs and only return the `id`
     * const eventConfigWithIdOnly = await prisma.eventConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, EventConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventConfig.
     * @param {EventConfigUpsertArgs} args - Arguments to update or create a EventConfig.
     * @example
     * // Update or create a EventConfig
     * const eventConfig = await prisma.eventConfig.upsert({
     *   create: {
     *     // ... data to create a EventConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventConfig we want to update
     *   }
     * })
     */
    upsert<T extends EventConfigUpsertArgs>(args: SelectSubset<T, EventConfigUpsertArgs<ExtArgs>>): Prisma__EventConfigClient<$Result.GetResult<Prisma.$EventConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventConfigCountArgs} args - Arguments to filter EventConfigs to count.
     * @example
     * // Count the number of EventConfigs
     * const count = await prisma.eventConfig.count({
     *   where: {
     *     // ... the filter for the EventConfigs we want to count
     *   }
     * })
    **/
    count<T extends EventConfigCountArgs>(
      args?: Subset<T, EventConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventConfigAggregateArgs>(args: Subset<T, EventConfigAggregateArgs>): Prisma.PrismaPromise<GetEventConfigAggregateType<T>>

    /**
     * Group by EventConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventConfigGroupByArgs} args - Group by arguments.
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
      T extends EventConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventConfigGroupByArgs['orderBy'] }
        : { orderBy?: EventConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventConfig model
   */
  readonly fields: EventConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EventConfig model
   */
  interface EventConfigFieldRefs {
    readonly id: FieldRef<"EventConfig", 'String'>
    readonly eventName: FieldRef<"EventConfig", 'String'>
    readonly registrationPrefix: FieldRef<"EventConfig", 'String'>
    readonly eventDate: FieldRef<"EventConfig", 'DateTime'>
    readonly registrationsOpen: FieldRef<"EventConfig", 'Boolean'>
    readonly goodiesEnabled: FieldRef<"EventConfig", 'Boolean'>
    readonly createdAt: FieldRef<"EventConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventConfig findUnique
   */
  export type EventConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * Filter, which EventConfig to fetch.
     */
    where: EventConfigWhereUniqueInput
  }

  /**
   * EventConfig findUniqueOrThrow
   */
  export type EventConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * Filter, which EventConfig to fetch.
     */
    where: EventConfigWhereUniqueInput
  }

  /**
   * EventConfig findFirst
   */
  export type EventConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * Filter, which EventConfig to fetch.
     */
    where?: EventConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventConfigs to fetch.
     */
    orderBy?: EventConfigOrderByWithRelationInput | EventConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventConfigs.
     */
    cursor?: EventConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventConfigs.
     */
    distinct?: EventConfigScalarFieldEnum | EventConfigScalarFieldEnum[]
  }

  /**
   * EventConfig findFirstOrThrow
   */
  export type EventConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * Filter, which EventConfig to fetch.
     */
    where?: EventConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventConfigs to fetch.
     */
    orderBy?: EventConfigOrderByWithRelationInput | EventConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventConfigs.
     */
    cursor?: EventConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventConfigs.
     */
    distinct?: EventConfigScalarFieldEnum | EventConfigScalarFieldEnum[]
  }

  /**
   * EventConfig findMany
   */
  export type EventConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * Filter, which EventConfigs to fetch.
     */
    where?: EventConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventConfigs to fetch.
     */
    orderBy?: EventConfigOrderByWithRelationInput | EventConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventConfigs.
     */
    cursor?: EventConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventConfigs.
     */
    skip?: number
    distinct?: EventConfigScalarFieldEnum | EventConfigScalarFieldEnum[]
  }

  /**
   * EventConfig create
   */
  export type EventConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a EventConfig.
     */
    data: XOR<EventConfigCreateInput, EventConfigUncheckedCreateInput>
  }

  /**
   * EventConfig createMany
   */
  export type EventConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventConfigs.
     */
    data: EventConfigCreateManyInput | EventConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventConfig createManyAndReturn
   */
  export type EventConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * The data used to create many EventConfigs.
     */
    data: EventConfigCreateManyInput | EventConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventConfig update
   */
  export type EventConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a EventConfig.
     */
    data: XOR<EventConfigUpdateInput, EventConfigUncheckedUpdateInput>
    /**
     * Choose, which EventConfig to update.
     */
    where: EventConfigWhereUniqueInput
  }

  /**
   * EventConfig updateMany
   */
  export type EventConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventConfigs.
     */
    data: XOR<EventConfigUpdateManyMutationInput, EventConfigUncheckedUpdateManyInput>
    /**
     * Filter which EventConfigs to update
     */
    where?: EventConfigWhereInput
    /**
     * Limit how many EventConfigs to update.
     */
    limit?: number
  }

  /**
   * EventConfig updateManyAndReturn
   */
  export type EventConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * The data used to update EventConfigs.
     */
    data: XOR<EventConfigUpdateManyMutationInput, EventConfigUncheckedUpdateManyInput>
    /**
     * Filter which EventConfigs to update
     */
    where?: EventConfigWhereInput
    /**
     * Limit how many EventConfigs to update.
     */
    limit?: number
  }

  /**
   * EventConfig upsert
   */
  export type EventConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the EventConfig to update in case it exists.
     */
    where: EventConfigWhereUniqueInput
    /**
     * In case the EventConfig found by the `where` argument doesn't exist, create a new EventConfig with this data.
     */
    create: XOR<EventConfigCreateInput, EventConfigUncheckedCreateInput>
    /**
     * In case the EventConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventConfigUpdateInput, EventConfigUncheckedUpdateInput>
  }

  /**
   * EventConfig delete
   */
  export type EventConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
    /**
     * Filter which EventConfig to delete.
     */
    where: EventConfigWhereUniqueInput
  }

  /**
   * EventConfig deleteMany
   */
  export type EventConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventConfigs to delete
     */
    where?: EventConfigWhereInput
    /**
     * Limit how many EventConfigs to delete.
     */
    limit?: number
  }

  /**
   * EventConfig without action
   */
  export type EventConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventConfig
     */
    select?: EventConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventConfig
     */
    omit?: EventConfigOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    organization: string | null
    designation: string | null
    city: string | null
    avatar: string | null
    isActive: boolean | null
    mustChangePassword: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    organization: string | null
    designation: string | null
    city: string | null
    avatar: string | null
    isActive: boolean | null
    mustChangePassword: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    passwordHash: number
    role: number
    organization: number
    designation: number
    city: number
    avatar: number
    isActive: number
    mustChangePassword: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    organization?: true
    designation?: true
    city?: true
    avatar?: true
    isActive?: true
    mustChangePassword?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    organization?: true
    designation?: true
    city?: true
    avatar?: true
    isActive?: true
    mustChangePassword?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    organization?: true
    designation?: true
    city?: true
    avatar?: true
    isActive?: true
    mustChangePassword?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    passwordHash: string | null
    role: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive: boolean
    mustChangePassword: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    avatar?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    registration?: boolean | User$registrationArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    avatar?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    avatar?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    organization?: boolean
    designation?: boolean
    city?: boolean
    avatar?: boolean
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "role" | "organization" | "designation" | "city" | "avatar" | "isActive" | "mustChangePassword" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | User$registrationArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      registration: Prisma.$RegistrationPayload<ExtArgs> | null
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      passwordHash: string | null
      role: $Enums.UserRole
      organization: string
      designation: string
      city: string
      avatar: string
      isActive: boolean
      mustChangePassword: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registration<T extends User$registrationArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly organization: FieldRef<"User", 'String'>
    readonly designation: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly mustChangePassword: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.registration
   */
  export type User$registrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    registrationCode: string | null
    qrToken: string | null
    entryVerified: boolean | null
    entryVerifiedAt: Date | null
    goodiesVerified: boolean | null
    goodiesVerifiedAt: Date | null
    emailStatus: $Enums.EmailStatus | null
    emailSentAt: Date | null
    emailProvider: string | null
    lastEmailAttemptAt: Date | null
    lastEmailError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    registrationCode: string | null
    qrToken: string | null
    entryVerified: boolean | null
    entryVerifiedAt: Date | null
    goodiesVerified: boolean | null
    goodiesVerifiedAt: Date | null
    emailStatus: $Enums.EmailStatus | null
    emailSentAt: Date | null
    emailProvider: string | null
    lastEmailAttemptAt: Date | null
    lastEmailError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    userId: number
    registrationCode: number
    qrToken: number
    entryVerified: number
    entryVerifiedAt: number
    goodiesVerified: number
    goodiesVerifiedAt: number
    emailStatus: number
    emailSentAt: number
    emailProvider: number
    lastEmailAttemptAt: number
    lastEmailError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegistrationMinAggregateInputType = {
    id?: true
    userId?: true
    registrationCode?: true
    qrToken?: true
    entryVerified?: true
    entryVerifiedAt?: true
    goodiesVerified?: true
    goodiesVerifiedAt?: true
    emailStatus?: true
    emailSentAt?: true
    emailProvider?: true
    lastEmailAttemptAt?: true
    lastEmailError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    userId?: true
    registrationCode?: true
    qrToken?: true
    entryVerified?: true
    entryVerifiedAt?: true
    goodiesVerified?: true
    goodiesVerifiedAt?: true
    emailStatus?: true
    emailSentAt?: true
    emailProvider?: true
    lastEmailAttemptAt?: true
    lastEmailError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    userId?: true
    registrationCode?: true
    qrToken?: true
    entryVerified?: true
    entryVerifiedAt?: true
    goodiesVerified?: true
    goodiesVerifiedAt?: true
    emailStatus?: true
    emailSentAt?: true
    emailProvider?: true
    lastEmailAttemptAt?: true
    lastEmailError?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: string
    userId: string
    registrationCode: string
    qrToken: string
    entryVerified: boolean
    entryVerifiedAt: Date | null
    goodiesVerified: boolean
    goodiesVerifiedAt: Date | null
    emailStatus: $Enums.EmailStatus
    emailSentAt: Date | null
    emailProvider: string | null
    lastEmailAttemptAt: Date | null
    lastEmailError: string | null
    createdAt: Date
    updatedAt: Date
    _count: RegistrationCountAggregateOutputType | null
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
    userId?: boolean
    registrationCode?: boolean
    qrToken?: boolean
    entryVerified?: boolean
    entryVerifiedAt?: boolean
    goodiesVerified?: boolean
    goodiesVerifiedAt?: boolean
    emailStatus?: boolean
    emailSentAt?: boolean
    emailProvider?: boolean
    lastEmailAttemptAt?: boolean
    lastEmailError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registrationCode?: boolean
    qrToken?: boolean
    entryVerified?: boolean
    entryVerifiedAt?: boolean
    goodiesVerified?: boolean
    goodiesVerifiedAt?: boolean
    emailStatus?: boolean
    emailSentAt?: boolean
    emailProvider?: boolean
    lastEmailAttemptAt?: boolean
    lastEmailError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registrationCode?: boolean
    qrToken?: boolean
    entryVerified?: boolean
    entryVerifiedAt?: boolean
    goodiesVerified?: boolean
    goodiesVerifiedAt?: boolean
    emailStatus?: boolean
    emailSentAt?: boolean
    emailProvider?: boolean
    lastEmailAttemptAt?: boolean
    lastEmailError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectScalar = {
    id?: boolean
    userId?: boolean
    registrationCode?: boolean
    qrToken?: boolean
    entryVerified?: boolean
    entryVerifiedAt?: boolean
    goodiesVerified?: boolean
    goodiesVerifiedAt?: boolean
    emailStatus?: boolean
    emailSentAt?: boolean
    emailProvider?: boolean
    lastEmailAttemptAt?: boolean
    lastEmailError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "registrationCode" | "qrToken" | "entryVerified" | "entryVerifiedAt" | "goodiesVerified" | "goodiesVerifiedAt" | "emailStatus" | "emailSentAt" | "emailProvider" | "lastEmailAttemptAt" | "lastEmailError" | "createdAt" | "updatedAt", ExtArgs["result"]["registration"]>
  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      registrationCode: string
      qrToken: string
      entryVerified: boolean
      entryVerifiedAt: Date | null
      goodiesVerified: boolean
      goodiesVerifiedAt: Date | null
      emailStatus: $Enums.EmailStatus
      emailSentAt: Date | null
      emailProvider: string | null
      lastEmailAttemptAt: Date | null
      lastEmailError: string | null
      createdAt: Date
      updatedAt: Date
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Registration", 'String'>
    readonly userId: FieldRef<"Registration", 'String'>
    readonly registrationCode: FieldRef<"Registration", 'String'>
    readonly qrToken: FieldRef<"Registration", 'String'>
    readonly entryVerified: FieldRef<"Registration", 'Boolean'>
    readonly entryVerifiedAt: FieldRef<"Registration", 'DateTime'>
    readonly goodiesVerified: FieldRef<"Registration", 'Boolean'>
    readonly goodiesVerifiedAt: FieldRef<"Registration", 'DateTime'>
    readonly emailStatus: FieldRef<"Registration", 'EmailStatus'>
    readonly emailSentAt: FieldRef<"Registration", 'DateTime'>
    readonly emailProvider: FieldRef<"Registration", 'String'>
    readonly lastEmailAttemptAt: FieldRef<"Registration", 'DateTime'>
    readonly lastEmailError: FieldRef<"Registration", 'String'>
    readonly createdAt: FieldRef<"Registration", 'DateTime'>
    readonly updatedAt: FieldRef<"Registration", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: $Enums.ActivityType | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: $Enums.ActivityType | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string | null
    action: $Enums.ActivityType
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: $Enums.ActivityType
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'ActivityType'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model HackathonRegistration
   */

  export type AggregateHackathonRegistration = {
    _count: HackathonRegistrationCountAggregateOutputType | null
    _min: HackathonRegistrationMinAggregateOutputType | null
    _max: HackathonRegistrationMaxAggregateOutputType | null
  }

  export type HackathonRegistrationMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    college: string | null
    team: string | null
    domain: string | null
    size: string | null
    status: string | null
    createdAt: Date | null
  }

  export type HackathonRegistrationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    college: string | null
    team: string | null
    domain: string | null
    size: string | null
    status: string | null
    createdAt: Date | null
  }

  export type HackathonRegistrationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    college: number
    team: number
    domain: number
    size: number
    status: number
    createdAt: number
    _all: number
  }


  export type HackathonRegistrationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    college?: true
    team?: true
    domain?: true
    size?: true
    status?: true
    createdAt?: true
  }

  export type HackathonRegistrationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    college?: true
    team?: true
    domain?: true
    size?: true
    status?: true
    createdAt?: true
  }

  export type HackathonRegistrationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    college?: true
    team?: true
    domain?: true
    size?: true
    status?: true
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
    _min?: HackathonRegistrationMinAggregateInputType
    _max?: HackathonRegistrationMaxAggregateInputType
  }

  export type HackathonRegistrationGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    college: string
    team: string
    domain: string
    size: string
    status: string
    createdAt: Date
    _count: HackathonRegistrationCountAggregateOutputType | null
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
    phone?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hackathonRegistration"]>

  export type HackathonRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hackathonRegistration"]>

  export type HackathonRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hackathonRegistration"]>

  export type HackathonRegistrationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    college?: boolean
    team?: boolean
    domain?: boolean
    size?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type HackathonRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "college" | "team" | "domain" | "size" | "status" | "createdAt", ExtArgs["result"]["hackathonRegistration"]>

  export type $HackathonRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HackathonRegistration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      college: string
      team: string
      domain: string
      size: string
      status: string
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
    readonly id: FieldRef<"HackathonRegistration", 'String'>
    readonly name: FieldRef<"HackathonRegistration", 'String'>
    readonly email: FieldRef<"HackathonRegistration", 'String'>
    readonly phone: FieldRef<"HackathonRegistration", 'String'>
    readonly college: FieldRef<"HackathonRegistration", 'String'>
    readonly team: FieldRef<"HackathonRegistration", 'String'>
    readonly domain: FieldRef<"HackathonRegistration", 'String'>
    readonly size: FieldRef<"HackathonRegistration", 'String'>
    readonly status: FieldRef<"HackathonRegistration", 'String'>
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
    _min: SponsorEnquiryMinAggregateOutputType | null
    _max: SponsorEnquiryMaxAggregateOutputType | null
  }

  export type SponsorEnquiryMinAggregateOutputType = {
    id: string | null
    company: string | null
    contact: string | null
    contactNumber: string | null
    alternateNumber: string | null
    email: string | null
    tier: string | null
    message: string | null
    logoUrl: string | null
    confirmed: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SponsorEnquiryMaxAggregateOutputType = {
    id: string | null
    company: string | null
    contact: string | null
    contactNumber: string | null
    alternateNumber: string | null
    email: string | null
    tier: string | null
    message: string | null
    logoUrl: string | null
    confirmed: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
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
    logoUrl: number
    confirmed: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
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
    logoUrl?: true
    confirmed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    logoUrl?: true
    confirmed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    logoUrl?: true
    confirmed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: SponsorEnquiryMinAggregateInputType
    _max?: SponsorEnquiryMaxAggregateInputType
  }

  export type SponsorEnquiryGroupByOutputType = {
    id: string
    company: string
    contact: string
    contactNumber: string | null
    alternateNumber: string | null
    email: string
    tier: string
    message: string | null
    logoUrl: string | null
    confirmed: boolean
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SponsorEnquiryCountAggregateOutputType | null
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
    logoUrl?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    logoUrl?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    logoUrl?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    logoUrl?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SponsorEnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "contact" | "contactNumber" | "alternateNumber" | "email" | "tier" | "message" | "logoUrl" | "confirmed" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["sponsorEnquiry"]>

  export type $SponsorEnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SponsorEnquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      contact: string
      contactNumber: string | null
      alternateNumber: string | null
      email: string
      tier: string
      message: string | null
      logoUrl: string | null
      confirmed: boolean
      status: string
      createdAt: Date
      updatedAt: Date
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
    readonly id: FieldRef<"SponsorEnquiry", 'String'>
    readonly company: FieldRef<"SponsorEnquiry", 'String'>
    readonly contact: FieldRef<"SponsorEnquiry", 'String'>
    readonly contactNumber: FieldRef<"SponsorEnquiry", 'String'>
    readonly alternateNumber: FieldRef<"SponsorEnquiry", 'String'>
    readonly email: FieldRef<"SponsorEnquiry", 'String'>
    readonly tier: FieldRef<"SponsorEnquiry", 'String'>
    readonly message: FieldRef<"SponsorEnquiry", 'String'>
    readonly logoUrl: FieldRef<"SponsorEnquiry", 'String'>
    readonly confirmed: FieldRef<"SponsorEnquiry", 'Boolean'>
    readonly status: FieldRef<"SponsorEnquiry", 'String'>
    readonly createdAt: FieldRef<"SponsorEnquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"SponsorEnquiry", 'DateTime'>
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
    _min: SpeakerProposalMinAggregateOutputType | null
    _max: SpeakerProposalMaxAggregateOutputType | null
  }

  export type SpeakerProposalMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    company: string | null
    topic: string | null
    abstract: string | null
    photoUrl: string | null
    bio: string | null
    confirmed: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakerProposalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: string | null
    company: string | null
    topic: string | null
    abstract: string | null
    photoUrl: string | null
    bio: string | null
    confirmed: boolean | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpeakerProposalCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    role: number
    company: number
    topic: number
    abstract: number
    photoUrl: number
    bio: number
    confirmed: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpeakerProposalMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    company?: true
    topic?: true
    abstract?: true
    photoUrl?: true
    bio?: true
    confirmed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakerProposalMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    company?: true
    topic?: true
    abstract?: true
    photoUrl?: true
    bio?: true
    confirmed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpeakerProposalCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    company?: true
    topic?: true
    abstract?: true
    photoUrl?: true
    bio?: true
    confirmed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: SpeakerProposalMinAggregateInputType
    _max?: SpeakerProposalMaxAggregateInputType
  }

  export type SpeakerProposalGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    role: string | null
    company: string | null
    topic: string
    abstract: string
    photoUrl: string | null
    bio: string | null
    confirmed: boolean
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SpeakerProposalCountAggregateOutputType | null
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
    phone?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    abstract?: boolean
    photoUrl?: boolean
    bio?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["speakerProposal"]>

  export type SpeakerProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    abstract?: boolean
    photoUrl?: boolean
    bio?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["speakerProposal"]>

  export type SpeakerProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    abstract?: boolean
    photoUrl?: boolean
    bio?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["speakerProposal"]>

  export type SpeakerProposalSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    abstract?: boolean
    photoUrl?: boolean
    bio?: boolean
    confirmed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpeakerProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "role" | "company" | "topic" | "abstract" | "photoUrl" | "bio" | "confirmed" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["speakerProposal"]>

  export type $SpeakerProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeakerProposal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      role: string | null
      company: string | null
      topic: string
      abstract: string
      photoUrl: string | null
      bio: string | null
      confirmed: boolean
      status: string
      createdAt: Date
      updatedAt: Date
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
    readonly id: FieldRef<"SpeakerProposal", 'String'>
    readonly name: FieldRef<"SpeakerProposal", 'String'>
    readonly email: FieldRef<"SpeakerProposal", 'String'>
    readonly phone: FieldRef<"SpeakerProposal", 'String'>
    readonly role: FieldRef<"SpeakerProposal", 'String'>
    readonly company: FieldRef<"SpeakerProposal", 'String'>
    readonly topic: FieldRef<"SpeakerProposal", 'String'>
    readonly abstract: FieldRef<"SpeakerProposal", 'String'>
    readonly photoUrl: FieldRef<"SpeakerProposal", 'String'>
    readonly bio: FieldRef<"SpeakerProposal", 'String'>
    readonly confirmed: FieldRef<"SpeakerProposal", 'Boolean'>
    readonly status: FieldRef<"SpeakerProposal", 'String'>
    readonly createdAt: FieldRef<"SpeakerProposal", 'DateTime'>
    readonly updatedAt: FieldRef<"SpeakerProposal", 'DateTime'>
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
   * Model ConfirmedSpeaker
   */

  export type AggregateConfirmedSpeaker = {
    _count: ConfirmedSpeakerCountAggregateOutputType | null
    _avg: ConfirmedSpeakerAvgAggregateOutputType | null
    _sum: ConfirmedSpeakerSumAggregateOutputType | null
    _min: ConfirmedSpeakerMinAggregateOutputType | null
    _max: ConfirmedSpeakerMaxAggregateOutputType | null
  }

  export type ConfirmedSpeakerAvgAggregateOutputType = {
    order: number | null
  }

  export type ConfirmedSpeakerSumAggregateOutputType = {
    order: number | null
  }

  export type ConfirmedSpeakerMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    company: string | null
    topic: string | null
    bio: string | null
    image: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfirmedSpeakerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    company: string | null
    topic: string | null
    bio: string | null
    image: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfirmedSpeakerCountAggregateOutputType = {
    id: number
    name: number
    role: number
    company: number
    topic: number
    bio: number
    image: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfirmedSpeakerAvgAggregateInputType = {
    order?: true
  }

  export type ConfirmedSpeakerSumAggregateInputType = {
    order?: true
  }

  export type ConfirmedSpeakerMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    company?: true
    topic?: true
    bio?: true
    image?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfirmedSpeakerMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    company?: true
    topic?: true
    bio?: true
    image?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfirmedSpeakerCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    company?: true
    topic?: true
    bio?: true
    image?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfirmedSpeakerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmedSpeaker to aggregate.
     */
    where?: ConfirmedSpeakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSpeakers to fetch.
     */
    orderBy?: ConfirmedSpeakerOrderByWithRelationInput | ConfirmedSpeakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmedSpeakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSpeakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSpeakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfirmedSpeakers
    **/
    _count?: true | ConfirmedSpeakerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfirmedSpeakerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfirmedSpeakerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmedSpeakerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmedSpeakerMaxAggregateInputType
  }

  export type GetConfirmedSpeakerAggregateType<T extends ConfirmedSpeakerAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirmedSpeaker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirmedSpeaker[P]>
      : GetScalarType<T[P], AggregateConfirmedSpeaker[P]>
  }




  export type ConfirmedSpeakerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmedSpeakerWhereInput
    orderBy?: ConfirmedSpeakerOrderByWithAggregationInput | ConfirmedSpeakerOrderByWithAggregationInput[]
    by: ConfirmedSpeakerScalarFieldEnum[] | ConfirmedSpeakerScalarFieldEnum
    having?: ConfirmedSpeakerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmedSpeakerCountAggregateInputType | true
    _avg?: ConfirmedSpeakerAvgAggregateInputType
    _sum?: ConfirmedSpeakerSumAggregateInputType
    _min?: ConfirmedSpeakerMinAggregateInputType
    _max?: ConfirmedSpeakerMaxAggregateInputType
  }

  export type ConfirmedSpeakerGroupByOutputType = {
    id: string
    name: string
    role: string
    company: string
    topic: string
    bio: string | null
    image: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ConfirmedSpeakerCountAggregateOutputType | null
    _avg: ConfirmedSpeakerAvgAggregateOutputType | null
    _sum: ConfirmedSpeakerSumAggregateOutputType | null
    _min: ConfirmedSpeakerMinAggregateOutputType | null
    _max: ConfirmedSpeakerMaxAggregateOutputType | null
  }

  type GetConfirmedSpeakerGroupByPayload<T extends ConfirmedSpeakerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmedSpeakerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmedSpeakerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmedSpeakerGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmedSpeakerGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmedSpeakerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    bio?: boolean
    image?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confirmedSpeaker"]>

  export type ConfirmedSpeakerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    bio?: boolean
    image?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confirmedSpeaker"]>

  export type ConfirmedSpeakerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    bio?: boolean
    image?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confirmedSpeaker"]>

  export type ConfirmedSpeakerSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    company?: boolean
    topic?: boolean
    bio?: boolean
    image?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfirmedSpeakerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "company" | "topic" | "bio" | "image" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["confirmedSpeaker"]>

  export type $ConfirmedSpeakerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfirmedSpeaker"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      role: string
      company: string
      topic: string
      bio: string | null
      image: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["confirmedSpeaker"]>
    composites: {}
  }

  type ConfirmedSpeakerGetPayload<S extends boolean | null | undefined | ConfirmedSpeakerDefaultArgs> = $Result.GetResult<Prisma.$ConfirmedSpeakerPayload, S>

  type ConfirmedSpeakerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfirmedSpeakerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfirmedSpeakerCountAggregateInputType | true
    }

  export interface ConfirmedSpeakerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfirmedSpeaker'], meta: { name: 'ConfirmedSpeaker' } }
    /**
     * Find zero or one ConfirmedSpeaker that matches the filter.
     * @param {ConfirmedSpeakerFindUniqueArgs} args - Arguments to find a ConfirmedSpeaker
     * @example
     * // Get one ConfirmedSpeaker
     * const confirmedSpeaker = await prisma.confirmedSpeaker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfirmedSpeakerFindUniqueArgs>(args: SelectSubset<T, ConfirmedSpeakerFindUniqueArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfirmedSpeaker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfirmedSpeakerFindUniqueOrThrowArgs} args - Arguments to find a ConfirmedSpeaker
     * @example
     * // Get one ConfirmedSpeaker
     * const confirmedSpeaker = await prisma.confirmedSpeaker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfirmedSpeakerFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfirmedSpeakerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmedSpeaker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSpeakerFindFirstArgs} args - Arguments to find a ConfirmedSpeaker
     * @example
     * // Get one ConfirmedSpeaker
     * const confirmedSpeaker = await prisma.confirmedSpeaker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfirmedSpeakerFindFirstArgs>(args?: SelectSubset<T, ConfirmedSpeakerFindFirstArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmedSpeaker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSpeakerFindFirstOrThrowArgs} args - Arguments to find a ConfirmedSpeaker
     * @example
     * // Get one ConfirmedSpeaker
     * const confirmedSpeaker = await prisma.confirmedSpeaker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfirmedSpeakerFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfirmedSpeakerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfirmedSpeakers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSpeakerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfirmedSpeakers
     * const confirmedSpeakers = await prisma.confirmedSpeaker.findMany()
     * 
     * // Get first 10 ConfirmedSpeakers
     * const confirmedSpeakers = await prisma.confirmedSpeaker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const confirmedSpeakerWithIdOnly = await prisma.confirmedSpeaker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfirmedSpeakerFindManyArgs>(args?: SelectSubset<T, ConfirmedSpeakerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfirmedSpeaker.
     * @param {ConfirmedSpeakerCreateArgs} args - Arguments to create a ConfirmedSpeaker.
     * @example
     * // Create one ConfirmedSpeaker
     * const ConfirmedSpeaker = await prisma.confirmedSpeaker.create({
     *   data: {
     *     // ... data to create a ConfirmedSpeaker
     *   }
     * })
     * 
     */
    create<T extends ConfirmedSpeakerCreateArgs>(args: SelectSubset<T, ConfirmedSpeakerCreateArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfirmedSpeakers.
     * @param {ConfirmedSpeakerCreateManyArgs} args - Arguments to create many ConfirmedSpeakers.
     * @example
     * // Create many ConfirmedSpeakers
     * const confirmedSpeaker = await prisma.confirmedSpeaker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfirmedSpeakerCreateManyArgs>(args?: SelectSubset<T, ConfirmedSpeakerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfirmedSpeakers and returns the data saved in the database.
     * @param {ConfirmedSpeakerCreateManyAndReturnArgs} args - Arguments to create many ConfirmedSpeakers.
     * @example
     * // Create many ConfirmedSpeakers
     * const confirmedSpeaker = await prisma.confirmedSpeaker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfirmedSpeakers and only return the `id`
     * const confirmedSpeakerWithIdOnly = await prisma.confirmedSpeaker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfirmedSpeakerCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfirmedSpeakerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfirmedSpeaker.
     * @param {ConfirmedSpeakerDeleteArgs} args - Arguments to delete one ConfirmedSpeaker.
     * @example
     * // Delete one ConfirmedSpeaker
     * const ConfirmedSpeaker = await prisma.confirmedSpeaker.delete({
     *   where: {
     *     // ... filter to delete one ConfirmedSpeaker
     *   }
     * })
     * 
     */
    delete<T extends ConfirmedSpeakerDeleteArgs>(args: SelectSubset<T, ConfirmedSpeakerDeleteArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfirmedSpeaker.
     * @param {ConfirmedSpeakerUpdateArgs} args - Arguments to update one ConfirmedSpeaker.
     * @example
     * // Update one ConfirmedSpeaker
     * const confirmedSpeaker = await prisma.confirmedSpeaker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfirmedSpeakerUpdateArgs>(args: SelectSubset<T, ConfirmedSpeakerUpdateArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfirmedSpeakers.
     * @param {ConfirmedSpeakerDeleteManyArgs} args - Arguments to filter ConfirmedSpeakers to delete.
     * @example
     * // Delete a few ConfirmedSpeakers
     * const { count } = await prisma.confirmedSpeaker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfirmedSpeakerDeleteManyArgs>(args?: SelectSubset<T, ConfirmedSpeakerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmedSpeakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSpeakerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfirmedSpeakers
     * const confirmedSpeaker = await prisma.confirmedSpeaker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfirmedSpeakerUpdateManyArgs>(args: SelectSubset<T, ConfirmedSpeakerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmedSpeakers and returns the data updated in the database.
     * @param {ConfirmedSpeakerUpdateManyAndReturnArgs} args - Arguments to update many ConfirmedSpeakers.
     * @example
     * // Update many ConfirmedSpeakers
     * const confirmedSpeaker = await prisma.confirmedSpeaker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfirmedSpeakers and only return the `id`
     * const confirmedSpeakerWithIdOnly = await prisma.confirmedSpeaker.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfirmedSpeakerUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfirmedSpeakerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfirmedSpeaker.
     * @param {ConfirmedSpeakerUpsertArgs} args - Arguments to update or create a ConfirmedSpeaker.
     * @example
     * // Update or create a ConfirmedSpeaker
     * const confirmedSpeaker = await prisma.confirmedSpeaker.upsert({
     *   create: {
     *     // ... data to create a ConfirmedSpeaker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfirmedSpeaker we want to update
     *   }
     * })
     */
    upsert<T extends ConfirmedSpeakerUpsertArgs>(args: SelectSubset<T, ConfirmedSpeakerUpsertArgs<ExtArgs>>): Prisma__ConfirmedSpeakerClient<$Result.GetResult<Prisma.$ConfirmedSpeakerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfirmedSpeakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSpeakerCountArgs} args - Arguments to filter ConfirmedSpeakers to count.
     * @example
     * // Count the number of ConfirmedSpeakers
     * const count = await prisma.confirmedSpeaker.count({
     *   where: {
     *     // ... the filter for the ConfirmedSpeakers we want to count
     *   }
     * })
    **/
    count<T extends ConfirmedSpeakerCountArgs>(
      args?: Subset<T, ConfirmedSpeakerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmedSpeakerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfirmedSpeaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSpeakerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfirmedSpeakerAggregateArgs>(args: Subset<T, ConfirmedSpeakerAggregateArgs>): Prisma.PrismaPromise<GetConfirmedSpeakerAggregateType<T>>

    /**
     * Group by ConfirmedSpeaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSpeakerGroupByArgs} args - Group by arguments.
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
      T extends ConfirmedSpeakerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmedSpeakerGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmedSpeakerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfirmedSpeakerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmedSpeakerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfirmedSpeaker model
   */
  readonly fields: ConfirmedSpeakerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfirmedSpeaker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmedSpeakerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ConfirmedSpeaker model
   */
  interface ConfirmedSpeakerFieldRefs {
    readonly id: FieldRef<"ConfirmedSpeaker", 'String'>
    readonly name: FieldRef<"ConfirmedSpeaker", 'String'>
    readonly role: FieldRef<"ConfirmedSpeaker", 'String'>
    readonly company: FieldRef<"ConfirmedSpeaker", 'String'>
    readonly topic: FieldRef<"ConfirmedSpeaker", 'String'>
    readonly bio: FieldRef<"ConfirmedSpeaker", 'String'>
    readonly image: FieldRef<"ConfirmedSpeaker", 'String'>
    readonly order: FieldRef<"ConfirmedSpeaker", 'Int'>
    readonly createdAt: FieldRef<"ConfirmedSpeaker", 'DateTime'>
    readonly updatedAt: FieldRef<"ConfirmedSpeaker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConfirmedSpeaker findUnique
   */
  export type ConfirmedSpeakerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSpeaker to fetch.
     */
    where: ConfirmedSpeakerWhereUniqueInput
  }

  /**
   * ConfirmedSpeaker findUniqueOrThrow
   */
  export type ConfirmedSpeakerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSpeaker to fetch.
     */
    where: ConfirmedSpeakerWhereUniqueInput
  }

  /**
   * ConfirmedSpeaker findFirst
   */
  export type ConfirmedSpeakerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSpeaker to fetch.
     */
    where?: ConfirmedSpeakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSpeakers to fetch.
     */
    orderBy?: ConfirmedSpeakerOrderByWithRelationInput | ConfirmedSpeakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmedSpeakers.
     */
    cursor?: ConfirmedSpeakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSpeakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSpeakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmedSpeakers.
     */
    distinct?: ConfirmedSpeakerScalarFieldEnum | ConfirmedSpeakerScalarFieldEnum[]
  }

  /**
   * ConfirmedSpeaker findFirstOrThrow
   */
  export type ConfirmedSpeakerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSpeaker to fetch.
     */
    where?: ConfirmedSpeakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSpeakers to fetch.
     */
    orderBy?: ConfirmedSpeakerOrderByWithRelationInput | ConfirmedSpeakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmedSpeakers.
     */
    cursor?: ConfirmedSpeakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSpeakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSpeakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmedSpeakers.
     */
    distinct?: ConfirmedSpeakerScalarFieldEnum | ConfirmedSpeakerScalarFieldEnum[]
  }

  /**
   * ConfirmedSpeaker findMany
   */
  export type ConfirmedSpeakerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSpeakers to fetch.
     */
    where?: ConfirmedSpeakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSpeakers to fetch.
     */
    orderBy?: ConfirmedSpeakerOrderByWithRelationInput | ConfirmedSpeakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfirmedSpeakers.
     */
    cursor?: ConfirmedSpeakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSpeakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSpeakers.
     */
    skip?: number
    distinct?: ConfirmedSpeakerScalarFieldEnum | ConfirmedSpeakerScalarFieldEnum[]
  }

  /**
   * ConfirmedSpeaker create
   */
  export type ConfirmedSpeakerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * The data needed to create a ConfirmedSpeaker.
     */
    data: XOR<ConfirmedSpeakerCreateInput, ConfirmedSpeakerUncheckedCreateInput>
  }

  /**
   * ConfirmedSpeaker createMany
   */
  export type ConfirmedSpeakerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfirmedSpeakers.
     */
    data: ConfirmedSpeakerCreateManyInput | ConfirmedSpeakerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmedSpeaker createManyAndReturn
   */
  export type ConfirmedSpeakerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * The data used to create many ConfirmedSpeakers.
     */
    data: ConfirmedSpeakerCreateManyInput | ConfirmedSpeakerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmedSpeaker update
   */
  export type ConfirmedSpeakerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * The data needed to update a ConfirmedSpeaker.
     */
    data: XOR<ConfirmedSpeakerUpdateInput, ConfirmedSpeakerUncheckedUpdateInput>
    /**
     * Choose, which ConfirmedSpeaker to update.
     */
    where: ConfirmedSpeakerWhereUniqueInput
  }

  /**
   * ConfirmedSpeaker updateMany
   */
  export type ConfirmedSpeakerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfirmedSpeakers.
     */
    data: XOR<ConfirmedSpeakerUpdateManyMutationInput, ConfirmedSpeakerUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmedSpeakers to update
     */
    where?: ConfirmedSpeakerWhereInput
    /**
     * Limit how many ConfirmedSpeakers to update.
     */
    limit?: number
  }

  /**
   * ConfirmedSpeaker updateManyAndReturn
   */
  export type ConfirmedSpeakerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * The data used to update ConfirmedSpeakers.
     */
    data: XOR<ConfirmedSpeakerUpdateManyMutationInput, ConfirmedSpeakerUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmedSpeakers to update
     */
    where?: ConfirmedSpeakerWhereInput
    /**
     * Limit how many ConfirmedSpeakers to update.
     */
    limit?: number
  }

  /**
   * ConfirmedSpeaker upsert
   */
  export type ConfirmedSpeakerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * The filter to search for the ConfirmedSpeaker to update in case it exists.
     */
    where: ConfirmedSpeakerWhereUniqueInput
    /**
     * In case the ConfirmedSpeaker found by the `where` argument doesn't exist, create a new ConfirmedSpeaker with this data.
     */
    create: XOR<ConfirmedSpeakerCreateInput, ConfirmedSpeakerUncheckedCreateInput>
    /**
     * In case the ConfirmedSpeaker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmedSpeakerUpdateInput, ConfirmedSpeakerUncheckedUpdateInput>
  }

  /**
   * ConfirmedSpeaker delete
   */
  export type ConfirmedSpeakerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
    /**
     * Filter which ConfirmedSpeaker to delete.
     */
    where: ConfirmedSpeakerWhereUniqueInput
  }

  /**
   * ConfirmedSpeaker deleteMany
   */
  export type ConfirmedSpeakerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmedSpeakers to delete
     */
    where?: ConfirmedSpeakerWhereInput
    /**
     * Limit how many ConfirmedSpeakers to delete.
     */
    limit?: number
  }

  /**
   * ConfirmedSpeaker without action
   */
  export type ConfirmedSpeakerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSpeaker
     */
    select?: ConfirmedSpeakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSpeaker
     */
    omit?: ConfirmedSpeakerOmit<ExtArgs> | null
  }


  /**
   * Model ConfirmedSponsor
   */

  export type AggregateConfirmedSponsor = {
    _count: ConfirmedSponsorCountAggregateOutputType | null
    _avg: ConfirmedSponsorAvgAggregateOutputType | null
    _sum: ConfirmedSponsorSumAggregateOutputType | null
    _min: ConfirmedSponsorMinAggregateOutputType | null
    _max: ConfirmedSponsorMaxAggregateOutputType | null
  }

  export type ConfirmedSponsorAvgAggregateOutputType = {
    order: number | null
  }

  export type ConfirmedSponsorSumAggregateOutputType = {
    order: number | null
  }

  export type ConfirmedSponsorMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    logo: string | null
    tier: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfirmedSponsorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    logo: string | null
    tier: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfirmedSponsorCountAggregateOutputType = {
    id: number
    name: number
    category: number
    logo: number
    tier: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfirmedSponsorAvgAggregateInputType = {
    order?: true
  }

  export type ConfirmedSponsorSumAggregateInputType = {
    order?: true
  }

  export type ConfirmedSponsorMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    logo?: true
    tier?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfirmedSponsorMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    logo?: true
    tier?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfirmedSponsorCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    logo?: true
    tier?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfirmedSponsorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmedSponsor to aggregate.
     */
    where?: ConfirmedSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSponsors to fetch.
     */
    orderBy?: ConfirmedSponsorOrderByWithRelationInput | ConfirmedSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmedSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfirmedSponsors
    **/
    _count?: true | ConfirmedSponsorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfirmedSponsorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfirmedSponsorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmedSponsorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmedSponsorMaxAggregateInputType
  }

  export type GetConfirmedSponsorAggregateType<T extends ConfirmedSponsorAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirmedSponsor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirmedSponsor[P]>
      : GetScalarType<T[P], AggregateConfirmedSponsor[P]>
  }




  export type ConfirmedSponsorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmedSponsorWhereInput
    orderBy?: ConfirmedSponsorOrderByWithAggregationInput | ConfirmedSponsorOrderByWithAggregationInput[]
    by: ConfirmedSponsorScalarFieldEnum[] | ConfirmedSponsorScalarFieldEnum
    having?: ConfirmedSponsorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmedSponsorCountAggregateInputType | true
    _avg?: ConfirmedSponsorAvgAggregateInputType
    _sum?: ConfirmedSponsorSumAggregateInputType
    _min?: ConfirmedSponsorMinAggregateInputType
    _max?: ConfirmedSponsorMaxAggregateInputType
  }

  export type ConfirmedSponsorGroupByOutputType = {
    id: string
    name: string
    category: string
    logo: string | null
    tier: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ConfirmedSponsorCountAggregateOutputType | null
    _avg: ConfirmedSponsorAvgAggregateOutputType | null
    _sum: ConfirmedSponsorSumAggregateOutputType | null
    _min: ConfirmedSponsorMinAggregateOutputType | null
    _max: ConfirmedSponsorMaxAggregateOutputType | null
  }

  type GetConfirmedSponsorGroupByPayload<T extends ConfirmedSponsorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmedSponsorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmedSponsorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmedSponsorGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmedSponsorGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmedSponsorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    logo?: boolean
    tier?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confirmedSponsor"]>

  export type ConfirmedSponsorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    logo?: boolean
    tier?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confirmedSponsor"]>

  export type ConfirmedSponsorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    logo?: boolean
    tier?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["confirmedSponsor"]>

  export type ConfirmedSponsorSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    logo?: boolean
    tier?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfirmedSponsorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "logo" | "tier" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["confirmedSponsor"]>

  export type $ConfirmedSponsorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfirmedSponsor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      logo: string | null
      tier: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["confirmedSponsor"]>
    composites: {}
  }

  type ConfirmedSponsorGetPayload<S extends boolean | null | undefined | ConfirmedSponsorDefaultArgs> = $Result.GetResult<Prisma.$ConfirmedSponsorPayload, S>

  type ConfirmedSponsorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfirmedSponsorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfirmedSponsorCountAggregateInputType | true
    }

  export interface ConfirmedSponsorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfirmedSponsor'], meta: { name: 'ConfirmedSponsor' } }
    /**
     * Find zero or one ConfirmedSponsor that matches the filter.
     * @param {ConfirmedSponsorFindUniqueArgs} args - Arguments to find a ConfirmedSponsor
     * @example
     * // Get one ConfirmedSponsor
     * const confirmedSponsor = await prisma.confirmedSponsor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfirmedSponsorFindUniqueArgs>(args: SelectSubset<T, ConfirmedSponsorFindUniqueArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfirmedSponsor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfirmedSponsorFindUniqueOrThrowArgs} args - Arguments to find a ConfirmedSponsor
     * @example
     * // Get one ConfirmedSponsor
     * const confirmedSponsor = await prisma.confirmedSponsor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfirmedSponsorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfirmedSponsorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmedSponsor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSponsorFindFirstArgs} args - Arguments to find a ConfirmedSponsor
     * @example
     * // Get one ConfirmedSponsor
     * const confirmedSponsor = await prisma.confirmedSponsor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfirmedSponsorFindFirstArgs>(args?: SelectSubset<T, ConfirmedSponsorFindFirstArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmedSponsor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSponsorFindFirstOrThrowArgs} args - Arguments to find a ConfirmedSponsor
     * @example
     * // Get one ConfirmedSponsor
     * const confirmedSponsor = await prisma.confirmedSponsor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfirmedSponsorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfirmedSponsorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfirmedSponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSponsorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfirmedSponsors
     * const confirmedSponsors = await prisma.confirmedSponsor.findMany()
     * 
     * // Get first 10 ConfirmedSponsors
     * const confirmedSponsors = await prisma.confirmedSponsor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const confirmedSponsorWithIdOnly = await prisma.confirmedSponsor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfirmedSponsorFindManyArgs>(args?: SelectSubset<T, ConfirmedSponsorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfirmedSponsor.
     * @param {ConfirmedSponsorCreateArgs} args - Arguments to create a ConfirmedSponsor.
     * @example
     * // Create one ConfirmedSponsor
     * const ConfirmedSponsor = await prisma.confirmedSponsor.create({
     *   data: {
     *     // ... data to create a ConfirmedSponsor
     *   }
     * })
     * 
     */
    create<T extends ConfirmedSponsorCreateArgs>(args: SelectSubset<T, ConfirmedSponsorCreateArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfirmedSponsors.
     * @param {ConfirmedSponsorCreateManyArgs} args - Arguments to create many ConfirmedSponsors.
     * @example
     * // Create many ConfirmedSponsors
     * const confirmedSponsor = await prisma.confirmedSponsor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfirmedSponsorCreateManyArgs>(args?: SelectSubset<T, ConfirmedSponsorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfirmedSponsors and returns the data saved in the database.
     * @param {ConfirmedSponsorCreateManyAndReturnArgs} args - Arguments to create many ConfirmedSponsors.
     * @example
     * // Create many ConfirmedSponsors
     * const confirmedSponsor = await prisma.confirmedSponsor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfirmedSponsors and only return the `id`
     * const confirmedSponsorWithIdOnly = await prisma.confirmedSponsor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfirmedSponsorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfirmedSponsorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfirmedSponsor.
     * @param {ConfirmedSponsorDeleteArgs} args - Arguments to delete one ConfirmedSponsor.
     * @example
     * // Delete one ConfirmedSponsor
     * const ConfirmedSponsor = await prisma.confirmedSponsor.delete({
     *   where: {
     *     // ... filter to delete one ConfirmedSponsor
     *   }
     * })
     * 
     */
    delete<T extends ConfirmedSponsorDeleteArgs>(args: SelectSubset<T, ConfirmedSponsorDeleteArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfirmedSponsor.
     * @param {ConfirmedSponsorUpdateArgs} args - Arguments to update one ConfirmedSponsor.
     * @example
     * // Update one ConfirmedSponsor
     * const confirmedSponsor = await prisma.confirmedSponsor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfirmedSponsorUpdateArgs>(args: SelectSubset<T, ConfirmedSponsorUpdateArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfirmedSponsors.
     * @param {ConfirmedSponsorDeleteManyArgs} args - Arguments to filter ConfirmedSponsors to delete.
     * @example
     * // Delete a few ConfirmedSponsors
     * const { count } = await prisma.confirmedSponsor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfirmedSponsorDeleteManyArgs>(args?: SelectSubset<T, ConfirmedSponsorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmedSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSponsorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfirmedSponsors
     * const confirmedSponsor = await prisma.confirmedSponsor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfirmedSponsorUpdateManyArgs>(args: SelectSubset<T, ConfirmedSponsorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmedSponsors and returns the data updated in the database.
     * @param {ConfirmedSponsorUpdateManyAndReturnArgs} args - Arguments to update many ConfirmedSponsors.
     * @example
     * // Update many ConfirmedSponsors
     * const confirmedSponsor = await prisma.confirmedSponsor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfirmedSponsors and only return the `id`
     * const confirmedSponsorWithIdOnly = await prisma.confirmedSponsor.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfirmedSponsorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfirmedSponsorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfirmedSponsor.
     * @param {ConfirmedSponsorUpsertArgs} args - Arguments to update or create a ConfirmedSponsor.
     * @example
     * // Update or create a ConfirmedSponsor
     * const confirmedSponsor = await prisma.confirmedSponsor.upsert({
     *   create: {
     *     // ... data to create a ConfirmedSponsor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfirmedSponsor we want to update
     *   }
     * })
     */
    upsert<T extends ConfirmedSponsorUpsertArgs>(args: SelectSubset<T, ConfirmedSponsorUpsertArgs<ExtArgs>>): Prisma__ConfirmedSponsorClient<$Result.GetResult<Prisma.$ConfirmedSponsorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfirmedSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSponsorCountArgs} args - Arguments to filter ConfirmedSponsors to count.
     * @example
     * // Count the number of ConfirmedSponsors
     * const count = await prisma.confirmedSponsor.count({
     *   where: {
     *     // ... the filter for the ConfirmedSponsors we want to count
     *   }
     * })
    **/
    count<T extends ConfirmedSponsorCountArgs>(
      args?: Subset<T, ConfirmedSponsorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmedSponsorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfirmedSponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSponsorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfirmedSponsorAggregateArgs>(args: Subset<T, ConfirmedSponsorAggregateArgs>): Prisma.PrismaPromise<GetConfirmedSponsorAggregateType<T>>

    /**
     * Group by ConfirmedSponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmedSponsorGroupByArgs} args - Group by arguments.
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
      T extends ConfirmedSponsorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmedSponsorGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmedSponsorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfirmedSponsorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmedSponsorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfirmedSponsor model
   */
  readonly fields: ConfirmedSponsorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfirmedSponsor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmedSponsorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ConfirmedSponsor model
   */
  interface ConfirmedSponsorFieldRefs {
    readonly id: FieldRef<"ConfirmedSponsor", 'String'>
    readonly name: FieldRef<"ConfirmedSponsor", 'String'>
    readonly category: FieldRef<"ConfirmedSponsor", 'String'>
    readonly logo: FieldRef<"ConfirmedSponsor", 'String'>
    readonly tier: FieldRef<"ConfirmedSponsor", 'String'>
    readonly order: FieldRef<"ConfirmedSponsor", 'Int'>
    readonly createdAt: FieldRef<"ConfirmedSponsor", 'DateTime'>
    readonly updatedAt: FieldRef<"ConfirmedSponsor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConfirmedSponsor findUnique
   */
  export type ConfirmedSponsorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSponsor to fetch.
     */
    where: ConfirmedSponsorWhereUniqueInput
  }

  /**
   * ConfirmedSponsor findUniqueOrThrow
   */
  export type ConfirmedSponsorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSponsor to fetch.
     */
    where: ConfirmedSponsorWhereUniqueInput
  }

  /**
   * ConfirmedSponsor findFirst
   */
  export type ConfirmedSponsorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSponsor to fetch.
     */
    where?: ConfirmedSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSponsors to fetch.
     */
    orderBy?: ConfirmedSponsorOrderByWithRelationInput | ConfirmedSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmedSponsors.
     */
    cursor?: ConfirmedSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmedSponsors.
     */
    distinct?: ConfirmedSponsorScalarFieldEnum | ConfirmedSponsorScalarFieldEnum[]
  }

  /**
   * ConfirmedSponsor findFirstOrThrow
   */
  export type ConfirmedSponsorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSponsor to fetch.
     */
    where?: ConfirmedSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSponsors to fetch.
     */
    orderBy?: ConfirmedSponsorOrderByWithRelationInput | ConfirmedSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmedSponsors.
     */
    cursor?: ConfirmedSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmedSponsors.
     */
    distinct?: ConfirmedSponsorScalarFieldEnum | ConfirmedSponsorScalarFieldEnum[]
  }

  /**
   * ConfirmedSponsor findMany
   */
  export type ConfirmedSponsorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmedSponsors to fetch.
     */
    where?: ConfirmedSponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmedSponsors to fetch.
     */
    orderBy?: ConfirmedSponsorOrderByWithRelationInput | ConfirmedSponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfirmedSponsors.
     */
    cursor?: ConfirmedSponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmedSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmedSponsors.
     */
    skip?: number
    distinct?: ConfirmedSponsorScalarFieldEnum | ConfirmedSponsorScalarFieldEnum[]
  }

  /**
   * ConfirmedSponsor create
   */
  export type ConfirmedSponsorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * The data needed to create a ConfirmedSponsor.
     */
    data: XOR<ConfirmedSponsorCreateInput, ConfirmedSponsorUncheckedCreateInput>
  }

  /**
   * ConfirmedSponsor createMany
   */
  export type ConfirmedSponsorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfirmedSponsors.
     */
    data: ConfirmedSponsorCreateManyInput | ConfirmedSponsorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmedSponsor createManyAndReturn
   */
  export type ConfirmedSponsorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * The data used to create many ConfirmedSponsors.
     */
    data: ConfirmedSponsorCreateManyInput | ConfirmedSponsorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmedSponsor update
   */
  export type ConfirmedSponsorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * The data needed to update a ConfirmedSponsor.
     */
    data: XOR<ConfirmedSponsorUpdateInput, ConfirmedSponsorUncheckedUpdateInput>
    /**
     * Choose, which ConfirmedSponsor to update.
     */
    where: ConfirmedSponsorWhereUniqueInput
  }

  /**
   * ConfirmedSponsor updateMany
   */
  export type ConfirmedSponsorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfirmedSponsors.
     */
    data: XOR<ConfirmedSponsorUpdateManyMutationInput, ConfirmedSponsorUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmedSponsors to update
     */
    where?: ConfirmedSponsorWhereInput
    /**
     * Limit how many ConfirmedSponsors to update.
     */
    limit?: number
  }

  /**
   * ConfirmedSponsor updateManyAndReturn
   */
  export type ConfirmedSponsorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * The data used to update ConfirmedSponsors.
     */
    data: XOR<ConfirmedSponsorUpdateManyMutationInput, ConfirmedSponsorUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmedSponsors to update
     */
    where?: ConfirmedSponsorWhereInput
    /**
     * Limit how many ConfirmedSponsors to update.
     */
    limit?: number
  }

  /**
   * ConfirmedSponsor upsert
   */
  export type ConfirmedSponsorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * The filter to search for the ConfirmedSponsor to update in case it exists.
     */
    where: ConfirmedSponsorWhereUniqueInput
    /**
     * In case the ConfirmedSponsor found by the `where` argument doesn't exist, create a new ConfirmedSponsor with this data.
     */
    create: XOR<ConfirmedSponsorCreateInput, ConfirmedSponsorUncheckedCreateInput>
    /**
     * In case the ConfirmedSponsor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmedSponsorUpdateInput, ConfirmedSponsorUncheckedUpdateInput>
  }

  /**
   * ConfirmedSponsor delete
   */
  export type ConfirmedSponsorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
    /**
     * Filter which ConfirmedSponsor to delete.
     */
    where: ConfirmedSponsorWhereUniqueInput
  }

  /**
   * ConfirmedSponsor deleteMany
   */
  export type ConfirmedSponsorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmedSponsors to delete
     */
    where?: ConfirmedSponsorWhereInput
    /**
     * Limit how many ConfirmedSponsors to delete.
     */
    limit?: number
  }

  /**
   * ConfirmedSponsor without action
   */
  export type ConfirmedSponsorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmedSponsor
     */
    select?: ConfirmedSponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmedSponsor
     */
    omit?: ConfirmedSponsorOmit<ExtArgs> | null
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


  export const EventConfigScalarFieldEnum: {
    id: 'id',
    eventName: 'eventName',
    registrationPrefix: 'registrationPrefix',
    eventDate: 'eventDate',
    registrationsOpen: 'registrationsOpen',
    goodiesEnabled: 'goodiesEnabled',
    createdAt: 'createdAt'
  };

  export type EventConfigScalarFieldEnum = (typeof EventConfigScalarFieldEnum)[keyof typeof EventConfigScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    organization: 'organization',
    designation: 'designation',
    city: 'city',
    avatar: 'avatar',
    isActive: 'isActive',
    mustChangePassword: 'mustChangePassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    registrationCode: 'registrationCode',
    qrToken: 'qrToken',
    entryVerified: 'entryVerified',
    entryVerifiedAt: 'entryVerifiedAt',
    goodiesVerified: 'goodiesVerified',
    goodiesVerifiedAt: 'goodiesVerifiedAt',
    emailStatus: 'emailStatus',
    emailSentAt: 'emailSentAt',
    emailProvider: 'emailProvider',
    lastEmailAttemptAt: 'lastEmailAttemptAt',
    lastEmailError: 'lastEmailError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const HackathonRegistrationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    college: 'college',
    team: 'team',
    domain: 'domain',
    size: 'size',
    status: 'status',
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
    logoUrl: 'logoUrl',
    confirmed: 'confirmed',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SponsorEnquiryScalarFieldEnum = (typeof SponsorEnquiryScalarFieldEnum)[keyof typeof SponsorEnquiryScalarFieldEnum]


  export const SpeakerProposalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    role: 'role',
    company: 'company',
    topic: 'topic',
    abstract: 'abstract',
    photoUrl: 'photoUrl',
    bio: 'bio',
    confirmed: 'confirmed',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpeakerProposalScalarFieldEnum = (typeof SpeakerProposalScalarFieldEnum)[keyof typeof SpeakerProposalScalarFieldEnum]


  export const ConfirmedSpeakerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    company: 'company',
    topic: 'topic',
    bio: 'bio',
    image: 'image',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfirmedSpeakerScalarFieldEnum = (typeof ConfirmedSpeakerScalarFieldEnum)[keyof typeof ConfirmedSpeakerScalarFieldEnum]


  export const ConfirmedSponsorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    logo: 'logo',
    tier: 'tier',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfirmedSponsorScalarFieldEnum = (typeof ConfirmedSponsorScalarFieldEnum)[keyof typeof ConfirmedSponsorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'EmailStatus'
   */
  export type EnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus'>
    


  /**
   * Reference to a field of type 'EmailStatus[]'
   */
  export type ListEnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type EventConfigWhereInput = {
    AND?: EventConfigWhereInput | EventConfigWhereInput[]
    OR?: EventConfigWhereInput[]
    NOT?: EventConfigWhereInput | EventConfigWhereInput[]
    id?: StringFilter<"EventConfig"> | string
    eventName?: StringFilter<"EventConfig"> | string
    registrationPrefix?: StringFilter<"EventConfig"> | string
    eventDate?: DateTimeFilter<"EventConfig"> | Date | string
    registrationsOpen?: BoolFilter<"EventConfig"> | boolean
    goodiesEnabled?: BoolFilter<"EventConfig"> | boolean
    createdAt?: DateTimeFilter<"EventConfig"> | Date | string
  }

  export type EventConfigOrderByWithRelationInput = {
    id?: SortOrder
    eventName?: SortOrder
    registrationPrefix?: SortOrder
    eventDate?: SortOrder
    registrationsOpen?: SortOrder
    goodiesEnabled?: SortOrder
    createdAt?: SortOrder
  }

  export type EventConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventConfigWhereInput | EventConfigWhereInput[]
    OR?: EventConfigWhereInput[]
    NOT?: EventConfigWhereInput | EventConfigWhereInput[]
    eventName?: StringFilter<"EventConfig"> | string
    registrationPrefix?: StringFilter<"EventConfig"> | string
    eventDate?: DateTimeFilter<"EventConfig"> | Date | string
    registrationsOpen?: BoolFilter<"EventConfig"> | boolean
    goodiesEnabled?: BoolFilter<"EventConfig"> | boolean
    createdAt?: DateTimeFilter<"EventConfig"> | Date | string
  }, "id">

  export type EventConfigOrderByWithAggregationInput = {
    id?: SortOrder
    eventName?: SortOrder
    registrationPrefix?: SortOrder
    eventDate?: SortOrder
    registrationsOpen?: SortOrder
    goodiesEnabled?: SortOrder
    createdAt?: SortOrder
    _count?: EventConfigCountOrderByAggregateInput
    _max?: EventConfigMaxOrderByAggregateInput
    _min?: EventConfigMinOrderByAggregateInput
  }

  export type EventConfigScalarWhereWithAggregatesInput = {
    AND?: EventConfigScalarWhereWithAggregatesInput | EventConfigScalarWhereWithAggregatesInput[]
    OR?: EventConfigScalarWhereWithAggregatesInput[]
    NOT?: EventConfigScalarWhereWithAggregatesInput | EventConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventConfig"> | string
    eventName?: StringWithAggregatesFilter<"EventConfig"> | string
    registrationPrefix?: StringWithAggregatesFilter<"EventConfig"> | string
    eventDate?: DateTimeWithAggregatesFilter<"EventConfig"> | Date | string
    registrationsOpen?: BoolWithAggregatesFilter<"EventConfig"> | boolean
    goodiesEnabled?: BoolWithAggregatesFilter<"EventConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EventConfig"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    organization?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    registration?: XOR<RegistrationNullableScalarRelationFilter, RegistrationWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    registration?: RegistrationOrderByWithRelationInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    organization?: StringFilter<"User"> | string
    designation?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    registration?: XOR<RegistrationNullableScalarRelationFilter, RegistrationWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    organization?: StringWithAggregatesFilter<"User"> | string
    designation?: StringWithAggregatesFilter<"User"> | string
    city?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    mustChangePassword?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: StringFilter<"Registration"> | string
    userId?: StringFilter<"Registration"> | string
    registrationCode?: StringFilter<"Registration"> | string
    qrToken?: StringFilter<"Registration"> | string
    entryVerified?: BoolFilter<"Registration"> | boolean
    entryVerifiedAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    goodiesVerified?: BoolFilter<"Registration"> | boolean
    goodiesVerifiedAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    emailStatus?: EnumEmailStatusFilter<"Registration"> | $Enums.EmailStatus
    emailSentAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    emailProvider?: StringNullableFilter<"Registration"> | string | null
    lastEmailAttemptAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    lastEmailError?: StringNullableFilter<"Registration"> | string | null
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    updatedAt?: DateTimeFilter<"Registration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    registrationCode?: SortOrder
    qrToken?: SortOrder
    entryVerified?: SortOrder
    entryVerifiedAt?: SortOrderInput | SortOrder
    goodiesVerified?: SortOrder
    goodiesVerifiedAt?: SortOrderInput | SortOrder
    emailStatus?: SortOrder
    emailSentAt?: SortOrderInput | SortOrder
    emailProvider?: SortOrderInput | SortOrder
    lastEmailAttemptAt?: SortOrderInput | SortOrder
    lastEmailError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    registrationCode?: string
    qrToken?: string
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    entryVerified?: BoolFilter<"Registration"> | boolean
    entryVerifiedAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    goodiesVerified?: BoolFilter<"Registration"> | boolean
    goodiesVerifiedAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    emailStatus?: EnumEmailStatusFilter<"Registration"> | $Enums.EmailStatus
    emailSentAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    emailProvider?: StringNullableFilter<"Registration"> | string | null
    lastEmailAttemptAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    lastEmailError?: StringNullableFilter<"Registration"> | string | null
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    updatedAt?: DateTimeFilter<"Registration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "registrationCode" | "qrToken">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    registrationCode?: SortOrder
    qrToken?: SortOrder
    entryVerified?: SortOrder
    entryVerifiedAt?: SortOrderInput | SortOrder
    goodiesVerified?: SortOrder
    goodiesVerifiedAt?: SortOrderInput | SortOrder
    emailStatus?: SortOrder
    emailSentAt?: SortOrderInput | SortOrder
    emailProvider?: SortOrderInput | SortOrder
    lastEmailAttemptAt?: SortOrderInput | SortOrder
    lastEmailError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registration"> | string
    userId?: StringWithAggregatesFilter<"Registration"> | string
    registrationCode?: StringWithAggregatesFilter<"Registration"> | string
    qrToken?: StringWithAggregatesFilter<"Registration"> | string
    entryVerified?: BoolWithAggregatesFilter<"Registration"> | boolean
    entryVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null
    goodiesVerified?: BoolWithAggregatesFilter<"Registration"> | boolean
    goodiesVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null
    emailStatus?: EnumEmailStatusWithAggregatesFilter<"Registration"> | $Enums.EmailStatus
    emailSentAt?: DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null
    emailProvider?: StringNullableWithAggregatesFilter<"Registration"> | string | null
    lastEmailAttemptAt?: DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null
    lastEmailError?: StringNullableWithAggregatesFilter<"Registration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: EnumActivityTypeFilter<"ActivityLog"> | $Enums.ActivityType
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: EnumActivityTypeFilter<"ActivityLog"> | $Enums.ActivityType
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: EnumActivityTypeWithAggregatesFilter<"ActivityLog"> | $Enums.ActivityType
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type HackathonRegistrationWhereInput = {
    AND?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    OR?: HackathonRegistrationWhereInput[]
    NOT?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    id?: StringFilter<"HackathonRegistration"> | string
    name?: StringFilter<"HackathonRegistration"> | string
    email?: StringFilter<"HackathonRegistration"> | string
    phone?: StringNullableFilter<"HackathonRegistration"> | string | null
    college?: StringFilter<"HackathonRegistration"> | string
    team?: StringFilter<"HackathonRegistration"> | string
    domain?: StringFilter<"HackathonRegistration"> | string
    size?: StringFilter<"HackathonRegistration"> | string
    status?: StringFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
  }

  export type HackathonRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type HackathonRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    OR?: HackathonRegistrationWhereInput[]
    NOT?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    name?: StringFilter<"HackathonRegistration"> | string
    email?: StringFilter<"HackathonRegistration"> | string
    phone?: StringNullableFilter<"HackathonRegistration"> | string | null
    college?: StringFilter<"HackathonRegistration"> | string
    team?: StringFilter<"HackathonRegistration"> | string
    domain?: StringFilter<"HackathonRegistration"> | string
    size?: StringFilter<"HackathonRegistration"> | string
    status?: StringFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
  }, "id">

  export type HackathonRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: HackathonRegistrationCountOrderByAggregateInput
    _max?: HackathonRegistrationMaxOrderByAggregateInput
    _min?: HackathonRegistrationMinOrderByAggregateInput
  }

  export type HackathonRegistrationScalarWhereWithAggregatesInput = {
    AND?: HackathonRegistrationScalarWhereWithAggregatesInput | HackathonRegistrationScalarWhereWithAggregatesInput[]
    OR?: HackathonRegistrationScalarWhereWithAggregatesInput[]
    NOT?: HackathonRegistrationScalarWhereWithAggregatesInput | HackathonRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    name?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    email?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    phone?: StringNullableWithAggregatesFilter<"HackathonRegistration"> | string | null
    college?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    team?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    domain?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    size?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    status?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HackathonRegistration"> | Date | string
  }

  export type SponsorEnquiryWhereInput = {
    AND?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    OR?: SponsorEnquiryWhereInput[]
    NOT?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    id?: StringFilter<"SponsorEnquiry"> | string
    company?: StringFilter<"SponsorEnquiry"> | string
    contact?: StringFilter<"SponsorEnquiry"> | string
    contactNumber?: StringNullableFilter<"SponsorEnquiry"> | string | null
    alternateNumber?: StringNullableFilter<"SponsorEnquiry"> | string | null
    email?: StringFilter<"SponsorEnquiry"> | string
    tier?: StringFilter<"SponsorEnquiry"> | string
    message?: StringNullableFilter<"SponsorEnquiry"> | string | null
    logoUrl?: StringNullableFilter<"SponsorEnquiry"> | string | null
    confirmed?: BoolFilter<"SponsorEnquiry"> | boolean
    status?: StringFilter<"SponsorEnquiry"> | string
    createdAt?: DateTimeFilter<"SponsorEnquiry"> | Date | string
    updatedAt?: DateTimeFilter<"SponsorEnquiry"> | Date | string
  }

  export type SponsorEnquiryOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    contact?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    email?: SortOrder
    tier?: SortOrder
    message?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorEnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    OR?: SponsorEnquiryWhereInput[]
    NOT?: SponsorEnquiryWhereInput | SponsorEnquiryWhereInput[]
    company?: StringFilter<"SponsorEnquiry"> | string
    contact?: StringFilter<"SponsorEnquiry"> | string
    contactNumber?: StringNullableFilter<"SponsorEnquiry"> | string | null
    alternateNumber?: StringNullableFilter<"SponsorEnquiry"> | string | null
    email?: StringFilter<"SponsorEnquiry"> | string
    tier?: StringFilter<"SponsorEnquiry"> | string
    message?: StringNullableFilter<"SponsorEnquiry"> | string | null
    logoUrl?: StringNullableFilter<"SponsorEnquiry"> | string | null
    confirmed?: BoolFilter<"SponsorEnquiry"> | boolean
    status?: StringFilter<"SponsorEnquiry"> | string
    createdAt?: DateTimeFilter<"SponsorEnquiry"> | Date | string
    updatedAt?: DateTimeFilter<"SponsorEnquiry"> | Date | string
  }, "id">

  export type SponsorEnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    contact?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    alternateNumber?: SortOrderInput | SortOrder
    email?: SortOrder
    tier?: SortOrder
    message?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SponsorEnquiryCountOrderByAggregateInput
    _max?: SponsorEnquiryMaxOrderByAggregateInput
    _min?: SponsorEnquiryMinOrderByAggregateInput
  }

  export type SponsorEnquiryScalarWhereWithAggregatesInput = {
    AND?: SponsorEnquiryScalarWhereWithAggregatesInput | SponsorEnquiryScalarWhereWithAggregatesInput[]
    OR?: SponsorEnquiryScalarWhereWithAggregatesInput[]
    NOT?: SponsorEnquiryScalarWhereWithAggregatesInput | SponsorEnquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    company?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    contact?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    contactNumber?: StringNullableWithAggregatesFilter<"SponsorEnquiry"> | string | null
    alternateNumber?: StringNullableWithAggregatesFilter<"SponsorEnquiry"> | string | null
    email?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    tier?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    message?: StringNullableWithAggregatesFilter<"SponsorEnquiry"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"SponsorEnquiry"> | string | null
    confirmed?: BoolWithAggregatesFilter<"SponsorEnquiry"> | boolean
    status?: StringWithAggregatesFilter<"SponsorEnquiry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SponsorEnquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SponsorEnquiry"> | Date | string
  }

  export type SpeakerProposalWhereInput = {
    AND?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    OR?: SpeakerProposalWhereInput[]
    NOT?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    id?: StringFilter<"SpeakerProposal"> | string
    name?: StringFilter<"SpeakerProposal"> | string
    email?: StringFilter<"SpeakerProposal"> | string
    phone?: StringNullableFilter<"SpeakerProposal"> | string | null
    role?: StringNullableFilter<"SpeakerProposal"> | string | null
    company?: StringNullableFilter<"SpeakerProposal"> | string | null
    topic?: StringFilter<"SpeakerProposal"> | string
    abstract?: StringFilter<"SpeakerProposal"> | string
    photoUrl?: StringNullableFilter<"SpeakerProposal"> | string | null
    bio?: StringNullableFilter<"SpeakerProposal"> | string | null
    confirmed?: BoolFilter<"SpeakerProposal"> | boolean
    status?: StringFilter<"SpeakerProposal"> | string
    createdAt?: DateTimeFilter<"SpeakerProposal"> | Date | string
    updatedAt?: DateTimeFilter<"SpeakerProposal"> | Date | string
  }

  export type SpeakerProposalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakerProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    OR?: SpeakerProposalWhereInput[]
    NOT?: SpeakerProposalWhereInput | SpeakerProposalWhereInput[]
    name?: StringFilter<"SpeakerProposal"> | string
    email?: StringFilter<"SpeakerProposal"> | string
    phone?: StringNullableFilter<"SpeakerProposal"> | string | null
    role?: StringNullableFilter<"SpeakerProposal"> | string | null
    company?: StringNullableFilter<"SpeakerProposal"> | string | null
    topic?: StringFilter<"SpeakerProposal"> | string
    abstract?: StringFilter<"SpeakerProposal"> | string
    photoUrl?: StringNullableFilter<"SpeakerProposal"> | string | null
    bio?: StringNullableFilter<"SpeakerProposal"> | string | null
    confirmed?: BoolFilter<"SpeakerProposal"> | boolean
    status?: StringFilter<"SpeakerProposal"> | string
    createdAt?: DateTimeFilter<"SpeakerProposal"> | Date | string
    updatedAt?: DateTimeFilter<"SpeakerProposal"> | Date | string
  }, "id">

  export type SpeakerProposalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpeakerProposalCountOrderByAggregateInput
    _max?: SpeakerProposalMaxOrderByAggregateInput
    _min?: SpeakerProposalMinOrderByAggregateInput
  }

  export type SpeakerProposalScalarWhereWithAggregatesInput = {
    AND?: SpeakerProposalScalarWhereWithAggregatesInput | SpeakerProposalScalarWhereWithAggregatesInput[]
    OR?: SpeakerProposalScalarWhereWithAggregatesInput[]
    NOT?: SpeakerProposalScalarWhereWithAggregatesInput | SpeakerProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    name?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    email?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    phone?: StringNullableWithAggregatesFilter<"SpeakerProposal"> | string | null
    role?: StringNullableWithAggregatesFilter<"SpeakerProposal"> | string | null
    company?: StringNullableWithAggregatesFilter<"SpeakerProposal"> | string | null
    topic?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    abstract?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"SpeakerProposal"> | string | null
    bio?: StringNullableWithAggregatesFilter<"SpeakerProposal"> | string | null
    confirmed?: BoolWithAggregatesFilter<"SpeakerProposal"> | boolean
    status?: StringWithAggregatesFilter<"SpeakerProposal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpeakerProposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpeakerProposal"> | Date | string
  }

  export type ConfirmedSpeakerWhereInput = {
    AND?: ConfirmedSpeakerWhereInput | ConfirmedSpeakerWhereInput[]
    OR?: ConfirmedSpeakerWhereInput[]
    NOT?: ConfirmedSpeakerWhereInput | ConfirmedSpeakerWhereInput[]
    id?: StringFilter<"ConfirmedSpeaker"> | string
    name?: StringFilter<"ConfirmedSpeaker"> | string
    role?: StringFilter<"ConfirmedSpeaker"> | string
    company?: StringFilter<"ConfirmedSpeaker"> | string
    topic?: StringFilter<"ConfirmedSpeaker"> | string
    bio?: StringNullableFilter<"ConfirmedSpeaker"> | string | null
    image?: StringNullableFilter<"ConfirmedSpeaker"> | string | null
    order?: IntFilter<"ConfirmedSpeaker"> | number
    createdAt?: DateTimeFilter<"ConfirmedSpeaker"> | Date | string
    updatedAt?: DateTimeFilter<"ConfirmedSpeaker"> | Date | string
  }

  export type ConfirmedSpeakerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSpeakerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfirmedSpeakerWhereInput | ConfirmedSpeakerWhereInput[]
    OR?: ConfirmedSpeakerWhereInput[]
    NOT?: ConfirmedSpeakerWhereInput | ConfirmedSpeakerWhereInput[]
    name?: StringFilter<"ConfirmedSpeaker"> | string
    role?: StringFilter<"ConfirmedSpeaker"> | string
    company?: StringFilter<"ConfirmedSpeaker"> | string
    topic?: StringFilter<"ConfirmedSpeaker"> | string
    bio?: StringNullableFilter<"ConfirmedSpeaker"> | string | null
    image?: StringNullableFilter<"ConfirmedSpeaker"> | string | null
    order?: IntFilter<"ConfirmedSpeaker"> | number
    createdAt?: DateTimeFilter<"ConfirmedSpeaker"> | Date | string
    updatedAt?: DateTimeFilter<"ConfirmedSpeaker"> | Date | string
  }, "id">

  export type ConfirmedSpeakerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    bio?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfirmedSpeakerCountOrderByAggregateInput
    _avg?: ConfirmedSpeakerAvgOrderByAggregateInput
    _max?: ConfirmedSpeakerMaxOrderByAggregateInput
    _min?: ConfirmedSpeakerMinOrderByAggregateInput
    _sum?: ConfirmedSpeakerSumOrderByAggregateInput
  }

  export type ConfirmedSpeakerScalarWhereWithAggregatesInput = {
    AND?: ConfirmedSpeakerScalarWhereWithAggregatesInput | ConfirmedSpeakerScalarWhereWithAggregatesInput[]
    OR?: ConfirmedSpeakerScalarWhereWithAggregatesInput[]
    NOT?: ConfirmedSpeakerScalarWhereWithAggregatesInput | ConfirmedSpeakerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConfirmedSpeaker"> | string
    name?: StringWithAggregatesFilter<"ConfirmedSpeaker"> | string
    role?: StringWithAggregatesFilter<"ConfirmedSpeaker"> | string
    company?: StringWithAggregatesFilter<"ConfirmedSpeaker"> | string
    topic?: StringWithAggregatesFilter<"ConfirmedSpeaker"> | string
    bio?: StringNullableWithAggregatesFilter<"ConfirmedSpeaker"> | string | null
    image?: StringNullableWithAggregatesFilter<"ConfirmedSpeaker"> | string | null
    order?: IntWithAggregatesFilter<"ConfirmedSpeaker"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ConfirmedSpeaker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConfirmedSpeaker"> | Date | string
  }

  export type ConfirmedSponsorWhereInput = {
    AND?: ConfirmedSponsorWhereInput | ConfirmedSponsorWhereInput[]
    OR?: ConfirmedSponsorWhereInput[]
    NOT?: ConfirmedSponsorWhereInput | ConfirmedSponsorWhereInput[]
    id?: StringFilter<"ConfirmedSponsor"> | string
    name?: StringFilter<"ConfirmedSponsor"> | string
    category?: StringFilter<"ConfirmedSponsor"> | string
    logo?: StringNullableFilter<"ConfirmedSponsor"> | string | null
    tier?: StringFilter<"ConfirmedSponsor"> | string
    order?: IntFilter<"ConfirmedSponsor"> | number
    createdAt?: DateTimeFilter<"ConfirmedSponsor"> | Date | string
    updatedAt?: DateTimeFilter<"ConfirmedSponsor"> | Date | string
  }

  export type ConfirmedSponsorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    logo?: SortOrderInput | SortOrder
    tier?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSponsorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConfirmedSponsorWhereInput | ConfirmedSponsorWhereInput[]
    OR?: ConfirmedSponsorWhereInput[]
    NOT?: ConfirmedSponsorWhereInput | ConfirmedSponsorWhereInput[]
    name?: StringFilter<"ConfirmedSponsor"> | string
    category?: StringFilter<"ConfirmedSponsor"> | string
    logo?: StringNullableFilter<"ConfirmedSponsor"> | string | null
    tier?: StringFilter<"ConfirmedSponsor"> | string
    order?: IntFilter<"ConfirmedSponsor"> | number
    createdAt?: DateTimeFilter<"ConfirmedSponsor"> | Date | string
    updatedAt?: DateTimeFilter<"ConfirmedSponsor"> | Date | string
  }, "id">

  export type ConfirmedSponsorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    logo?: SortOrderInput | SortOrder
    tier?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfirmedSponsorCountOrderByAggregateInput
    _avg?: ConfirmedSponsorAvgOrderByAggregateInput
    _max?: ConfirmedSponsorMaxOrderByAggregateInput
    _min?: ConfirmedSponsorMinOrderByAggregateInput
    _sum?: ConfirmedSponsorSumOrderByAggregateInput
  }

  export type ConfirmedSponsorScalarWhereWithAggregatesInput = {
    AND?: ConfirmedSponsorScalarWhereWithAggregatesInput | ConfirmedSponsorScalarWhereWithAggregatesInput[]
    OR?: ConfirmedSponsorScalarWhereWithAggregatesInput[]
    NOT?: ConfirmedSponsorScalarWhereWithAggregatesInput | ConfirmedSponsorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConfirmedSponsor"> | string
    name?: StringWithAggregatesFilter<"ConfirmedSponsor"> | string
    category?: StringWithAggregatesFilter<"ConfirmedSponsor"> | string
    logo?: StringNullableWithAggregatesFilter<"ConfirmedSponsor"> | string | null
    tier?: StringWithAggregatesFilter<"ConfirmedSponsor"> | string
    order?: IntWithAggregatesFilter<"ConfirmedSponsor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ConfirmedSponsor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConfirmedSponsor"> | Date | string
  }

  export type EventConfigCreateInput = {
    id?: string
    eventName: string
    registrationPrefix: string
    eventDate: Date | string
    registrationsOpen?: boolean
    goodiesEnabled?: boolean
    createdAt?: Date | string
  }

  export type EventConfigUncheckedCreateInput = {
    id?: string
    eventName: string
    registrationPrefix: string
    eventDate: Date | string
    registrationsOpen?: boolean
    goodiesEnabled?: boolean
    createdAt?: Date | string
  }

  export type EventConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    registrationPrefix?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationsOpen?: BoolFieldUpdateOperationsInput | boolean
    goodiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    registrationPrefix?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationsOpen?: BoolFieldUpdateOperationsInput | boolean
    goodiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventConfigCreateManyInput = {
    id?: string
    eventName: string
    registrationPrefix: string
    eventDate: Date | string
    registrationsOpen?: boolean
    goodiesEnabled?: boolean
    createdAt?: Date | string
  }

  export type EventConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    registrationPrefix?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationsOpen?: BoolFieldUpdateOperationsInput | boolean
    goodiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    registrationPrefix?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationsOpen?: BoolFieldUpdateOperationsInput | boolean
    goodiesEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    registration?: RegistrationCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    registration?: RegistrationUncheckedCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registration?: RegistrationUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registration?: RegistrationUncheckedUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegistrationCreateInput = {
    id?: string
    registrationCode: string
    qrToken: string
    entryVerified?: boolean
    entryVerifiedAt?: Date | string | null
    goodiesVerified?: boolean
    goodiesVerifiedAt?: Date | string | null
    emailStatus?: $Enums.EmailStatus
    emailSentAt?: Date | string | null
    emailProvider?: string | null
    lastEmailAttemptAt?: Date | string | null
    lastEmailError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: string
    userId: string
    registrationCode: string
    qrToken: string
    entryVerified?: boolean
    entryVerifiedAt?: Date | string | null
    goodiesVerified?: boolean
    goodiesVerifiedAt?: Date | string | null
    emailStatus?: $Enums.EmailStatus
    emailSentAt?: Date | string | null
    emailProvider?: string | null
    lastEmailAttemptAt?: Date | string | null
    lastEmailError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    entryVerified?: BoolFieldUpdateOperationsInput | boolean
    entryVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goodiesVerified?: BoolFieldUpdateOperationsInput | boolean
    goodiesVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailStatus?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailProvider?: NullableStringFieldUpdateOperationsInput | string | null
    lastEmailAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastEmailError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    entryVerified?: BoolFieldUpdateOperationsInput | boolean
    entryVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goodiesVerified?: BoolFieldUpdateOperationsInput | boolean
    goodiesVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailStatus?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailProvider?: NullableStringFieldUpdateOperationsInput | string | null
    lastEmailAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastEmailError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCreateManyInput = {
    id?: string
    userId: string
    registrationCode: string
    qrToken: string
    entryVerified?: boolean
    entryVerifiedAt?: Date | string | null
    goodiesVerified?: boolean
    goodiesVerifiedAt?: Date | string | null
    emailStatus?: $Enums.EmailStatus
    emailSentAt?: Date | string | null
    emailProvider?: string | null
    lastEmailAttemptAt?: Date | string | null
    lastEmailError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    entryVerified?: BoolFieldUpdateOperationsInput | boolean
    entryVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goodiesVerified?: BoolFieldUpdateOperationsInput | boolean
    goodiesVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailStatus?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailProvider?: NullableStringFieldUpdateOperationsInput | string | null
    lastEmailAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastEmailError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    entryVerified?: BoolFieldUpdateOperationsInput | boolean
    entryVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goodiesVerified?: BoolFieldUpdateOperationsInput | boolean
    goodiesVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailStatus?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailProvider?: NullableStringFieldUpdateOperationsInput | string | null
    lastEmailAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastEmailError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    college: string
    team: string
    domain: string
    size: string
    status?: string
    createdAt?: Date | string
  }

  export type HackathonRegistrationUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    college: string
    team: string
    domain: string
    size: string
    status?: string
    createdAt?: Date | string
  }

  export type HackathonRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    college: string
    team: string
    domain: string
    size: string
    status?: string
    createdAt?: Date | string
  }

  export type HackathonRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    college?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryCreateInput = {
    id?: string
    company: string
    contact: string
    contactNumber?: string | null
    alternateNumber?: string | null
    email: string
    tier: string
    message?: string | null
    logoUrl?: string | null
    confirmed?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorEnquiryUncheckedCreateInput = {
    id?: string
    company: string
    contact: string
    contactNumber?: string | null
    alternateNumber?: string | null
    email: string
    tier: string
    message?: string | null
    logoUrl?: string | null
    confirmed?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorEnquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryCreateManyInput = {
    id?: string
    company: string
    contact: string
    contactNumber?: string | null
    alternateNumber?: string | null
    email: string
    tier: string
    message?: string | null
    logoUrl?: string | null
    confirmed?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorEnquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorEnquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    alternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role?: string | null
    company?: string | null
    topic: string
    abstract: string
    photoUrl?: string | null
    bio?: string | null
    confirmed?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakerProposalUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role?: string | null
    company?: string | null
    topic: string
    abstract: string
    photoUrl?: string | null
    bio?: string | null
    confirmed?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakerProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    role?: string | null
    company?: string | null
    topic: string
    abstract: string
    photoUrl?: string | null
    bio?: string | null
    confirmed?: boolean
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpeakerProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeakerProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSpeakerCreateInput = {
    id?: string
    name: string
    role: string
    company: string
    topic: string
    bio?: string | null
    image?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfirmedSpeakerUncheckedCreateInput = {
    id?: string
    name: string
    role: string
    company: string
    topic: string
    bio?: string | null
    image?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfirmedSpeakerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSpeakerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSpeakerCreateManyInput = {
    id?: string
    name: string
    role: string
    company: string
    topic: string
    bio?: string | null
    image?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfirmedSpeakerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSpeakerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSponsorCreateInput = {
    id?: string
    name: string
    category: string
    logo?: string | null
    tier?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfirmedSponsorUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    logo?: string | null
    tier?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfirmedSponsorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSponsorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSponsorCreateManyInput = {
    id?: string
    name: string
    category: string
    logo?: string | null
    tier?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfirmedSponsorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfirmedSponsorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventConfigCountOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    registrationPrefix?: SortOrder
    eventDate?: SortOrder
    registrationsOpen?: SortOrder
    goodiesEnabled?: SortOrder
    createdAt?: SortOrder
  }

  export type EventConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    registrationPrefix?: SortOrder
    eventDate?: SortOrder
    registrationsOpen?: SortOrder
    goodiesEnabled?: SortOrder
    createdAt?: SortOrder
  }

  export type EventConfigMinOrderByAggregateInput = {
    id?: SortOrder
    eventName?: SortOrder
    registrationPrefix?: SortOrder
    eventDate?: SortOrder
    registrationsOpen?: SortOrder
    goodiesEnabled?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RegistrationNullableScalarRelationFilter = {
    is?: RegistrationWhereInput | null
    isNot?: RegistrationWhereInput | null
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    organization?: SortOrder
    designation?: SortOrder
    city?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    mustChangePassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registrationCode?: SortOrder
    qrToken?: SortOrder
    entryVerified?: SortOrder
    entryVerifiedAt?: SortOrder
    goodiesVerified?: SortOrder
    goodiesVerifiedAt?: SortOrder
    emailStatus?: SortOrder
    emailSentAt?: SortOrder
    emailProvider?: SortOrder
    lastEmailAttemptAt?: SortOrder
    lastEmailError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registrationCode?: SortOrder
    qrToken?: SortOrder
    entryVerified?: SortOrder
    entryVerifiedAt?: SortOrder
    goodiesVerified?: SortOrder
    goodiesVerifiedAt?: SortOrder
    emailStatus?: SortOrder
    emailSentAt?: SortOrder
    emailProvider?: SortOrder
    lastEmailAttemptAt?: SortOrder
    lastEmailError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registrationCode?: SortOrder
    qrToken?: SortOrder
    entryVerified?: SortOrder
    entryVerifiedAt?: SortOrder
    goodiesVerified?: SortOrder
    goodiesVerifiedAt?: SortOrder
    emailStatus?: SortOrder
    emailSentAt?: SortOrder
    emailProvider?: SortOrder
    lastEmailAttemptAt?: SortOrder
    lastEmailError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type HackathonRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type HackathonRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type HackathonRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    college?: SortOrder
    team?: SortOrder
    domain?: SortOrder
    size?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
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
    logoUrl?: SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    logoUrl?: SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    logoUrl?: SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakerProposalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakerProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpeakerProposalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    abstract?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    confirmed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ConfirmedSpeakerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSpeakerAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ConfirmedSpeakerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSpeakerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    company?: SortOrder
    topic?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSpeakerSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type ConfirmedSponsorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    logo?: SortOrder
    tier?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSponsorAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ConfirmedSponsorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    logo?: SortOrder
    tier?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSponsorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    logo?: SortOrder
    tier?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfirmedSponsorSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RegistrationCreateNestedOneWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput
    connect?: RegistrationWhereUniqueInput
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput
    connect?: RegistrationWhereUniqueInput
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RegistrationUpdateOneWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput
    upsert?: RegistrationUpsertWithoutUserInput
    disconnect?: RegistrationWhereInput | boolean
    delete?: RegistrationWhereInput | boolean
    connect?: RegistrationWhereUniqueInput
    update?: XOR<XOR<RegistrationUpdateToOneWithWhereWithoutUserInput, RegistrationUpdateWithoutUserInput>, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput
    upsert?: RegistrationUpsertWithoutUserInput
    disconnect?: RegistrationWhereInput | boolean
    delete?: RegistrationWhereInput | boolean
    connect?: RegistrationWhereUniqueInput
    update?: XOR<XOR<RegistrationUpdateToOneWithWhereWithoutUserInput, RegistrationUpdateWithoutUserInput>, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRegistrationInput = {
    create?: XOR<UserCreateWithoutRegistrationInput, UserUncheckedCreateWithoutRegistrationInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEmailStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailStatus
  }

  export type UserUpdateOneRequiredWithoutRegistrationNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationInput, UserUncheckedCreateWithoutRegistrationInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationInput
    upsert?: UserUpsertWithoutRegistrationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationInput, UserUpdateWithoutRegistrationInput>, UserUncheckedUpdateWithoutRegistrationInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type RegistrationCreateWithoutUserInput = {
    id?: string
    registrationCode: string
    qrToken: string
    entryVerified?: boolean
    entryVerifiedAt?: Date | string | null
    goodiesVerified?: boolean
    goodiesVerifiedAt?: Date | string | null
    emailStatus?: $Enums.EmailStatus
    emailSentAt?: Date | string | null
    emailProvider?: string | null
    lastEmailAttemptAt?: Date | string | null
    lastEmailError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationUncheckedCreateWithoutUserInput = {
    id?: string
    registrationCode: string
    qrToken: string
    entryVerified?: boolean
    entryVerifiedAt?: Date | string | null
    goodiesVerified?: boolean
    goodiesVerifiedAt?: Date | string | null
    emailStatus?: $Enums.EmailStatus
    emailSentAt?: Date | string | null
    emailProvider?: string | null
    lastEmailAttemptAt?: Date | string | null
    lastEmailError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationCreateOrConnectWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationUpsertWithoutUserInput = {
    update: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
    where?: RegistrationWhereInput
  }

  export type RegistrationUpdateToOneWithWhereWithoutUserInput = {
    where?: RegistrationWhereInput
    data: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    entryVerified?: BoolFieldUpdateOperationsInput | boolean
    entryVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goodiesVerified?: BoolFieldUpdateOperationsInput | boolean
    goodiesVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailStatus?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailProvider?: NullableStringFieldUpdateOperationsInput | string | null
    lastEmailAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastEmailError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    qrToken?: StringFieldUpdateOperationsInput | string
    entryVerified?: BoolFieldUpdateOperationsInput | boolean
    entryVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    goodiesVerified?: BoolFieldUpdateOperationsInput | boolean
    goodiesVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailStatus?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailProvider?: NullableStringFieldUpdateOperationsInput | string | null
    lastEmailAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastEmailError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: EnumActivityTypeFilter<"ActivityLog"> | $Enums.ActivityType
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateWithoutRegistrationInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegistrationInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegistrationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationInput, UserUncheckedCreateWithoutRegistrationInput>
  }

  export type UserUpsertWithoutRegistrationInput = {
    update: XOR<UserUpdateWithoutRegistrationInput, UserUncheckedUpdateWithoutRegistrationInput>
    create: XOR<UserCreateWithoutRegistrationInput, UserUncheckedCreateWithoutRegistrationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationInput, UserUncheckedUpdateWithoutRegistrationInput>
  }

  export type UserUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    registration?: RegistrationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    phone: string
    passwordHash?: string | null
    role?: $Enums.UserRole
    organization: string
    designation: string
    city: string
    avatar: string
    isActive?: boolean
    mustChangePassword?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    registration?: RegistrationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registration?: RegistrationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    organization?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registration?: RegistrationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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