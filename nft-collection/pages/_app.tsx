import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
// import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
	return (
	<ThirdwebProvider
		clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
		activeChain={activeChain}
	>
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	</ThirdwebProvider>
	);
}

export default MyApp;