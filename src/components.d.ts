declare module "vue" {
  export interface GlobalComponents {
    VInput: typeof import("../packages")["VInput"];
    VButton: typeof import("../packages")["VButton"];
  }
}

export {};
