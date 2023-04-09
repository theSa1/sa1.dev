import Link from "next/link"
import { HiOutlineHeart, HiOutlineEnvelope } from "react-icons/hi2"
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs"
import { useRouter } from "next/router"

export const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const { pathname } = useRouter()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-24">
      <div className="flex aspect-video h-80 rounded bg-card px-10 py-8 shadow-md">
        <div className="flex flex-col justify-between">
          {children}
          <div className="flex gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`nav-link${
                  link.href === pathname ? " active" : ""
                } font-bold text-white`}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between text-secondary">
          <Link href="mailto:i@sa1.dev" className="flex items-center gap-1">
            <HiOutlineEnvelope size={20} />
            i@sa1.dev
          </Link>
          <Link
            href="https://github.com/theSa1"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-current p-1"
          >
            <BsGithub size={25} />
          </Link>
          <Link
            href="https://twitter.com/sa1wasTooShort"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-current p-1"
          >
            <BsTwitter size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/savan.338"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-current p-1"
          >
            <BsInstagram />
          </Link>
          <button className="flex items-center gap-1 rounded-full border-2 border-current px-2 py-1">
            <HiOutlineHeart size={20} />
            125
          </button>
        </div>
      </div>
    </main>
  )
}
