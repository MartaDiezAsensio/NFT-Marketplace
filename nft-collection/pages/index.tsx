import { ConnectWallet, useContract, useMetadata, MediaRenderer, useContractRead, Web3Button, useAddress} from "@thirdweb-dev/react";
//import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { Container, Flex, Box, SimpleGrid, Text, Skeleton, Heading, Stack} from "@chakra-ui/react";


const Home: NextPage = () => {
	const address = useAddress();
	const contractAddress = "0x19f0241885E11c11ab31F8f6e978eb18C969B627";

	const { contract } = useContract(contractAddress);
	const { data: metadata, isLoading: isLoadingMetadata } = useMetadata(contract);
	const { data: totalMinted, isLoading: isLoadingTotalMinted } = useContractRead(contract, "totalMinted");


	return (
		<Container maxW={"1220px"}>
			<Flex p={"20px"} justifyContent={"space-between"}>
				<Box></Box>
				<ConnectWallet />
			</Flex>
			<Flex h={"90vh"} alignItems={"center"} justifyContent={"center"}>
				<SimpleGrid columns={2} spacing={0.1} justifyItems={"center"}>
					<Box>
						<Skeleton isLoaded={!isLoadingMetadata}>
							<MediaRenderer
							src={(metadata as {image: string})?.image}
							/>
						</Skeleton>
					</Box>
					<Flex direction={"column"} justifyContent={"center"}>
					<Stack direction={"column"} spacing={4}>
					<Skeleton isLoaded={!isLoadingMetadata}>
							<Heading>{(metadata as {name: string})?.name}</Heading>
					</Skeleton>
					<Skeleton isLoaded={!isLoadingMetadata}>
							<Text textAlign={"justify"}>{(metadata as {description: string})?.description}</Text>
					</Skeleton>
					<Skeleton isLoaded={!isLoadingTotalMinted}>
						<Box
						fontWeight="bold"
						>
						<p>Total minted: {totalMinted?.toNumber()}/5</p>
						</Box>
					</Skeleton>
					{address ? (
						<Box
						as="button"
						display="inline-box"
						textAlign="center"
						backgroundColor="rgba(167, 42, 129, 0.1)"
						borderRadius="full"
						px={6}
						_hover={{backgroundColor: "rgba(167, 42, 129, 0.3)"}}
						>
						<Web3Button
						contractAddress={contractAddress}
						action={(contract) => contract.erc721.claim(1)}
						>Claim</Web3Button>
						</Box>
					) : (
						<Box
						as="button"
						display="inline-box"
						textAlign="center"
						backgroundColor="rgba(167, 42, 129, 0.1)"
						borderRadius="full"
						px={6}
						padding={2}
						_hover={{backgroundColor: "rgba(167, 42, 129, 0.3)"}}
						>
							<Text>Please connect your wallet</Text>
						</Box>
					)}
					</Stack>
					</Flex>
				</SimpleGrid>
			</Flex>
		</Container>
	);
};

export default Home;
