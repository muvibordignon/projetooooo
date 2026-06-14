import './globals.css';

export const metadata = {
  title: 'Meu Painel Académico',
  description: 'Sistema de gestão escolar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-pt">
      <body>{children}</body>
    </html>
  );
}