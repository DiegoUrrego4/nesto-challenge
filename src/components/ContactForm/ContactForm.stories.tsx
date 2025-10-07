import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactForm } from './ContactForm';
import type { Application } from '../../types';

const mockApplication: Application = {
  id: 'storybook-test-id-123',
  type: 'NEW',
  createdAt: new Date().toISOString(),
  productId: 12345,
  applicants: [
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  ],
  token: '',
};

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const EmptyForm: Story = {
  args: {
    application: mockApplication,
  },
};

export const FilledForm: Story = {
  args: {
    application: {
      ...mockApplication,
      applicants: [
        {
          firstName: 'Jennifer',
          lastName: 'Salcedo',
          email: 'jenn@mail.com',
          phone: '5551234567',
        },
      ],
    },
  },
};