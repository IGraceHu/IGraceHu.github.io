import "@/styles/globals.css";
import "@/styles/dark.css";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import GlobalStyles from '@mui/material/GlobalStyles';
import { emotionCache } from "@/createEmotionCache.js";

export default function App({ Component, pageProps }) {
  const props = { Component, pageProps };
  return (
    <AppCacheProvider {...props}>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
