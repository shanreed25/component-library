# React Component Library




## Props Usage
> The data only flows one way, from App down into the components, and a component never changes its own props
- `App.tsx` is the parent
- `App.tsx` renders the `AlertBox`, `UserProfileCard`, and `ProductDisplay` components
- `App.tsx` passes each component data through props
- Each component uses those props to decide what to shows on the page, mainly through conditional rendering
- Shape of the props is defined in `types/index.ts`


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
- [ ] Add comments to describe component props.
- [ ] Create example usage documentation.
- [ ] Document any special prop handling or requirements.