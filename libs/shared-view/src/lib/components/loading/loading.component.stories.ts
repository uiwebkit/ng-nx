import { Meta, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { SharedLoadingComponent } from './loading.component';

const meta: Meta<SharedLoadingComponent> = {
  component: SharedLoadingComponent,
  title: 'SharedLoadingComponent',
};
export default meta;
type Story = StoryObj<SharedLoadingComponent>;

export const Primary: Story = {
  args: {
    linear: false,
    loading: true,
  },
};

export const Heading: Story = {
  args: {
    linear: true,
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/loading works!/gi)).toBeTruthy();
  },
};
