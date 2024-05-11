import Footer from "./footer/index";

export default function Navigation({ children }) {
  return (
    <>
      <header className="bg-white shadow-md py-3 px-20 fixed w-full">
        <nav className="flex justify-between h-10 ">
          <img src={"/images/home-logo.png"} width={50} height={50}></img>
          <div className="flex justify-center items-center gap-7">
            <a href="">Home</a>
            <a href="">Destinasi Wisata</a>
            <a href="">Festival</a>
            <a href="">Bookmark</a>
            <a href="">Berita</a>
            <a href="">Bahasa</a>
            <button className="outline outline-1 outline-black py-[2px] px-5 rounded-md">
              Login
            </button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
