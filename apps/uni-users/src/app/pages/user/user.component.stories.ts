import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { uniLoadingInterceptor } from '@ng-nx/common-data';

import { AppUserComponent } from './user.component';

const meta: Meta<AppUserComponent> = {
  component: AppUserComponent,
  title: 'AppUserComponent',
  decorators: [
    moduleMetadata({
      imports: [provideHttpClient(withFetch(), withInterceptors([uniLoadingInterceptor]))],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user works!/gi)).toBeTruthy();
  },
};
