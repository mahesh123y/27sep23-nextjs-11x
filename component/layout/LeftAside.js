import React from 'react'
import Link from "next/link";

export default function LeftAside() {
  return (
    <>
      <div className="col-lg-3 col-md-12">
        <aside>
          <nav class="nav flex-column">
            <Link
              class="nav-link active bg-info text-white"
              aria-current="page"
              href="flight"
            >
              The Flight
            </Link>
            <Link class="nav-link bg-info my-2 text-white" href="city">
              The City
            </Link>
            <Link class="nav-link bg-info text-white" href="island">
              The Island
            </Link>
            <Link class="nav-link bg-info my-2 text-white" href="food">
              The Food
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
