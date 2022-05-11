declare module "vue" {
  export interface GlobalComponents {
    VInput: typeof import("./lib")["VInput"];
    VButton: typeof import("./lib")["VButton"];
  }
}

export {};
