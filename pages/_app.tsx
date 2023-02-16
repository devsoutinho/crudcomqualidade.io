import { ChakraProvider } from '@chakra-ui/react';
import { TagManager } from "../src/infra/TagManager";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TagManager />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
