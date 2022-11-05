import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { 
  getDefaultWallets, 
  RainbowKitProvider,
  darkTheme 
} from '@rainbow-me/rainbowkit';
import { 
  chain, 
  configureChains, 
  createClient, 
  WagmiConfig 
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { Gnosis, Avalanche } from '../components/CustomChains';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, Gnosis, Avalanche, chain.goerli, chain.polygonMumbai],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID}),
    jsonRpcProvider({ rpc: () => ({ http: 'https://rpc.ankr.com/gnosis' }) }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({ 
  appName: 'Uniswap Crypto Trade Dapp',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={darkTheme({
          accentColor: '#0f3a85'
        })}  
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
