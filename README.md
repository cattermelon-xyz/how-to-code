# how-to-code

This project show how we clone code and setup VSCode to work

## monorepo-test

a test project to see how monorepo should work

This is the folder structure:

```md
.vscode/
| default.code-workspace
| local.code-workspace
docs/
supabase/
components/
| DirectedGraph/ (ReactJS lib)
| RichTextEditor/ (ReactJS lib)
| Icon/ (ReactJS lib)
| Banner/ (ReactJS lib)
utils/ (TypeScript lib)
| src/
| | getImageUrl
| | idString (createIdString, extractIdFromIdString)
| | subtractArray
| | supabaseClient
| | dal (getData, setData)
| index.ts
apps/
| syncvote/
| | webapp/ (ReactJS app)
| | service/ (Golang project)
| admin
| | webapp/ (ReactJS app)
votemachines/
| singlevote/
| | weblib/ (ReactJS lib)
| | web2/ (Golang lib)
| polling/
| | weblib/ (ReactJS lib)
| | web2/ (Golang lib)
| veto/
| | weblib/ (ReactJS lib)
| | web2/ (Golang lib)
| upvote/
| | weblib/ (ReactJS lib)
| | web2/ (Golang lib)
```

### Resources

- [Setting up multiple root workspace](https://medium.com/rewrite-tech/visual-studio-code-tips-for-monorepo-development-with-multi-root-workspaces-and-extension-6b69420ecd12)

- Instruction to setup [Yarn workspace](https://classic.yarnpkg.com/lang/en/docs/workspaces/)

- Write a typescript library: [link](https://www.tsmean.com/articles/how-to-write-a-typescript-library/)

- Write a component library: [link](https://www.airplane.dev/blog/how-to-build-a-react-component-library)

### Unresolve questions

- In the near future we would have to implement Storybook for better component development. This [link](https://github.com/storybookjs/storybook/discussions/22521) would be helpful.
