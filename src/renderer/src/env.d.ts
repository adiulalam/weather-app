/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly RENDERER_VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
