"use client";

import Link from "next/link";

function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        X
      </Link>
    </button>
  );
}

export default SearchFormReset;
