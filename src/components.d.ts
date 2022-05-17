declare module "vue" {
  export interface GlobalComponents {
    VButton: typeof import("vite-lib-starter")["VButton"];
    VInput: typeof import("vite-lib-starter")["VInput"];
  }
}

export {};
