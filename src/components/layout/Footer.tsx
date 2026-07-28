import Container from "@/components/ui/Container";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <Container>

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Mohamed Lakhrouf.
            All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Built with React, TypeScript & Tailwind CSS
          </p>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;