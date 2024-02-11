export type Endpoit = {
  path: string;
  method: string;
  handler: (req: any, res: any) => void;
};

export type User = {
  id: string;
  name: string;
  age: string;
  hobbies: string[];
};
