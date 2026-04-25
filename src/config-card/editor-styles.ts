import { css } from 'lit';

// Visual editor is a thin placeholder — all configuration lives in the card's
// own tabs. This stylesheet only carries the root container; the empty-state
// styling is provided by sharedStyles.
export const editorStyles = css`
  .editor-root {
    padding: 16px;
  }
`;
