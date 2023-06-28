import React from "react";
import { styled } from "../../stitches.config.js";
import { Command } from "cmdk";
import { useRouter } from "next/router";
import { Twitter, Github, Linkedin, Smartphone, Mail } from "lucide-react";

const StyledCommand = styled(Command, {
  boxSizing: "border-box",
  background: "rgba(2,0,10, 0.80)",
  overflow: "hidden",
  fontFamily: "$default",
  transition: "transform 100ms ease",
  padding: "12px",
  borderRadius: "12px",
  backdropFilter: "blur(6px)",
  webkitBackdropFilter: "blur(6px)",
});

const StyledCommandInput = styled(Command.Input, {
  boxSizing: "border-box",
  fontFamily: "$default",
  fontSize: "$sm",
  lineHeight: "$none",
  fontWeigth: "$regular",
  letterSpacing: "$tracking-wide",
  width: "100%",
  border: "none",
  outline: "none",
  padding: "12px",
  marginBottom: "16px",
  marginTop: "4px",
  borderRadius: "8px",
  backgroundColor: "$mauveA3",
  caretColor: "$mauveA10",
  color: "$mauveA12",

  "&::placeholder": {
    color: "$mauveA8",
  },
});

const StyledCommandGroup = styled(Command.Group, {
  userSelect: "none",
  fontSize: "$xs",
  fontFamily: "$default",
  fontWeight: "$extra-bold",
  letterSpacing: "$tracking-default",
  color: "$mauveA11",
  padding: "0 4px",
  flexDirection: "column",
  alignItems: "start",
  marginBottom: "12px",
  width: "100%",
});

const StyledCommandList = styled(Command.List, {
  maxHeight: "400px",
  overflow: "auto",
  overscrollBehaviour: "contain",
  transtition: "150ms ease",
  transitionProperty: "height",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const StyledItem = styled(Command.Item, {
  contentVisibility: "auto",
  cursor: "pointer",
  borderRadius: "8px",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  letterSpacing: "$tracking-tight",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  padding: "12px 12px",
  marginTop: "4px",
  color: "$mauve8",
  userSelect: "none",
  willChange: "background, color",
  transition: "all 150ms ease",
  transitionProperty: "none",
  width: "100%",

  '&[aria-selected="true"]': {
    background: "$mauveA3",
    color: "$mauveA12",
    // boxShadow: "$toolbar",
  },
  '&[aria-disabled="true"]': {
    color: "$mauveA9",
    cursor: "not-allowed",
  },
  "&:active": {
    transitionProperty: "background",
    background: "$mauveA4",
  },
});

const StyledCommandEmpty = styled(Command.Empty, {
  fontSize: "$base",
  fontWeight: "$regular",
  letterSpacing: "$tracking-wide",
  color: "$mauveA11",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  paddingBottom: "12px",
});

const StyledBadgeContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const StyledBadge = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  padding: "4px",
  fontSize: "$sm",
  color: "$crimson1",
  marginRight: "6px",
  userSelect: "none",
  textTransform: "capitalize",
  fontWeight: "$medium",
  fontFamily: "$default",

  "&:nth-child(2)::before": {
    display: "flex",
    alignItems: "center",
    content: ">",
    color: "$mauve9",
    fontSize: "$sm",
    fontFamily: "$default",
    fontWeight: "$bold",
    marginRight: "14px",
  },
});

const StyledShortcutsContainer = styled("div", {
  display: "flex",
  marginLeft: "auto",
  gap: "4px",
});

const StyledShortcut = styled("kbd", {
  fontFamily: "$default",
  fontSize: "$xs",
  fontWeight: "$medium",
  textTransform: "uppercase",
  width: "24px",
  height: "24px",
  padding: "4px",
  borderRadius: "4px",
  color: "$crimson3",
  background: "$mauveA5",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 2px $mauveA1",
});

const StyledToolbar = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  justifyContent: "end",
  paddingTop: "8px",
  width: "100%",
  borderTop: "1px solid $mauveA4",
});

