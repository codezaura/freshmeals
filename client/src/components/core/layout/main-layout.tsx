import { Main } from "../main";
import { Header } from "../header";

// -----------------------------------------------------------------------

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />

      <Main className="min-w-full flex justify-center flex-col">
        {children}
      </Main>
    </div>
  );
}
