
import "./globals.css";

export const metadata = {
  title: "VELOURS Pâtisserie",
  description: "Site de ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
       
        {children}
      </body>
    </html>
  );
}
