# React Component Library




## Props Usage
> The data only flows one way, from App down into the components, and a component never changes its own props
- `App.tsx` is the parent
- `App.tsx` renders the `AlertBox`, `UserProfileCard`, and `ProductDisplay` components
- `App.tsx` passes each component data through props
- Each component uses those props to decide what to shows on the page, mainly through conditional rendering
- Shape of the props is defined in `types/index.ts`

## Testing With The Data
### users.ts
> This file exports `users`, an array of 8 `User` objects, which are defined in the `User` Interface. Below are some values you can change to check specific branch of the component logic

|Change|What you should see|
|---|---|
|Remove `avatarUrl` from u001|A letter avatar with "A"|
|`name: "ava martinez"` (lowercase)|The letter avatar shows a lowercase "a". You could fix this with `.toUpperCase()`|
|`name: ""`|An empty circle and a blank heading|
|`id: "u010"`|The even branch, since the last character is `0`|
|`id: "u00a"`|The **odd** branch, showing "Last Login: a hours ago". `Number("a")` is `NaN`, and `NaN % 2 === 0` is false|
|A very long `email`|Shows whether the text overflows the card|

The `"u010"` and `"u00a"` cases show that your even/odd logic only looks at the **last character** of the id. Ids like `"u012"` and `"u002"` are both treated as even, and a last login of "2 hours ago" comes from the id rather than real data.

Two users have no `avatarUrl`: **u004 Noah Williams** and **u008 James Wilson**. You can use them to check how `UserProfileCard` looks when there's no avatar.





## Activity Tasks
### Component Implementation
- [X] Implement each component according to its interface requirements.
- [X] Use proper TypeScript types and interfaces.
- [X] Implement prop validation where appropriate.
- [X] Handle optional props and children correctly.
### Component Testing
- [X] Test different prop combinations.
- [X] Verify that components render correctly with various props.
### Component Composition
- [ ] Create example usage of components working together.
- [ ] Demonstrate prop passing between components.
- [ ] Show how to handle component nesting.
### Documentation
- [X] Add comments to describe component props.
- [ ] Create example usage documentation.
- [ ] Document any special prop handling or requirements.