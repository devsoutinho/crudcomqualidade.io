import { Box, Button, Image, Input, InputGroup, InputLeftElement, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function HomeScreen() {
  const title = "CRUDs com Qualidade";
  const description = "Mini curso com o DevSoutinho, fazendo o CRUD glorificado que você sempre quis, com muito humor e conteúdo";
  const ogImage = "https://crudcomqualidade.io/og.jpg";
  const url = "https://crudcomqualidade.io/";

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" itemProp="image" content={ogImage} />
        <meta property="og:updated_time" content="1440432930" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
      </Head>
      <Box
        display="flex"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        maxWidth="600px"
        margin="auto"
        padding="16px"
      >
        <Image
          src="/capa.png"
          alt="CRUDs com Qualidade"
          width="100%"
          maxWidth="500px"
        />
        <Text
          textAlign="center"
          marginTop="5"
        >
          Mini workshop com o <Link href="https://youtube.com/DevSoutinho" target="_blank"><strong>DevSoutinho</strong></Link>, fazendo o CRUD glorificado que você sempre quis, com muito humor e conteúdo
        </Text>
        <Text
          textAlign="center"
          marginTop="10"
        >
          Garanta agora mesmo o seu acesso!
        </Text>
        <Box
          marginTop="10"
        >
          <Link
            colorScheme="orange"
            borderRadius="md"
            padding="4"
            fontWeight={600}
            backgroundColor="green.500"
            color="white"
            _hover={{
              backgroundColor: "green.600",
            }}
            _focus={{
              backgroundColor: "green.600",
            }}
            textAlign="center"
            textDecoration="none !important"
            href={process.env.NEXT_PUBLIC_BUY_PRODUCT_URL}
          >
            Comprar agora
          </Link>
        </Box>
      </Box>

    </>
  );
}
