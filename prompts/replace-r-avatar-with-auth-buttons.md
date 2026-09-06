# Implementation Prompt: Replace 'R' Avatar with Sign In & Sign Up Buttons

## Goal
Replace the single 'R' avatar placeholder in the Starsnix homepage navbar with clear, accessible "Sign In" and "Sign Up" buttons when a user is signed out, while continuing to display the Clerk `<UserButton />` when the user is signed in.

## Skills Read
- `GEMINI.md`: Development rules, design aesthetics, and Next.js / Clerk guidelines.
- `clerk-nextjs-patterns`: Modern `@clerk/nextjs` (Core 2/3) patterns: `<Show when="...">`, `<SignInButton mode="modal">`, `<SignUpButton mode="modal">`, and `<UserButton />`.
- `clerk-setup`: Authentication lifecycle and styling conventions.

## Code Inspected
- `app/page.tsx` (lines 205–235): Navbar actions currently render `<Show when="signed-out"><SignInButton mode="modal"><button className="hp-nav-avatar">R</button></SignInButton></Show>` and `<Show when="signed-in"><UserButton /></Show>`.
- `app/globals.css` (lines 1590–1635): `.hp-nav-actions` layout and `.hp-nav-avatar` circular styling.

## Decisions & Assumptions
1. **Clear affordances**: Replace the ambiguous circular avatar `R` with explicit text action buttons:
   - **Sign In**: Subtle outline/ghost button with dark text and border matching the platform's neutral palette (`var(--neutral-700)`).
   - **Sign Up**: Filled primary brand button (`var(--primary-500)`) with white text and smooth hover state.
2. **Modal Experience**: Use `mode="modal"` on both `<SignInButton>` and `<SignUpButton>` so users can authenticate immediately without navigating away from their current page.
3. **Signed-in Continuity**: Keep `<Show when="signed-in"><UserButton /></Show>` intact so logged-in users have full access to profile management, avatars, and sign out.
4. **Responsive Integrity**: Ensure the buttons scale cleanly on mobile viewports.

## Files Expected to Touch
- `app/page.tsx`: Import `SignUpButton` from `@clerk/nextjs` and replace the signed-out avatar markup with "Sign In" and "Sign Up" buttons.
- `app/globals.css`: Add styles for `.hp-nav-btn-signin` and `.hp-nav-btn-signup`.

## Requirements
- When signed out:
  - The "R" circle avatar is removed.
  - "Sign In" button is visible and clickable.
  - "Sign Up" button is visible and clickable.
- When signed in:
  - Clerk's `<UserButton />` is visible with user avatar and menu.
- Bell icon button remains intact next to the auth buttons.

## Security Considerations
- Client components only use Clerk's public publishable key.
- Sensitive authentication handling and session verification remain with Clerk and server proxy.

## Acceptance Criteria
- [ ] No more 'R' letter avatar button on the homepage when unauthenticated.
- [ ] Explicit "Sign In" and "Sign Up" buttons rendered side-by-side in the navbar.
- [ ] Clicking "Sign In" opens Clerk's sign-in modal.
- [ ] Clicking "Sign Up" opens Clerk's sign-up modal.
- [ ] When authenticated, `<UserButton />` displays correctly.
- [ ] Type check passes (`npx tsc --noEmit`).
- [ ] Lint check passes (`npm run lint`).
- [ ] Production build succeeds (`npm run build`).

## Checks to Run
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

## Manual Test Steps
1. Navigate to `http://localhost:3000`.
2. Inspect the top-right navbar: verify that "Sign In" and "Sign Up" buttons are displayed in place of the "R" circle.
3. Click "Sign In": verify that the Clerk authentication modal appears. Close it.
4. Click "Sign Up": verify that the Clerk registration modal appears. Close it.
5. Log in: verify that the auth buttons are replaced by the Clerk `<UserButton />` showing your account profile.
