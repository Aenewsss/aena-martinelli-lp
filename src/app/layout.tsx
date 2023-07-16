import './globals.css'
import { Roboto_Slab } from 'next/font/google'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata = {
  title: 'Sites de Alta Perfomance!',
  description: 'Transforme sua ideia em realidade com serviços de criação de aplicativos e sites de alta performance! Desenvolvemos soluções personalizadas e inovadoras para atender às suas necessidades. Nossa equipe de especialistas em design e desenvolvimento está pronta para criar experiências digitais únicas e funcionais. Impulsione seu negócio com um aplicativo ou site profissionalmente projetado e otimizado. Entre em contato conosco hoje mesmo e descubra como podemos ajudá-lo a alcançar seus objetivos online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  )
}
