import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    core_main: string;
    core_deep: string;
    core_light: string;
    core_accent: string;
    core_sort_start: string;
    core_sort_end: string;
    font_family: string;
  }
}
