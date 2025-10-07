/// <reference types="vite/client" />

// --- Environment variables ---
interface ImportMetaEnv {
  readonly VITE_NESTO_CANDIDAT: string;
  readonly VITE_PAGINATION_ITEMS_PER_PAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// --- SVG implementation ---
declare module '*.svg?react' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}