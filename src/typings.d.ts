/* eslint-disable @typescript-eslint/no-explicit-any */
/* SystemJS module definition */

interface NodeModule {
  id: string;
}

declare module '*.json' {
  const value: any;
  export default value;
}
