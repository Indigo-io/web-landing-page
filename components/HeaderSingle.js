import Link from "next/link";

export default function HeaderSingle() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" className="img-fluid" />
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
