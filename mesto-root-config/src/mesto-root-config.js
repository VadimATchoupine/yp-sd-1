import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mesto/auth",
  app: () =>
    import(
      /* webpackIgnore: true */
      "https://localhost:9001/mesto-auth.js"
    ),
  activeWhen: ["/login"],
});

registerApplication({
  name: "@mesto/common",
  app: () =>
    import(
      /* webpackIgnore: true */
      "https://localhost:9002/mesto-common.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mesto/profile",
  app: () =>
    import(
      /* webpackIgnore: true */
      "https://localhost:9002/mesto-profile.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mesto/feed",
  app: () =>
    import(
      /* webpackIgnore: true */
      "https://localhost:9003/mesto-feed.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mesto/utils",
  app: () =>
    import(
      /* webpackIgnore: true */
      "https://localhost:9004/mesto-utils.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});