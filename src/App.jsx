import BookHeaven from "./BookHeaven/BookHeaven";
import Footer from "./Footer";
// import PasswordGenerator from "./PasswordGenerator";

function App() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <header className="flex h-14 items-center bg-gradient-to-r from-violet-950 to-purple-900 px-6 text-xl font-bold shadow-lg">
        Mini Projects
      </header>
      <div className="flex flex-grow bg-slate-900">
        <ul className="w-60 space-y-2 bg-slate-950/50 p-4 backdrop-blur-sm">
          <ProjectList text="Password Generator" />
        </ul>
        <main className="relative w-full flex-grow overflow-y-auto bg-slate-800/30">
          <Background />
          <div className="relative z-10 h-full">
            {/* <PasswordGenerator /> */}
            <BookHeaven />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-0 bg-slate-950">
      <div
        className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/20 via-purple-900/20 to-slate-950/20" />
    </div>
  );
}

function ProjectList({ text }) {
  return (
    <li className="group relative overflow-hidden rounded-lg border border-violet-500/20 transition-all hover:border-violet-500/40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-950/50 to-purple-900/50 opacity-0 transition-opacity group-hover:opacity-100" />
      <button className="flex h-12 w-full items-center justify-center px-4 font-bold text-white transition-colors group-hover:text-white">
        {text}
      </button>
    </li>
  );
}

export default App;
