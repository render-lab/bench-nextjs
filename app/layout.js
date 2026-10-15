export const metadata = {
  title: 'Seed Next.js app',
  description: 'Host-agnostic seed for the AEO coding-agent harness.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
