import { ReactNode } from "react";

export interface IContext {
  children?: ReactNode
}

export interface ICreateContext {
  selectedArticle: any,
  setSelectedArticle: () => {}
}
