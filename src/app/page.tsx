import Link from "next/link";
import type { ReactNode } from "react";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className="underline text-[#555] font-normal transition-[color_0.3s] hover:text-[#111]"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 box-border font-['Helvetica_Neue',Helvetica,Arial,sans-serif] bg-[#efefef] overflow-auto">
      <h1 className="text-[2rem] text-[#777] text-center font-[300] mt-[0.67em] mb-[6px] leading-normal">
        Hello,
      </h1>
      <p className="name text-center text-[#555] mb-4 leading-[2.4] text-[1.2rem] font-[600]">
        My name is Kirill Korolyov.
      </p>
      <p className="text-center text-[#555] pt-4 pb-2 font-[300]">
        I{" "}
        <ExternalLink href="https://github.com/Dremora">
          write code
        </ExternalLink>
        ,{" "}
        <ExternalLink href="https://500px.com/dremora">
          take photos
        </ExternalLink>{" "}
        (
        <ExternalLink href="https://www.flickr.com/photos/dremora/">
          and then some
        </ExternalLink>
        ) and{" "}
        <ExternalLink href="http://soundcloud.com/kirill-korolyov">
          make music
        </ExternalLink>
        . Sometimes I{" "}
        <ExternalLink href="https://twitter.com/Dremora">tweet</ExternalLink> or{" "}
        <ExternalLink href="https://medium.com/@Dremora/">blog</ExternalLink>.
      </p>
      <p className="footer text-center text-[#555] pb-4 font-[300]">
        <Link
          className="underline text-[#555] font-normal transition-[color_0.3s] hover:text-[#111]"
          href="/resume"
        >
          Hire me
        </Link>{" "}
        or drop me a line at{" "}
        <a
          className="underline text-[#555] font-normal transition-[color_0.3s] hover:text-[#111]"
          href="mailto:kirill.korolyov@gmail.com"
        >
          kirill.korolyov@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
