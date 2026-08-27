# Document Definitions

This document establishes what each project document is responsible for.
Each document should have a clear purpose and should not duplicate the
responsibility of another document.

## Documentation Structure

                         PROJECT
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
      CONTEXT              WHAT?               HOW?
        │                   │                   │
   ┌────┴────┐       ┌──────┼──────┐       ┌────┴────┐
   │         │       │      │      │       │         │
Overview   Client  Requirements Sitemap Content   Design
           Notes
                                                   Development
                                                     Log

                        SCOPE PARKING
                              │
                              ▼
                       Future Features


## project-overview.md

### Purpose

Provides a high-level overview of the project.

### Answers

- What is the project?
- Who is it for?
- Why are we doing it?
- What is the current goal?
- Who is working on it?
- When did it start?
- What is the current status?

### Contains

- Project name
- Target business
- Project type
- Status
- Developers
- Start date
- Project goal
- Current objective/context

### Does NOT contain

- Detailed business research
- Detailed website requirements
- Page structure
- Design decisions
- Development history
- Future feature ideas


## client-notes.md

### Purpose

Records information, observations, assumptions, and unknowns about
the target business.

### Answers

- What do we currently know about the business?
- What have we observed?
- What information have we obtained?
- What do we not know yet?
- What needs to be confirmed?

### Contains

- Business information
- Current online presence
- Observed services
- Contact information
- Business observations
- Assumptions
- Unknowns
- Information that needs validation

### Does NOT contain

- Website requirements
- Website page structure
- Design decisions
- Development tasks
- Pricing
- Features we have decided to build


## requirements.md

### Purpose

Defines what the website must accomplish and establishes the scope
of the current version.

### Answers

- What must the website do?
- What must each major page accomplish?
- What qualities must the website have?
- What is included in the current version?
- What is explicitly outside the current scope?

### Contains

- Project/website objective
- Functional requirements
- Non-functional requirements
- Page-level requirements
- Technical requirements
- Out-of-scope items

### Does NOT contain

- Detailed business research
- Visual design decisions
- Actual website content
- Development history
- Future feature ideas beyond scope definition


## sitemap.md

### Purpose

Defines the structure and hierarchy of the website's pages.

### Answers

- What pages does the website contain?
- How are the pages organized?
- What is the relationship between the pages?

### Contains

- Website pages
- Page hierarchy
- Navigation structure

### Does NOT contain

- Page requirements
- Page sections
- Visual layout
- Actual content
- Development details

### Current Structure

Royal Paparazzi Website
│
├── Home
├── About
├── Services
├── Gallery
└── Contact


## content.md

### Purpose

Defines the information and assets needed to populate the website.

### Answers

- What information do we need?
- What content needs to be written or provided?
- What images/assets are required?
- What content is still missing or needs confirmation?

### Contains

- Business information
- Contact information
- Services
- About content
- Gallery requirements
- Testimonials
- Images and other required assets
- Content that is still needed or needs confirmation

### Does NOT contain

- Website requirements
- Page hierarchy
- Visual design decisions
- Development history
- Future features


## design.md

### Purpose

Documents the visual and interaction decisions for the website.

### Answers

- How should the website look?
- How should information be visually organized?
- What visual direction are we using?
- How should the design behave across screen sizes?

### Contains

- Design direction
- Color system
- Typography
- Spacing
- Layout
- Visual hierarchy
- Components/UI patterns
- Image treatment
- Responsive design decisions
- Interaction decisions

### Does NOT contain

- Business research
- Website requirements
- Actual development history
- Future features
- Unrelated technical implementation details


## development-log.md

### Purpose

Records what has actually been done during the project.

### Answers

- What did we do?
- When did we do it?
- What decisions were made during development?
- What problems did we encounter?
- What was changed?

### Contains

- Development milestones
- Important implementation decisions
- Problems encountered
- Fixes
- Testing results
- Deployment progress
- Significant project changes

### Does NOT contain

- Planned requirements
- Business research
- Design specification
- Future ideas unless they resulted from development


## future-features.md

### Purpose

Records ideas and functionality that are intentionally excluded from
the current version but may be considered later.

### Answers

- What could we build later?
- What ideas are we deliberately not implementing now?
- What potential extensions have been identified?

### Contains

- Potential future features
- Possible service extensions
- Potential technical upgrades
- Ideas resulting from project/client discussions

### Does NOT contain

- Features required for the current version
- Current requirements
- Current development tasks
- Features that have already been rejected entirely


# Documentation Rules

## 1. One document, one responsibility

Information should be placed in the document whose purpose it directly
supports.

Do not create duplicate versions of the same information across
multiple documents.

## 2. Reference instead of duplicate

If another document already contains the detailed information, reference
that document instead of copying the information.

## 3. Current scope comes first

Future ideas should not be added to the current requirements simply
because they may become useful later.

Record them in `future-features.md`.

## 4. Unknown information stays unknown

Do not invent missing business or client information.

Use labels such as:

- `[TO CONFIRM]`
- `[CONTENT NEEDED]`
- `[UNKNOWN]`

until the information is verified.

## 5. Documentation should support execution

Documentation exists to help us make decisions, build the project,
communicate clearly, and keep scope under control.

It should not become work for its own sake.