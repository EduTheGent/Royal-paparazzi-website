# Design

## Design Goals

The website should present Royal Paparazzi as a professional photography
studio while keeping photography and visual content as the primary focus.

The design should:

- Establish a strong and recognizable visual identity.
- Make the photography work the main visual focus.
- Feel professional and trustworthy.
- Make the business and its services easy to understand.
- Make contacting the business easy.
- Work well across mobile, tablet, and desktop.
- Support multiple visual directions without requiring the website structure
  to be rebuilt.

---

## Design Direction

The website will be developed around a shared design system that can support
multiple visual themes.

The themes will use the same core website structure and content while allowing their visual presentation to differ.

### Theme 01 — Royal Brand

**Direction:** Brand-derived, bold, dark, and confident.

This direction is based on the existing Royal Paparazzi visual identity,
particularly the dark background, red camera/logo treatment, and light text
visible in the business's existing promotional material.

**Personality:**

- Bold
- Confident
- Recognizable
- Professional
- Dramatic

**Visual approach:**

- Dark primary background
- Red as the main brand accent
- Light text
- Strong photography
- High contrast
- Bold visual sections

The goal is to make the website feel like a professional evolution of the
business's existing branding rather than replacing it with an unrelated
identity.

---

### Theme 02 — Luxury Editorial

**Direction:** Premium, elegant, and photography-focused.

This direction explores a more sophisticated presentation of the business
while maintaining the same underlying content and website structure.

**Personality:**

- Elegant
- Premium
- Sophisticated
- Minimal
- Artistic

**Visual approach:**

- Dark or deep neutral backgrounds
- Restrained accent colors
- Large photography
- Strong typographic hierarchy
- Generous whitespace
- Minimal decorative elements

---

### Theme 03 — Clean Contemporary

**Direction:** Modern, clean, and approachable.

This direction provides a lighter and more straightforward alternative to the two darker concepts.

**Personality:**

- Modern
- Clean
- Professional
- Approachable
- Simple

**Visual approach:**

- Light or off-white background
- Dark text
- Restrained use of the Royal Paparazzi red
- Clean layouts
- Strong grid structure
- Clear calls to action
- Photography used as the primary visual element

---

## Shared Design Principles

Regardless of the selected theme, the website should follow these principles:

### Photography First

Photography should remain one of the strongest visual elements throughout
the website.

### Clear Hierarchy

Important information such as the business name, services, photography, and
contact actions should be visually easy to identify.

### Simplicity

Visual elements should support the content rather than compete with it.

### Consistency

Colors, typography, spacing, buttons, cards, and other interface elements
should follow a consistent system throughout the website.

### Responsive by Design

The design should be planned for different screen sizes rather than treating
mobile as an afterthought.

### Theme Flexibility

Themes should primarily change the visual presentation of the website while
preserving the underlying structure and content.

Major structural differences should only be introduced when they provide a
clear design benefit.

### Sample image

![alt text](image.png)

---
---

## Color System

The website will use semantic color roles rather than assigning colors
directly to individual components.

This allows the same interface to support multiple visual themes while
maintaining consistent relationships between colors.

### Color Roles

The core color roles are:

| Role | Purpose |
| --- | --- |
| Background | Main page background |
| Surface | Cards, panels, and elevated sections |
| Primary | Main brand/action color |
| Secondary | Supporting accent color |
| Text | Primary readable text |
| Text Muted | Secondary/supporting text |
| Border | Dividers, outlines, and subtle boundaries |
| On Primary | Text/icons placed on the primary color |

Theme-specific values will be defined in the website's theme system rather
than directly throughout the HTML.

---

## Theme 01 — Royal Brand

The Royal Brand palette is derived from the existing Royal Paparazzi visual
identity observed in its promotional material.

The existing branding prominently uses a dark background, red logo/accent,
and light text.

### Preliminary Palette

