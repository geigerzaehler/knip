import module from "node:module";

module.register("./transform-test.js", { parentURL: import.meta.url });

export async function resolve(specifier, context, next) {
  if (specifier === "bun:test") {
    specifier = "node:test";
  }
  return next(specifier, context, next);
}
