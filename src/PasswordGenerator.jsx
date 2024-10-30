import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";

function PasswordGenerator() {
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeCharacters, setIncludeCharacters] = useState(true);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const btnRef = useRef(null);

  const passGenerator = useCallback(() => {
    let char = "";
    let numbers = includeNumbers ? "1234567890" : "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let characters = includeCharacters ? "!@#$%^&*()~`|" : "";
    let finalString = numbers + string + characters;

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * (finalString.length + 1));
      char += finalString.charAt(index);
    }
    setPassword(char);
    btnRef.current.textContent = "Copy";
  }, [setPassword, length, includeCharacters, includeNumbers]);

  function handleCopy() {
    window.navigator.clipboard.writeText(password);
    btnRef.current.textContent = "Copied!";
  }

  useEffect(passGenerator, [
    length,
    passGenerator,
    includeCharacters,
    includeNumbers,
  ]);

  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <h1 className="mb-12 text-3xl font-bold text-white">
        Password Generator
      </h1>
      <div className="flex w-[38rem] flex-col items-center justify-center rounded-md border border-zinc-600 bg-zinc-900 px-4 py-8">
        <div className="flex w-full justify-center">
          <input
            className="h-10 w-full rounded-s-md border border-slate-700 bg-emerald-50 p-4 text-black"
            type="text"
            value={password}
          />
          <button
            onClick={handleCopy}
            className="h-10 w-20 rounded-e-md border border-slate-700 bg-emerald-700 text-white hover:bg-emerald-600"
            ref={btnRef}
          >
            Copy
          </button>
        </div>
        <div className="mt-6 flex w-full items-center justify-center">
          <input
            type="range"
            className="rounded-lg accent-emerald-600"
            max={50}
            min={1}
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
          <p className="ml-2 mr-5">Length ({length})</p>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
          />
          <p className="ml-2 mr-5">Numbers</p>

          <input
            type="checkbox"
            checked={includeCharacters}
            onChange={() => setIncludeCharacters((prev) => !prev)}
          />
          <p className="ml-2 mr-5">Characters</p>
        </div>
        <button
          onClick={passGenerator}
          className="mt-4 h-10 w-32 rounded-lg border border-emerald-200 bg-emerald-700 hover:bg-emerald-600"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
