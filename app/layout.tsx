import Providers from "@/components/providers";
import { Layout } from "@/lib/types/app";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const layout = async ({ children }: Layout) => {
  const session = await getServerSession(authOptions);

  return (
    <html className={inter.className}>
      <body className="dark:bg-slate-950 dark:text-slate-100 bg-slate-50 text-slate-800">
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
};

export default layout;
