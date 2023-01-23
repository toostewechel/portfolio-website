import React from 'react'
import { styled } from "../../stitches.config.js";
import { Command } from 'cmdk'

const StyledCommand = styled(Command, {
  maxWidth: "640px",
  width: "100%",
  padding: "8px",
  background: "white",
  overflow: "hidden",
  fontFamily: "$default",
  transition: "transform 100ms ease",
})

const StyledCommandInput = styled(Command.Input, {
  fontFamily: "$default",
  fontSize: "$base",
  fontWeigth: "$regular",
  width: "100%",
  border: "none",
  outline: "none",
  padding: "8px 8px 12px 8px",
  borderBottom: "1px solid $gray6",
  marginBottom: "16px",
  borderRadius: 0,

  "&::placeholder": {
    color: "$gray9",
  }
})

const StyledBadge = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 8px",
  fontSize: "$xs",
  color: "$blue11",
  backgroundColor: "$blue3",
  border: "solid 2px $blue5",
  borderRadius: "4px",
  margin: "4px 0 4px 4px",
  userSelect: "none",
  textTransform: "uppercase",
  fontWeight: "$medium",
  fontFamily: "$default",
})

const StyledCommandGroup = styled(Command.Group, {
  userSelect: "none",
  fontSize: "$sm",
  fontFamily: "$header",
  color: "$mauve11",
  padding: "0 8px",
  flexDirection: "column",
  alignItems: "start",
  marginBottom: "12px",
  width: "100%",
})

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
  color: "$mauve11",
  userSelect: "none",
  willChange: "background, color",
  transition: "all 150ms ease",
  transitionProperty: "none",
  width: "100%",

  '&[aria-selected="true"]': {
    background: "$gray2",
    color: "$mauve12",
  },
  '&[aria-disabled="true"]': {
    color: "$gray8",
    cursor: "not-allowed",
  },
  '&:active': {
    transitionProperty: "background",
    background: "$gray3",
  },
})

const StyledShortcutsContainer = styled("div", {
  display: "flex",
  marginLeft: "auto",
  gap: "8px",
})

const StyledShortcut = styled("kdb", {
  fontFamily: "$default",
  fontSize: "$sm",
  textTransform: "uppercase",
  minWidth: "20px",
  padding: "4px",
  height: "20px",
  borderRadius: "4px",
  color: "$gray11",
  background: "$gray3",
  display: "inline-flex",
  
})

// Exports
export const CommandDialog = StyledCommand;
export const CommandInput = StyledCommandInput;
export const CommandGroup = StyledCommandGroup;
export const CommandItem = StyledItem;

export default function CMDK() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [inputValue, setInputValue] = React.useState('')

  const [pages, setPages] = React.useState<string[]>(['home'])
  const activePage = pages[pages.length - 1]
  const isHome = activePage === 'home'

  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages]
      x.splice(-1, 1)
      return x
    })
  }, [])

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (isHome || inputValue.length) {
        return
      }

      if (e.key === 'Backspace') {
        e.preventDefault()
        popPage()
      }
    },
    [inputValue.length, isHome, popPage],
  )

  return (
    <div>
      <CommandDialog
        className="vercel"
        open={open} 
        onOpenChange={setOpen} 
        label="Global Command Menu"
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent) => {

          if (isHome || inputValue.length) {
            return
          }

          if (e.key === 'Backspace') {
            e.preventDefault()
            popPage()
          }
        }}
      >
        <div>
          {pages.map((p) => (
            <StyledBadge key={p} >
              {p}
            </StyledBadge>
          ))}
        </div>
        <CommandInput
          autoFocus
          placeholder="What are you looking for?"
          onValueChange={(value) => {
            setInputValue(value)
          }}
        />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {activePage === 'home' && <Home searchProjects={() => setPages([...pages, 'projects'])} searchBlog={() => setPages([...pages, 'blog'])} />}
          {activePage === 'projects' && <Projects />}
          {activePage === 'blog' && <BlogPosts />}
        </Command.List>
      </CommandDialog>
    </div>
  )
}

function Home({ searchProjects, searchBlog }: { searchProjects: Function, searchBlog: Function }) {
  return (
    <>
      <CommandGroup heading="Projects">
        <CommandItem
          shortcut="S P"
          onSelect={() => {
            searchProjects()
          }}
        >
          <ProjectsIcon />
          Search Projects...
        </CommandItem>
      </CommandGroup>
      <CommandGroup heading="Blog">
        <Item 
          shortcut="⇧ P"
          onSelect={() => {
            searchBlog()
          }}
        >
          <TeamsIcon />
          Search Blog Posts...
        </Item>
      </CommandGroup>
      <CommandGroup heading="Socials">
        <Item shortcut="⇧ D">
          <DocsIcon />
          Search Docs...
        </Item>
        <Item>
          <FeedbackIcon />
          Send Feedback...
        </Item>
        <Item>
          <ContactIcon />
          Contact Support
        </Item>
      </CommandGroup>
    </>
  )
}

function Projects() {
  return (
    <>
      <Item>Project 1</Item>
      <Item>Project 2</Item>
      <Item>Project 3</Item>
      <Item>Project 4</Item>
      <Item>Project 5</Item>
      <Item>Project 6</Item>
    </>
  )
}

function BlogPosts() {
  return (
    <>
      <Item>Blog 1</Item>
      <Item>Blog 2</Item>
      <Item>Blog 3</Item>
      <Item>Blog 4</Item>
      <Item>Blog 5</Item>
      <Item>Blog 6</Item>
    </>
  )
}

function Item({
  children,
  shortcut,
  onSelect = () => { },
}: {
  children: React.ReactNode
  shortcut?: string
  onSelect?: (value: string) => void
}) {
  return (
    <CommandItem onSelect={onSelect}>
      {children}
      {shortcut && (
        <StyledShortcutsContainer cmdk-vercel-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <kbd key={key}>{key}</kbd>
          })}
        </StyledShortcutsContainer>
      )}
    </CommandItem>
  )
}


function ProjectsIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M3 3h7v7H3z"></path>
      <path d="M14 3h7v7h-7z"></path>
      <path d="M14 14h7v7h-7z"></path>
      <path d="M3 14h7v7H3z"></path>
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  )
}

function TeamsIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
      <path d="M16 3.13a4 4 0 010 7.75"></path>
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
    </svg>
  )
}

function DocsIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
      <path d="M10 9H8"></path>
    </svg>
  )
}

function FeedbackIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <path d="M22 6l-10 7L2 6"></path>
    </svg>
  )
}
