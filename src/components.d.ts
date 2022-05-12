declare module "vue" {
  export interface GlobalComponents {
    VInput: typeof import("vite-lib-starter")["VInput"];
    VButton: typeof import("vite-lib-starter")["VButton"];
  }
}

export {};
