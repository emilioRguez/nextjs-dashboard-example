import '@/app/ui/global.css';
// Se agrago aqui para que entediera que se esta usando Tailwind CSS para estilizar el proyecto.
import { inter } from '@/app/ui/fonts';
// Se agrago aqui para que carge las fonts del proyecto.

// Se agrago informacion para la Metadata del proyecto.
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
