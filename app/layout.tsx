import { ReactNode } from 'react';
import '../styles/global.css';

export const metadata = {
  title: "Clarke Energia",
  description: "Economize até 40% na conta de luz da sua empresa sem precisar investir"
}

interface Props {
  children?: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
  <html lang='en'>
    <body className='mt-20'>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        {children}
      </main> 
    </body>
  </html>
  )
}

export default RootLayout