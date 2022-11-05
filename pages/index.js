import { ConnectButton } from '@rainbow-me/rainbowkit';
import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';

let darkMode = true;

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 dark:bg-green-500'>
      <div className='flex flex-col items-center space-y-4'>
        <ConnectButton />
        <SwapWidget theme={darkMode ? darkTheme : lightTheme} />
      </div>
    </div>
  );
}
