import type { Meta, StoryObj } from '@storybook/angular';
import { SharedRootComponent } from './root.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SharedRootComponent> = {
  component: SharedRootComponent,
  title: 'SharedRootComponent',
};
export default meta;
type Story = StoryObj<SharedRootComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    expect(canvas.getByText(/root works!/gi)).toBeTruthy();
  },
};