| Role | Color | Purpose |
|---|---|---|
| Background | `#0D0D0F` | Main page background |
| Surface | `#17171A` | Cards and secondary sections |
| Primary | `#C92F3A` | Main brand/action color |
| Secondary | `#8F2028` | Deeper red accent |
| Text | `#F5F5F5` | Primary text |
| Text Muted | `#A7A7AA` | Supporting text |
| Border | `#2B2B30` | Subtle borders/dividers |
| On Primary | `#FFFFFF` | Text on red elements |

### Design Intent

The palette should preserve the recognizable relationship between the
business's existing red branding and dark background while presenting it in a
more polished and consistent way.

Red should be used deliberately for:

- Primary calls to action
- Important highlights
- Selected navigation states
- Small decorative accents
- Important interactive elements

Red should not be used as the dominant color of every section.

---

## Theme 02 — Luxury Editorial

The Luxury Editorial palette should create a more sophisticated and premium
presentation while keeping the photography as the primary visual focus.

### Preliminary Palette

| Role | Color | Purpose |
| --- | --- | --- |
| Background | `#11100E` | Main page background |
| Surface | `#1C1915` | Secondary sections |
| Primary | `#C9A46A` | Premium accent/action color |
| Secondary | `#8C7048` | Supporting accent |
| Text | `#F4EFE6` | Primary text |
| Text Muted | `#AFA79B` | Supporting text |
| Border | `#39332A` | Subtle borders/dividers |
| On Primary | `#11100E` | Text on gold elements |

### Design Intent

The palette should feel understated rather than decorative.

The accent color should be used sparingly for:

- Calls to action
- Section accents
- Important labels
- Fine borders
- Selected states

Photography should provide most of the visual richness.

---

## Theme 03 — Clean Contemporary

The Clean Contemporary palette provides a lighter and more approachable
alternative.

It retains a connection to the Royal Paparazzi identity through restrained
use of the brand red.

### Preliminary Palette

| Role | Color | Purpose |
| --- | --- | --- |
| Background | `#F7F6F3` | Main page background |
| Surface | `#FFFFFF` | Cards and elevated sections |
| Primary | `#C92F3A` | Main brand/action color |
| Secondary | `#7D252B` | Supporting accent |
| Text | `#171719` | Primary text |
| Text Muted | `#68686D` | Supporting text |
| Border | `#E2E1DE` | Subtle borders/dividers |
| On Primary | `#FFFFFF` | Text on red elements |

### Design Intent

The design should feel clean and modern without becoming disconnected from
the Royal Paparazzi identity.

The red accent should remain recognizable but controlled.

---

## Color Usage Rules

Regardless of the selected theme:

- The background should provide the dominant visual foundation.
- Primary colors should be reserved for important actions and brand
  emphasis.
- Secondary colors should support the primary color rather than compete with
  it.
- Muted text should be used for supporting information, not essential
  content.
- Borders should remain subtle.
- Large areas of strong accent colors should be avoided unless deliberately
  used as part of a section or visual composition.
- Photography should remain one of the strongest sources of visual emphasis.
- Text must remain sufficiently distinguishable from its background.

## Theme Implementation

The website will use CSS custom properties to store theme values.

Theme values will be mapped to semantic color roles such as:

- `background`
- `surface`
- `primary`
- `secondary`
- `text`
- `text-muted`
- `border`
- `on-primary`

Tailwind CSS will use these semantic roles when styling website components.

The exact implementation of the theme system will be defined during
development.

## Important thing to note

These hex values are preliminary, not final.

I don't want us to pretend that #C92F3A is somehow the objectively correct Royal Paparazzi red. We're using the existing sign as a reference and establishing a starting point.

Before implementation, we'll refine things like:

Is the red too bright?
Is the dark background actually navy, charcoal, or almost black?
Does the red work against the photography?
Does the gold in Theme 02 feel appropriate?
Is Theme 03 sufficiently connected to the brand?

And we'll eventually test the colors on actual sections of the website, not just in a table.

