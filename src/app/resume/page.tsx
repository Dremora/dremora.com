function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center pb-2 mb-0 mt-[1.6rem] text-[#444] overflow-hidden text-[1.5em] font-bold break-after-avoid break-inside-avoid">
      <span className="inline-block relative bg-white">
        <span className="w-[1000px] border-b border-[#eee] absolute top-[13px] right-[100%] mr-2.5"></span>
        {children}
        <span className="w-[1000px] border-b border-[#eee] absolute top-[13px] left-[100%] ml-2.5"></span>
      </span>
    </h2>
  );
}

function Technology({ children }: { children: React.ReactNode }) {
  return <span className="text-[#555] font-bold">{children}</span>;
}

function Job({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-dotted border-[#eee] [&:not(:last-child)]:border-b break-inside-avoid">
      {children}
    </section>
  );
}

function JobDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid clear-left">
      {children}
    </p>
  );
}

function JobDescriptionList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="leading-[1.3] text-justify ml-2 my-[1em] break-inside-avoid clear-left list-disc list-inside">
      {children}
    </ul>
  );
}

function JobDescriptionItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="leading-[1.3] text-justify my-1 break-inside-avoid clear-left list-disc list-inside">
      {children}
    </li>
  );
}

function Project({ children }: { children: React.ReactNode }) {
  return (
    <section className="break-inside-avoid border-dotted border-[#eee] [&:not(:last-child)]:border-b">
      {children}
    </section>
  );
}

function ProjectDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid ml-4 text-[0.9rem]">
      {children}
    </p>
  );
}

function JobHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="break-after-avoid break-inside-avoid font-normal mt-[1em] mb-[0.7rem] text-[1.17em] float-left">
      {children}
    </h3>
  );
}

function JobTitle({ children }: { children: React.ReactNode }) {
  return <span className="font-bold">{children}</span>;
}

function JobDate({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid inline text-[0.9rem] mt-[1.1rem] mb-[0.5rem] ml-[1rem] clear-none float-left border-b border-dotted border-[#999]">
      / {children} /
    </p>
  );
}

function Company({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}

function ProjectLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="text-[#222] font-bold no-underline hover:underline text-[0.9rem] pl-12"
    >
      {children}
    </a>
  );
}

function Education({ children }: { children: React.ReactNode }) {
  return (
    <section className="break-inside-avoid border-dotted border-[#eee] [&:not(:last-child)]:border-b">
      {children}
    </section>
  );
}

function Award({ children }: { children: React.ReactNode }) {
  return <span className="award font-bold text-[#240]">{children}</span>;
}

function College({ children }: { children: React.ReactNode }) {
  return <span className="italic">{children}</span>;
}

function EducationDetails({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-[1.3] text-justify mb-[1em] break-inside-avoid mt-0 ml-4">
      {children}
    </p>
  );
}

function EducationDate({ children }: { children: React.ReactNode }) {
  return (
    <span className="italic border-b border-dotted border-[#999]">
      {children}
    </span>
  );
}

function EducationHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="break-after-avoid break-inside-avoid font-normal mt-[1em] mb-[0.7rem] text-[1.17em]">
      {children}
    </h3>
  );
}

function EducationDegree({ children }: { children: React.ReactNode }) {
  return <span className="font-bold">{children}</span>;
}

function EducationDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid ml-4 text-[0.9rem]">
      {children}
    </p>
  );
}

function Location({ children }: { children: React.ReactNode }) {
  return <span className="font-bold text-[#666]">{children}</span>;
}

function Contract({ children }: { children: React.ReactNode }) {
  return <span className="text-[#666]">{children}</span>;
}

