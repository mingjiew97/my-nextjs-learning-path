import Head from "next/head";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Box, Container } from "@chakra-ui/react";

export default function MainLayout({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mingjie Wang's Homepage" />
        <meta name="author" content="Mingjie Wang" />
        <meta property="og:site_name" content="Mingjie Wang's Homepage" />
        <title>Mingjie Wang - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
}