---
---

## Typography

Typography should provide clear hierarchy while allowing photography to
remain the primary visual focus.

The typography system will define semantic roles rather than styling text
individually throughout the website.

---

## Typography Roles

The main typography roles are:

| Role | Purpose |
|---|---|
| Display | Large hero and prominent visual headings |
| Heading | Page and section headings |
| Subheading | Supporting headings and introductory text |
| Body | Main readable content |
| Small | Supporting information and secondary text |
| Label | Buttons, navigation, categories, and short UI labels |

---

## Font Families

The website will use a primary body font and may use a separate display
font for headings where appropriate.

### Body Font

**Family:** [TO SELECT]

The body font should:

- Be highly readable.
- Work well across different screen sizes.
- Have a clean and professional appearance.
- Support the required characters and punctuation.

### Display / Heading Font

**Family:** [TO SELECT]

The display font may differ from the body font when required by the selected
visual theme.

It should:

- Create a clear visual identity.
- Remain readable at large sizes.
- Complement the photography.
- Avoid becoming overly decorative.

---

## Type Scale

The website will use a consistent type scale.

### Preliminary Scale

| Role | Size | Usage |
|---|---:|---|
| Display | `clamp(2.5rem, 6vw, 5rem)` | Hero/display headings |
| H1 | `clamp(2rem, 4vw, 3.5rem)` | Main page headings |
| H2 | `clamp(1.75rem, 3vw, 2.5rem)` | Major section headings |
| H3 | `clamp(1.25rem, 2vw, 1.75rem)` | Component/subsection headings |
| Body | `1rem` | Main paragraph text |
| Small | `0.875rem` | Supporting information |
| Label | `0.875rem` | Buttons and UI labels |

These values are preliminary and may be adjusted during implementation and
visual testing.

---

## Font Weights

The typography system will primarily use:

- Regular — `400`
- Medium — `500`
- Semibold — `600`
- Bold — `700`

Not every weight needs to be used in every theme.

Font weight should be used to establish hierarchy rather than decoration.

---

## Line Height

### Headings

Headings should generally use tighter line heights to maintain a strong
visual hierarchy.

**Target range:** `1.1 – 1.25`

### Body

Body text should use a more comfortable reading line height.

**Target range:** `1.5 – 1.7`

---

## Theme Typography

Typography may vary between themes when it contributes meaningfully to the
visual direction.

### Royal Brand

Typography should feel:

- Bold
- Direct
- Confident
- Modern

The typography should support the existing bold visual identity without
becoming overly decorative.

### Luxury Editorial

Typography should feel:

- Elegant
- Refined
- Sophisticated
- Editorial

A contrasting display and body font combination may be used if it improves
the premium photography-focused presentation.

### Clean Contemporary

Typography should feel:

- Clean
- Modern
- Simple
- Approachable

A primarily sans-serif system may be used to maintain the straightforward
character of this direction.

---

## Typography Rules

- Maintain a clear distinction between headings and body text.
- Avoid using too many font families.
- Avoid excessive use of bold text.
- Maintain readable line lengths for paragraphs.
- Use typography to establish hierarchy rather than relying entirely on
  color or size.
- Typography should remain readable across all supported screen sizes.
- Decorative typography should never reduce readability.

---
I haven't picked specific fonts yet.


We need to choose them based on the three directions, and we should actually look at combinations rather than arbitrarily saying "use Poppins" or "use Playfair Display."

For example, we might eventually end up with something like:

ROYAL BRAND
Heading:     Sans-serif
Body:        Sans-serif

LUXURY
Heading:     Serif
Body:        Sans-serif

CLEAN
Heading:     Sans-serif
Body:        Sans-serif

But that's a design decision we'll make, not something we should assume.

Also, the clamp() values above are a good example of something we'll learn as we implement it. You don't need to know clamp() yet either, we'll get to it when we're actually writing the CSS/Tailwind.

---
