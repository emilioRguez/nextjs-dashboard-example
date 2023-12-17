import '@/app/ui/global.css';
// Se agrago aqui para que entediera que se esta usando Tailwind CSS para estilizar el proyecto.
import { inter } from '@/app/ui/fonts';
// Se agrago aqui para que carge las fonts del proyecto.

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
