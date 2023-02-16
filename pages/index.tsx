import { Box, Button, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import React from "react";

export default function HomeScreen() {
  const [email, setEmail] = React.useState("");

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
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
        maxWidth="500px"
      />
      <Text
        textAlign="center"
        marginTop="5"
      >
        Mini curso com o <strong>DevSoutinho</strong>, fazendo o CRUD glorificado que você sempre quis, com muito humor e conteúdo
      </Text>
      <Text
        textAlign="center"
        marginTop="10"
      >
        Increva-se na newsletter para receber as novidades
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
            onChange={(event) => setEmail(event.target.value)}
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
          Lista de espera
        </Button>
      </Box>
    </Box>
  );
}