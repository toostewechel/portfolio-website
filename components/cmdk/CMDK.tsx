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
  fontWeight: "$medium",
  letterSpacing: "$tracking-tight",
  color: "$gray10",
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
    background: "$violet4",
  },
})

const StyledShortcutsContainer = styled("div", {
  display: "flex",
  marginLeft: "auto",
  gap: "4px",
})

const StyledShortcut = styled("kdb", {
  fontFamily: "$default",
  fontSize: "$xs",
  fontWeight: "$medium",
  textTransform: "uppercase",
  minWidth: "20px",
  height: "20px",
  padding: "4px",
  borderRadius: "4px",
  color: "$blue11",
  background: "$blue3",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 2px $blue5",

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
        <Item
          shortcut="P"
          onSelect={() => {
            searchProjects()
          }}
        >
          <ProjectsIcon />
          Search Projects ...
        </Item>
      </CommandGroup>
      <CommandGroup heading="Blog Posts">
        <Item
          shortcut="B"
          onSelect={() => {
            searchBlog()
          }}
        >
          <BlogIcon />
          Search Blog Posts ...
        </Item>
      </CommandGroup>
      <CommandGroup heading="Socials">
        <Item shortcut="⇧ D">
          <TwitterIcon />
          View Twitter Profile ...
        </Item>
        <Item>
          <GithubIcon />
          View GitHub Profile ...
        </Item>
        <Item>
          <LinkedInIcon />
          View LinkedIn Profile ...
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
      <Item>
        <BlogIcon />
        Blog 1
      </Item>
      <Item>
        <BlogIcon />
        Blog 2
      </Item>
      <Item>
        <BlogIcon />
        Blog 3
      </Item>
      <Item>
        <BlogIcon />
        Blog 4
      </Item>
      <Item>
        <BlogIcon />
        Blog 5
      </Item>
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
            return <StyledShortcut key={key}>{key}</StyledShortcut>
          })}
        </StyledShortcutsContainer>
      )}
    </CommandItem>
  )
}


function ProjectsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
  )
}

function BlogIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
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

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
  )
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  )
}
