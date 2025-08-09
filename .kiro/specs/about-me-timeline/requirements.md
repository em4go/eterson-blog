# Requirements Document

## Introduction

This feature adds a visually appealing "About Me" timeline section to the homepage, positioned below the hero section. The timeline will showcase key professional milestones in a chronological format with a modern dark theme design, including highlighted text elements and a personal photo.

## Requirements

### Requirement 1

**User Story:** As a visitor to the blog, I want to see an "About Me" timeline section below the hero, so that I can quickly understand the author's professional journey and background.

#### Acceptance Criteria

1. WHEN a user visits the homepage THEN the system SHALL display an "About Me" section immediately below the hero section
2. WHEN the About Me section loads THEN the system SHALL display a dark background (#1a1a1a or similar) with proper contrast
3. WHEN the About Me section renders THEN the system SHALL show the title "ABOUT ME" in large, prominent typography with a cyan/teal color (#7dd3fc or similar)

### Requirement 2

**User Story:** As a visitor, I want to see a chronological timeline of professional milestones, so that I can understand the author's career progression and achievements.

#### Acceptance Criteria

1. WHEN the timeline displays THEN the system SHALL show entries for years 2020, 2022, 2023, and 2025 in chronological order
2. WHEN each timeline entry renders THEN the system SHALL display the year prominently with a star/asterisk marker
3. WHEN timeline content displays THEN the system SHALL highlight key terms like "self-taught", "Polytechnic University of Valencia", "hands-on AI community", and "Data Scientist intern" with distinct colors
4. WHEN the timeline renders THEN the system SHALL include a vertical line connecting the timeline entries

### Requirement 3

**User Story:** As a visitor, I want to see a personal photo alongside the timeline, so that I can connect a face with the professional story.

#### Acceptance Criteria

1. WHEN the About Me section loads THEN the system SHALL display a personal photo on the right side of the timeline
2. WHEN the photo displays THEN the system SHALL show it with proper styling including a border or frame effect
3. WHEN viewed on desktop THEN the system SHALL position the photo to the right of the timeline content
4. WHEN viewed on mobile THEN the system SHALL stack the photo appropriately for smaller screens

### Requirement 4

**User Story:** As a visitor on any device, I want the About Me section to be responsive, so that I can read the content clearly regardless of my screen size.

#### Acceptance Criteria

1. WHEN viewed on desktop THEN the system SHALL display the timeline and photo in a two-column layout
2. WHEN viewed on tablet THEN the system SHALL maintain readability with appropriate spacing and font sizes
3. WHEN viewed on mobile THEN the system SHALL stack elements vertically and adjust typography for smaller screens
4. WHEN the section renders on any device THEN the system SHALL maintain proper spacing and visual hierarchy