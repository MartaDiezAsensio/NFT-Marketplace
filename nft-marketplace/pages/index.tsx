import { Container, Heading, Flex, Stack, Button } from "@chakra-ui/react";
import NextLink from 'next/link';
//import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
	<Container maxW={"1200px"}>
		<Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
			<Stack spacing={4} align={"center"}>
			<Heading>Coerumarket</Heading>
			<Button
			as={NextLink} href='/buy'
			>Shop NFTs</Button>
			</Stack>
		</Flex>
	</Container>
	);
};

export default Home;
