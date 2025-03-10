// rollup.config.ts
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// https://www.peterkimzz.com/rollupjs-using-plugin/
export default {
  input: ['lib/index.ts'],
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'esm',
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: [
    '@firebase/firestore',
    '@firebase/storage',
    '@firebase/util',
    '@firebase/auth',
    '@firebase/analytics',
    'firebase/app',
    'date-fns',
    'date-fns/locale',
    '@firebase/messaging',
    '@editorjs/editorjs',
    'fs', // Node 내장 모듈은 그대로 외부로 처리
  ],
};
