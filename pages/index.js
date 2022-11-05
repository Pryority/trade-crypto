import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center'>
      <div className='flex flex-col items-center space-y-4'>
        <ConnectButton />
        <SwapWidget />
      </div>
    </div>
  );
}
