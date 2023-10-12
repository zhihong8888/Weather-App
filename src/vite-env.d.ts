// / <reference types="vite/client" />

interface ImportMetaEnv {
  // vite built-in variables
  readonly MODE: string
  readonly PROD: boolean

  // user defined enviroment variables (always returns a string only!)
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENV: string

  readonly VITE_APP_WEATHER_URL: string
  readonly VITE_APP_WEATHER_API_KEY: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
