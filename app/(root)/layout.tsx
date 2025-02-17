// app/layout.tsx
import Navbarr from "../../components/Navbarr";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <>
            <Navbarr />
            {children}
        </>
      </body>
    </html>
  );
}
