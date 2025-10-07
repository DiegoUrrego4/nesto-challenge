import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const FixedRate: Story = {
  args: {
    id: 1,
    title: 'Best fixed',
    type: 'VALUE_FLEX',
    productName: 'MCAP Value-Flex Fixed Special',
    rate: '2.04%',
  },
};

export const VariableRate: Story = {
  args: {
    id: 2,
    title: 'Best variable',
    type: 'STANDARD',
    productName: 'nesto Standard Variable',
    rate: '1.25%',
  },
};

export const LongProductName: Story = {
  args: {
    ...VariableRate.args,
    id: 3,
    productName: 'This is a very long product name to test how the text wraps inside the card component',
  },
};