export default function Resume() {
  return (
    <div className="font-['Palatino'] py-4 px-8 mx-auto text-[#444] max-w-[900px] box-content leading-[normal]">
      <p className="leading-[1.3] my-[1em] break-inside-avoid text-[#f44] uppercase text-center hidden print:block font-[700]">
        Please do not print this, save the trees
      </p>
      <h1 className="text-center my-2 text-[#222] text-[2em] font-bold break-after-avoid break-inside-avoid">
        Kirill Korolyov
      </h1>
      <div className="text-center">
        <a
          href="mailto:kirill.korolyov@gmail.com"
          className="text-[#222] font-bold no-underline hover:underline text-[1rem]"
        >
          kirill.korolyov@gmail.com
        </a>{" "}
        | <Location>Remote</Location> | <Contract>Contract only</Contract>
      </div>

      <div className="text-center text-xs pt-1 font-medium">
        Providing software development services through Pixel Perfect
        Development, LLC, a U.S.-registered company
      </div>
      <SectionHeading>Summary</SectionHeading>
      <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid">
        With 15 years of commercial experience in software engineering, I
        specialize in full-stack development with React and Node.js, delivering
        high-performance, scalable and user-friendly applications. I have built
        and maintained complex systems, contributing across the entire
        development lifecycle, from architecture to deployment.
      </p>
      <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid">
        While my primary focus is web applications, I have also worked on native
        apps, CLI tools, and accelerated graphics, among other areas.
      </p>

      <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid">
        Some of the topics I am most passionate about—and can discuss for
        hours—include functional programming, type systems, performance
        optimization, developer experience, user experience, accessibility,
        design systems, and automation.
      </p>

      <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid">
        I am a fast and avid learner, always eager to adopt new tools, patterns,
        programming languages, and paradigms. A perfectionist by nature, I also
        understand when to take a pragmatic approach. No matter the project, I
        strive to leave the codebase, product, team, and organization better
        than I found them.
      </p>

      <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid">
        I have been an early adopter of AI for work and continuously refine its
        use to improve efficiency, accelerate learning, enhance creativity, and
        automate complex or repetitive tasks. However, I always ensure a
        thorough understanding and review of AI-generated output.
      </p>
      <SectionHeading>Experience</SectionHeading>
      <Job>
        <JobHeading>
          <JobTitle>Founder & Principal Software Engineer</JobTitle> at{" "}
          <Company>Pixel Perfect Development</Company>
        </JobHeading>

        <JobDate>September, 2024 to Present</JobDate>

        <JobDescription>
          Founded and operate Pixel Perfect Development, a software consultancy
          specializing in full-stack web development, with a focus on React and
          Node.js applications.
        </JobDescription>
      </Job>

      <Job>
        <JobHeading>
          <JobTitle>Co-Founder & CPO</JobTitle> at <Company>Duo</Company>
        </JobHeading>

        <JobDate>April, 2025 to Present</JobDate>

        <JobDescription>
          Revolutionizing the way people discover dancing events and connect
          with other dancers.
        </JobDescription>
      </Job>

      <Job>
        <JobHeading>
          <JobTitle>Software Engineer</JobTitle> at <Company>Blockvis</Company>
        </JobHeading>
        <JobDate>September, 2024 to March, 2025</JobDate>
        <JobDescription>
          I have worked on a variety of unrelated projects involving{" "}
          <Technology>Rust</Technology>, <Technology>GLSL</Technology>,{" "}
          <Technology>blockchains</Technology>, and{" "}
          <Technology>WebAssembly</Technology>:
        </JobDescription>
        <JobDescriptionList>
          <JobDescriptionItem>
            Server-side CLI application for data analysis implemented using
            Rust, ensuring efficient data processing and sharing code with
            WebAssembly counterparts.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Data visualization software utilizing Rust (compiled to WebAssembly)
            for CPU-intensive data transformations enhancing performance and
            scalability, and using GLSL shaders for efficient rendering.
          </JobDescriptionItem>
          <JobDescriptionItem>
            A rendering engine implemented in GLSL shaders, focusing on specific
            geometric patterns and custom fine-tuned anti-aliasing, along with
            an associated debugging UI built with React and TypeScript.
          </JobDescriptionItem>
          <JobDescriptionItem>
            A web game built with React and integrated with Telegram, featuring
            3D visualizations and off-screen canvas rendering in a web worker.
            Additionally, I developed an associated web portal that integrates
            with smart contracts.
          </JobDescriptionItem>
        </JobDescriptionList>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Lead Software Engineer</JobTitle> at{" "}
          <Company>Flick</Company>
        </JobHeading>
        <JobDate>January, 2022 to September, 2024</JobDate>
        <JobDescription>
          During my time at Flick, I completely transformed the product by
          continuously advocating for improved engineering practices while also
          building new features.
        </JobDescription>

        <JobDescriptionList>
          <JobDescriptionItem>
            In close collaboration with the CEO (who was also the designer), I
            built an extensive design system from scratch, enabling the team to
            achieve pixel-perfect implementation of the designs.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Migrated the entire codebase to the strictest TypeScript compiler
            settings and introduced a comprehensive set of ESLint rules.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Helped consolidate multiple repositories into a single monorepo and
            merged multiple apps into one.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Revised all tooling and significantly optimized the CI pipeline,
            reducing build times and cutting costs.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Designed a new filesystem convention for better codebase navigation
            and created a structured plan for gradual migration.
          </JobDescriptionItem>
        </JobDescriptionList>
        <JobDescription>
          These initiatives led to a significantly improved developer and
          end-user experience, a substantial reduction in bugs, faster delivery
          of new features, enhanced maintainability for existing features, and
          improved web performance metrics. While many of these efforts were
          self-driven, I never stopped working on new product features, ensuring
          that the team’s speed and ability to deliver were never compromised.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>
            Contractor / Senior Fullstack Engineer / Technical Lead
          </JobTitle>{" "}
          at <Company>Tractable</Company>
        </JobHeading>
        <JobDate>March, 2020 to January, 2022</JobDate>
        <JobDescriptionList>
          <JobDescriptionItem>
            Developed a full-stack application for loss adjusters and body shops
            to display car damage claims and AI-generated assessment results.
            Each insurer required a customized version with tailored
            functionality. Developed backend APIs with Node.js and GraphQL,
            facilitating seamless data exchange between applications and AI
            services. Implemented Domain-Driven Design (DDD) principles in the
            backend architecture, leading to more maintainable and scalable
            codebase. Integrated Kafka to reliably process and store data in
            Postgres returned from the AI pipeline.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Led the migration of the entire company’s codebase from BitBucket to
            GitHub, including establishing new CI/CD pipelines where necessary,
            access controls, and security policies. Successfully coordinated
            with multiple teams to ensure a smooth transition with zero downtime
            and minimal disruption to development workflows.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Established regular meetings of the company-wide Frontend Guild, and
            set the foundations for a new design system and a component library.
          </JobDescriptionItem>
          <JobDescriptionItem>
            Built an application to showcase Tractable’s AI capabilities to
            insurers.
          </JobDescriptionItem>
        </JobDescriptionList>
        <JobDescription>
          Tech stack: <Technology>React</Technology>,{" "}
          <Technology>TypeScript</Technology>, <Technology>Next.js</Technology>,{" "}
          <Technology>vanilla-extract</Technology>,{" "}
          <Technology>Node.js</Technology>,<Technology>GraphQL</Technology>,{" "}
          <Technology>Postgres</Technology>, <Technology>Prisma</Technology>,{" "}
          <Technology>Apollo Server</Technology>, <Technology>Kafka</Technology>
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Frontend contractor</JobTitle> at{" "}
          <Company>Trainline</Company>
        </JobHeading>
        <JobDate>February, 2020 to March, 2020</JobDate>
        <JobDescription>
          Migration to Google Analytics with heavy focus on testing and type
          system. Technologies used inlude <Technology>React</Technology>,{" "}
          <Technology>Redux</Technology>, <Technology>Enzyme</Technology>,{" "}
          <Technology>TypeScript</Technology>,{" "}
          <Technology>redux-observable</Technology>.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Frontend contractor</JobTitle> at{" "}
          <Company>Web3 labs</Company>
        </JobHeading>
        <JobDate>January, 2020 to March, 2020</JobDate>
        <JobDescription>
          <em>
            Development and support of two cryptocurrency explorer web
            applications.{" "}
          </em>
          Technologies include <Technology>React</Technology>,{" "}
          <Technology>REST</Technology>, <Technology>emotion</Technology>.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Frontend lead</JobTitle> at <Company>Eurostar</Company>
        </JobHeading>
        <JobDate>November, 2018 to October, 2019</JobDate>
        <JobDescription>
          <em>
            Support of{" "}
            <a
              className="text-[#222] font-bold no-underline hover:underline"
              href="https://www.eurostar.com/"
              target="_blank"
            >
              Eurostar main website
            </a>
            .
          </em>{" "}
          In my first lead role I’ve inherited an older codebase and a team
          without any developers. My responsibilities included hiring and
          coaching, managing complex, sometimes incompatible expectations from a
          lot of stakeholders while reducing technical debt and increasing
          performance of the site. I’ve introduced regular dev-only meetings to
          discuss potential improvements to the code and process, 1-to-1
          catchups to discuss impediments with individual developers, and
          facilitated continuous pair-programming and collaboration. I’ve pushed
          for a number of technical initiatives, including the new CMS (
          <Technology>Sanity</Technology>) and migration to the single page
          application model.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Frontend developer</JobTitle> at <Company>Eurostar</Company>
        </JobHeading>
        <JobDate>November, 2017 to November, 2018</JobDate>
        <JobDescription>
          <em>
            Development of{" "}
            <a
              className="text-[#222] font-bold no-underline hover:underline"
              href="https://packages.eurostar.com/"
              target="_blank"
            >
              packages booking platform
            </a>{" "}
            for Eurostar.
          </em>{" "}
          I’ve been with the project nearly from the start and worked in a close
          collaboration with the designer, UX and other teams. We’ve built a{" "}
          <Technology>React</Technology> SPA with{" "}
          <Technology>GraphQL</Technology> backend. Following successful launch,
          I’ve continued implementing new features and tightening integration
          with other parts of the business. Despite this being my first
          commercial React project, I have quickly learned advanced React
          patterns and gotchas and have been making sure our code doesn’t fall
          behind. Capitalising on my strive for pixel-perfect design, our team
          has build a shared component library, it later became the basis for
          the company-wide design system (which I gave an internal talk on).
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Frontend developer</JobTitle> at <Company>Kayako</Company>
        </JobHeading>
        <JobDate>March, 2015 to January, 2017</JobDate>
        <JobDescription>
          <em>
            Development of{" "}
            <a
              className="text-[#222] font-bold no-underline hover:underline"
              href="https://www.kayako.com/"
              target="_blank"
            >
              Kayako
            </a>
            ’s{" "}
            <a
              className="text-[#222] font-bold no-underline hover:underline"
              href="https://www.kayako.com/free-trial"
              target="_blank"
            >
              frontend Ember app
            </a>
            .
          </em>{" "}
          By far the largest application I’ve worked on at that point. I have
          joined the project from the start and, being the only constant team
          member in almost 2 years, have worked on pretty much every feature. I
          have learned to deal with frequently changing and incomplete
          requirements (often improving these requirements myself) and complex
          business domain. I kept improving overall quality of the codebase
          through refactoring, better abstractions, gradual migrations to new
          technologies, conventions and linters. Inspired by{" "}
          <Technology>React</Technology> and <Technology>Elm</Technology>, I’ve
          designed solutions for app’s state and change management. Having
          worked a lot on simplifying, modernizing and modularizing our CSS
          code, I became a go-to guy for all questions related to styling.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Co-founder &amp; developer</JobTitle> at{" "}
          <Company>Squelo</Company>
        </JobHeading>
        <JobDate>June, 2015 to August, 2015</JobDate>
        <JobDescription>
          <em>
            Development of a professional social network with{" "}
            <Technology>React.js</Technology> and{" "}
            <Technology>Node.js</Technology>.
          </em>
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Consultant</JobTitle> at <Company>Concrete</Company>
        </JobHeading>
        <JobDate>November, 2014 to February, 2015</JobDate>
        <JobDescription>
          <em>
            Architecture and development of a web application for the next
            generation of Concrete platform.
          </em>{" "}
          Borrowing lots of ideas from <Technology>Ember.js</Technology>,{" "}
          <Technology>Angular.js</Technology>, as well as my previous
          experiences in Ericsson and Indigo, I’ve been responsible for
          designing a scalable and maintainable application architecture, which
          keeps developers away from writing spaghetti code and pushes towards
          creating isolated and reusable component-based code. I’ve also
          delivered a number of application features.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Consultant</JobTitle> at <Company>CityHook/Indigo</Company>
        </JobHeading>
        <JobDate>February, 2014 to November, 2014</JobDate>
        <JobDescription>
          <em>Web client for Indigo customers.</em> My scope of responsibilities
          includes frontend and some parts of the backend. Designed as a
          single-page <Technology>Angular.js</Technology> application, the
          frontend is build using <Technology>Webpack</Technology> and{" "}
          <Technology>Gulp</Technology>.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Software Engineer</JobTitle> at <Company>Ericsson</Company>
        </JobHeading>
        <JobDate>June, 2012 to September, 2014</JobDate>
        <JobDescription>
          <em>
            Highly scalable client-side architecture evolving around a custom
            web framework.
          </em>{" "}
          Originally designed as an upper layer of the new network management
          system, the framework is now being used by Ericsson teams worldwide.
        </JobDescription>
        <JobDescription>
          My previous responsibilities included supporting web based application
          for visualizing correlated/aggregated network data with backend in{" "}
          <Technology>Scala</Technology> and <Technology>Lift</Technology>.
        </JobDescription>
        <JobDescription>
          I have also worked on a prototype of a policy manager for
          self-optimizing networks which was created using an alpha version of
          the aforementioned framework.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Software Engineer</JobTitle> at{" "}
          <Company>AssistUnion</Company>
        </JobHeading>
        <JobDate>January, 2011 to&nbsp;August, 2011</JobDate>
        <JobDescription>
          <em>Tour operator information aggregator</em> written in{" "}
          <Technology>PHP</Technology> and <Technology>JavaScript</Technology>.
          The goal was to collect information from multiple tour operators (such
          as destinations, prices, hotels etc.) and present it in a unified way,
          allowing user to perform search and compare similar tours from
          different operators.
        </JobDescription>
        <JobDescription>
          I have also worked on a <Technology>Model View ViewModel</Technology>{" "}
          web framework written in <Technology>Ruby</Technology>.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>QA/Developer</JobTitle> at <Company>innoWate</Company>
        </JobHeading>
        <JobDate>July, 2010 to December, 2010</JobDate>
        <JobDescription>
          innoWate specializes in social network games production. I performed a
          variety of tasks, ranging from testing and game content administration
          to social network integration and Russian to English localisation. I
          have also created a set of internal tools to aid myself with these
          tasks.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Web Developer</JobTitle> at <Company>Medialink</Company>
        </JobHeading>
        <JobDate>June, 2009 to March, 2010</JobDate>
        <JobDescription>
          <em>Creation of 20 websites for the internal CMS</em> using{" "}
          <Technology>PHP</Technology>, <Technology>HTML</Technology>,{" "}
          <Technology>CSS</Technology> and <Technology>JavaScript</Technology>.
        </JobDescription>
      </Job>
      <Job>
        <JobHeading>
          <JobTitle>Web Developer</JobTitle> at{" "}
          <Company>Zero Zoom Zone</Company>
        </JobHeading>
        <JobDate>September, 2007 to October, 2007</JobDate>
        <JobDescription>
          I have worked in a small team developing{" "}
          <em>online advertisement portal</em> written in{" "}
          <Technology>PHP</Technology>, <Technology>MySQL</Technology>,{" "}
          <Technology>HTML</Technology>, <Technology>CSS</Technology>.
        </JobDescription>
      </Job>
      <SectionHeading>Open-source and non-commercial projects</SectionHeading>
      <p className="leading-[1.3] text-justify my-[1em] break-inside-avoid">
        All of my open-source software, as well as contributions to other
        projects, is available at{" "}
        <a
          className="text-[#222] font-bold no-underline hover:underline"
          href="https://github.com/Dremora"
        >
          github.com/Dremora
        </a>
        . The major ones are listed below:
      </p>
      <div>
        <Project>
          <h3 className="break-after-avoid break-inside-avoid font-normal mt-[1em] mb-[0.7rem] text-[1.17em]">
            foo_musicbrainz{" "}
            <ProjectLink href="https://github.com/Dremora/foo_musicbrainz">
              github.com/Dremora/foo_musicbrainz
            </ProjectLink>
          </h3>
          <ProjectDescription>
            foo_musicbrainz is a component for foobar2000 media player. It can
            tag files by fetching data from MusicBrainz. It is written in{" "}
            <Technology>C++</Technology>/<Technology>ATL</Technology> with a bit
            of preprocessor metaprogramming.
          </ProjectDescription>
        </Project>
        <Project>
          <h3 className="break-after-avoid break-inside-avoid font-normal mt-[1em] mb-[0.7rem] text-[1.17em]">
            redump.org{" "}
            <ProjectLink href="http://redump.org">redump.org</ProjectLink>
          </h3>
          <ProjectDescription>
            Started in 2006. The goal behind the project is to preserve old
            video games released on optical media in the best way possible. The
            website essentially provides a database of checksums of optical
            media copies (“dumps”). A strong community has evolved around the
            website over the years, the new data is being added on a daily
            basis. redump.org is backed by <Technology>PHP</Technology> and{" "}
            <Technology>MySQL</Technology>.{" "}
            <em>Note: the project is currently maintained by someone else.</em>
          </ProjectDescription>
        </Project>
      </div>
      <SectionHeading>Education</SectionHeading>
      <Education>
        <EducationHeading>
          <EducationDegree>
            M.Sc. in Applied Software Technology
          </EducationDegree>
        </EducationHeading>
        <EducationDetails>
          <College>Dublin Institute of Technology (Dublin, Ireland)</College>,{" "}
          <EducationDate>2011 to 2012</EducationDate>
        </EducationDetails>
        <EducationDescription>
          Got awarded “
          <Award>First place MSc in Applied Software Technology</Award>” plus a
          gold medal. Gave a series of math and programming tutorials for
          classmates.
        </EducationDescription>
      </Education>
      <Education>
        <EducationHeading>
          <EducationDegree>B.Sc. in Electronic Engineering</EducationDegree> (
          <span>Telecommunications and computer networks</span>)
        </EducationHeading>
        <EducationDetails>
          <College>Transporta un Sakaru Instituts (Riga, Latvia)</College>,{" "}
          <EducationDate>2007 to 2011</EducationDate>
        </EducationDetails>
        <EducationDescription>
          Got awarded “
          <Award>
            Best student in Telecommunications and computer networks
          </Award>
          ”.
        </EducationDescription>
        <EducationDescription>
          Thesis:{" "}
          <span className="font-italic">
            Developing a peer-to-peer network framework
          </span>
          . Source code:{" "}
          <a
            href="https://github.com/Dremora/foonet"
            className="text-[#222] font-bold no-underline hover:underline"
          >
            github.com/Dremora/foonet
          </a>
        </EducationDescription>
      </Education>
      <Education>
        <EducationHeading>
          <EducationDegree>Erasmus Intensive Programme</EducationDegree>{" "}
          <span>in developing open source system expertise in Europe</span>
        </EducationHeading>
        <EducationDetails>
          <College>
            Helsinki Metropolia University of Applied Sciences (Espoo, Finland)
          </College>
          , <EducationDate>March, 2010</EducationDate>
        </EducationDetails>
        <EducationDescription>
          Our team has developed a cloud render farm. Technologies used inlude{" "}
          <Technology>Ruby</Technology>, <Technology>Sinatra</Technology>,{" "}
          <Technology>MongoDB</Technology>, <Technology>Blender</Technology>.
        </EducationDescription>
      </Education>
      <Education>
        <EducationHeading>
          <EducationDegree>
            International University exchange program “Erasmus”
          </EducationDegree>
        </EducationHeading>
        <EducationDetails>
          <College>University of Žilina (Žilina, Slovakia)</College>,{" "}
          <EducationDate>February, 2010 to June, 2010</EducationDate>
        </EducationDetails>
      </Education>
    </div>
  );
}
