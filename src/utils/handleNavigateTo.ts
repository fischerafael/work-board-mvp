import Router from "next/router";

export const handleNavigateTo = (path: string) => {
  Router.push(path);
};
