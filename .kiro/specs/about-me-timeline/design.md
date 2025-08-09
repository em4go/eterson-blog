# Design Document

## Overview

The About Me timeline section will be implemented as a new Astro component that integrates seamlessly with the existing homepage design. It will feature a dark theme consistent with the current teal-950 background, using a timeline layout with highlighted text elements and a personal photo positioned on the right side.

## Architecture

### Component Structure
- **AboutMeTimeline.astro**: Main component containing the timeline layout
- Integration into `src/pages/index.astro` below the existing hero grid
- Utilizes existing Tailwind CSS classes and color scheme

### Layout Integration
The component will be inserted after the current hero grid in `index.astro`, maintaining the max-width container and responsive design patterns already established.

## Components and Interfaces

### AboutMeTimeline Component

**Props Interface:**
```typescript
interface Props {
  // No props needed - content will be static
}
```

**Timeline Data Structure:**
```typescript
interface TimelineEntry {
  year: string;
  description: string;
  highlights: Array<{
    text: string;
    color: string;
  }>;
}
```

### Timeline Entries
Based on the image provided:

1. **2020**: "Started programming in Python as a **self-taught** developer."
2. **2022**: "Enrolled in BSc Data Science at **Polytechnic University of Valencia**"
3. **2023**: "Co-founded Sigma Data Club at UPV. Led development and analytics, growing a **hands-on AI community**."
4. **2025**: "Joined Easihp, a logistics startup, as a **Data Scientist intern**. Solved real-world routing and optimization problems."

## Data Models

### Color Scheme
- Background: `bg-gray-900` or `bg-slate-900` (darker than current teal-950 for contrast)
- Title: `text-cyan-300` or `text-teal-300` (matching existing cyan-100 theme)
- Year markers: `text-white` with `text-2xl` or `text-3xl`
- Timeline line: `border-cyan-300` or `border-teal-300`
- Highlighted text colors:
  - "self-taught": `text-purple-300`
  - "Polytechnic University of Valencia": `text-purple-300`
  - "hands-on AI community": `text-green-300`
  - "Data Scientist intern": `text-blue-300`

### Typography
- Title: Large heading using existing `font-space-grotesk` font family
- Timeline content: Default `font-ibm-plex-mono` for consistency
- Year markers: Bold weight with larger size

### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│                    ABOUT ME                             │
│                                                         │
│  ★ 2020  Timeline content...              ┌─────────┐   │
│    │                                      │         │   │
│    │                                      │  Photo  │   │
│  ★ 2022  Timeline content...              │         │   │
│    │                                      │         │   │
│    │                                      └─────────┘   │
│  ★ 2023  Timeline content...                            │
│    │                                                    │
│    │                                                    │
│  ★ 2025  Timeline content...                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Error Handling

### Image Loading
- Use existing error handling pattern from hero section
- Provide fallback placeholder if personal photo fails to load
- Implement proper alt text for accessibility

### Responsive Breakpoints
- Mobile (< 768px): Stack timeline and photo vertically
- Tablet (768px - 1024px): Maintain side-by-side layout with adjusted spacing
- Desktop (> 1024px): Full two-column layout as shown in design

## Testing Strategy

### Visual Testing
- Verify timeline alignment and spacing across breakpoints
- Test color contrast ratios for accessibility compliance
- Validate photo positioning and responsive behavior

### Content Testing
- Ensure all timeline entries render correctly
- Verify highlighted text styling applies properly
- Test fallback behavior for missing images

### Integration Testing
- Confirm seamless integration with existing homepage layout
- Test that section doesn't break existing responsive behavior
- Verify consistent spacing with hero section above and footer below

### Accessibility Testing
- Screen reader compatibility for timeline structure
- Keyboard navigation support
- Color contrast validation for all text elements
- Proper semantic HTML structure with appropriate headings

## Implementation Notes

### CSS Approach
- Use Tailwind utility classes for consistency with existing codebase
- Implement custom timeline connector line using border utilities
- Leverage existing responsive grid system

### Photo Integration
- Reuse existing image optimization patterns from hero section
- Maintain aspect ratio and proper sizing across devices
- Apply consistent styling with hero photo (border/frame effects)

### Performance Considerations
- Optimize personal photo for web delivery
- Use appropriate image formats and sizes
- Implement lazy loading if section is below the fold