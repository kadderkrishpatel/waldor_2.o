declare module "wpapi" {
  interface WPRequest<T = any> {
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): Promise<TResult1 | TResult2>;

    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): Promise<T | TResult>;

    [key: string]: any;
  }

  interface WPAPIOptions {
    endpoint: string;
    username?: string;
    password?: string;
    auth?: {
      username: string;
      password: string;
    };
  }

  interface WPAPI {
    new (options: WPAPIOptions): WPAPI;

    posts(): any;
    pages(): any;
    categories(): any;
    tags(): any;
    media(): any;
    users(): any;
    types(): any;
    taxonomies(): any;
    [key: string]: any;
  }

  const WPAPI: WPAPI;

  export default WPAPI;
}
