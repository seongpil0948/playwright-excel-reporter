import typescript from "rollup-plugin-typescript2";

// https://www.peterkimzz.com/rollupjs-using-plugin/
export default {
  input: ["lib/index.ts"],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      // exports: "named",
    },
  ],
  plugins: [typescript()],
  external: [
    "@firebase/firestore",
    "@firebase/storage",
    "@firebase/util",
    "@firebase/auth",
    "@firebase/analytics",
    "firebase/app",
    "date-fns",
    "date-fns/locale",
    "@firebase/messaging",
    "@editorjs/editorjs",
  ],
};
