import { Box, Button, Image, Input, InputGroup, InputLeftElement, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function HomeScreen() {
  const title = "CRUDs com Qualidade";
  const description = "Mini curso com o DevSoutinho, fazendo o CRUD glorificado que você sempre quis, com muito humor e conteúdo";
  const ogImage = "https://crudcomqualidade.io/og.jpg";
  const url = "https://crudcomqualidade.io/";

  const [email, setEmail] = React.useState("");

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

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
          Mini curso com o <Link href="https://youtube.com/DevSoutinho" target="_blank"><strong>DevSoutinho</strong></Link>, fazendo o CRUD glorificado que você sempre quis, com muito humor e conteúdo
        </Text>
        <Text
          textAlign="center"
          marginTop="10"
        >
          Inscreva-se na newsletter para receber as novidades
        </Text>
        <Box
          as="form"
          marginTop="5"
          display="flex"
          flexDirection="column"
          // MailChimp Stuff
          name="mc-embedded-subscribe-form"
          action="https://mariosouto.us8.list-manage.com/subscribe/post?u=8225f161ef3ee7a744fd4a2ba&id=2e2754236e"
          method="post"
          id="mc-embedded-subscribe-form"
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              children='@'
            />
            <Input
              colorScheme="orange"
              placeholder='pessoa@email.com'
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
              // Mailchimp Stuff
              id="mce-EMAIL"
              name="EMAIL"
            />
          </InputGroup>

          <div style={{ position: "absolute", left: "-50000px" }} aria-hidden="true"><input type="text" name="b_8225f161ef3ee7a744fd4a2ba_2e2754236e" tabIndex={-1} /></div>

          <Button
            type="submit"
            colorScheme={isValidEmail(email) ? "orange" : "gray"}
            sx={{
              pointerEvents: isValidEmail(email) ? "auto" : "none",
            }}
            marginTop="5"
            disabled={!isValidEmail(email)}
          >
            Entrar na Lista de espera
          </Button>
        </Box>


        <Link
          href="https://github.com/devsoutinho/crudcomqualidade.io"
          textAlign="center"
          marginTop="10"
        >
          Quer ver o código desse site que foi feito em <strong>menos de 30 minutos</strong>?
        </Link>
      </Box>
    </>
  );
}