const StyledShortcutLabel = styled("kbd", {
  fontFamily: "$default",
  fontSize: "$xs",
  fontWeight: "$regular",
  pr: "6px",
  color: "$mauve11",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const Box = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

// Exports
export const CommandDialog = StyledCommand;
export const CommandInput = StyledCommandInput;
export const CommandGroup = StyledCommandGroup;
export const CommandItem = StyledItem;
export const CommandList = StyledCommandList;
export const CommandEmpty = StyledCommandEmpty;

// Make command character useable in React
let backspace = String.fromCodePoint(0x21b5);

export default function CMDK() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [pages, setPages] = React.useState<string[]>(["dashboard"]);
  const activePage = pages[pages.length - 1];
  const isHome = activePage === "dashboard";
  const [open, setOpen] = React.useState(false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return;
      }

      if (e.key === "Backspace") {
        e.preventDefault();
        popPage();
      }
    },
    [inputValue.length, isHome, popPage]
  );

  return (
    <div>
      <CommandDialog
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (isHome || inputValue.length) {
            return;
          }

          if (e.key === "Backspace") {
            e.preventDefault();
            popPage();
          }
        }}
      >
        <StyledBadgeContainer>
          {pages.map((p) => (
            <StyledBadge key={p}>{p}</StyledBadge>
          ))}
        </StyledBadgeContainer>
        <CommandInput
          autoFocus
          placeholder="What are you looking for?"
          onValueChange={(value) => {
            setInputValue(value);
          }}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {activePage === "dashboard" && (
            <Dashboard
              searchProjects={() => setPages([...pages, "projects"])}
              searchBlog={() => setPages([...pages, "blog"])}
            />
          )}
          {activePage === "projects" && <Projects />}
          {activePage === "blog" && <BlogPosts />}
        </CommandList>
        <StyledToolbar>
          <Box>
            <StyledShortcutLabel>Open Link</StyledShortcutLabel>
            <StyledShortcut>
              <ReturnIcon />
            </StyledShortcut>
          </Box>
          <Box>
            <StyledShortcutLabel>Clear Input</StyledShortcutLabel>
            <StyledShortcut>
              <BackspaceIcon />
            </StyledShortcut>
          </Box>
        </StyledToolbar>
      </CommandDialog>
    </div>
  );
}

function Dashboard({
  searchProjects,
  searchBlog,
}: {
  searchProjects: Function;
  searchBlog: Function;
}) {
  const router = useRouter();
  return (
    <>
      <CommandGroup heading="Projects">
        <Item
          onSelect={() => {
            searchProjects();
          }}
        >
          <ProjectsIcon />
          Search Projects ...
        </Item>
      </CommandGroup>
      <CommandGroup heading="Blog Posts">
        <Item
          onSelect={() => {
            searchBlog();
          }}
        >
          <BlogIcon />
          Search Blog Posts ...
        </Item>
      </CommandGroup>
      <CommandGroup heading="Socials">
        <Item onSelect={() => router.push("https://twitter.com/boonikad93")}>
          <Twitter size={20} />
          View Twitter Profile ...
        </Item>
        <Item onSelect={() => router.push("https://github.com/toostewechel")}>
          <Github size={20} />
          View GitHub Profile ...
        </Item>

        <Item
          onSelect={() =>
            router.push(
              "https://www.linkedin.com/in/tom-oostewechel-5392aa13b/"
            )
          }
        >
          <Linkedin size={20} />
          View LinkedIn Profile ...
        </Item>
        <Item onSelect={() => router.push("mailto:tomas93@skiff.com")}>
          <Mail size={20} />
          E-mail
        </Item>
        <Item onSelect={() => router.push("tel:0612647976")}>
          <Smartphone size={20} />
          Phone Number
        </Item>
      </CommandGroup>
    </>
  );
}

function Projects() {
  const router = useRouter();
  return <></>;
}

function BlogPosts() {
  const router = useRouter();
  return (
    <>
      <CommandGroup heading="2023">
        <Item
          onSelect={() =>
            router.push("/blog/deploy-your-site-on-the-decentralised-cloud")
          }
        >
          <BlogIcon />
          Deploy your Site on the Decentralised Cloud
        </Item>
        <Item
          onSelect={() =>
            router.push("/blog/living-with-a-linear-mind-in-an-exponential-age")
          }
        >
          <BlogIcon />
          Living With a Linear Mind in an Exponential Age
        </Item>
        <Item
          onSelect={() =>
            router.push(
              "/blog/the-rise-of-the-unstoppable-decentralised-and-semantic-web"
            )
          }
        >
          <BlogIcon />
          The Rise of the Unstoppable Decentralised and Semantic Web
        </Item>
      </CommandGroup>
      <CommandGroup heading="2020">
        <Item onSelect={() => router.push("/blog/design-for-accessibility")}>
          <BlogIcon />
          Design Accessible Experiences for the Healthcare Sector
        </Item>
      </CommandGroup>
    </>
  );
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <CommandItem onSelect={onSelect}>
      {children}
      {shortcut && (
        <StyledShortcutsContainer cmdk-vercel-shortcuts="">
          {shortcut.split(" ").map((key) => {
            return <StyledShortcut key={key}>{key}</StyledShortcut>;
          })}
        </StyledShortcutsContainer>
      )}
    </CommandItem>
  );
}

function ProjectsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.29 7 12 12 20.71 7"></polyline>
      <line x1="12" y1="22" x2="12" y2="12"></line>
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  );
}

function BackspaceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
      <line x1="18" y1="9" x2="12" y2="15"></line>
      <line x1="12" y1="9" x2="18" y2="15"></line>
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="9 10 4 15 9 20"></polyline>
      <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
    </svg>
  );
}
