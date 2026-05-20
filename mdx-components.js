/**
 * Global MDX component map — Nextra picks this up so that Mintlify-style tags
 * (<Card>, <Steps>, <Tabs>, <Accordion>, <Note>, etc.) work without per-file imports.
 */

import { Card, CardGroup } from './components/mdx/Card';
import { Steps, Step } from './components/mdx/Steps';
import { Tabs, Tab } from './components/mdx/Tabs';
import { Accordion, AccordionGroup } from './components/mdx/Accordion';
import { Note, Info, Tip, Warning, Check } from './components/mdx/Callout';
import { Frame, Snippet, Icon } from './components/mdx/Frame';

export function useMDXComponents(components) {
  return {
    ...components,
    Card,
    CardGroup,
    Steps,
    Step,
    Tabs,
    Tab,
    Accordion,
    AccordionGroup,
    Note,
    Info,
    Tip,
    Warning,
    Check,
    Frame,
    Snippet,
    Icon,
  };
}
