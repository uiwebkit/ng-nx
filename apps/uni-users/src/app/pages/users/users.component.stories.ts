import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { uniLoadingInterceptor } from '@ng-nx/common-data';

import { AppUsersComponent } from './users.component';

const meta: Meta<AppUsersComponent> = {
  component: AppUsersComponent,
  title: 'AppUsersComponent',
  decorators: [
    moduleMetadata({
      imports: [
        provideHttpClient(withFetch(), withInterceptors([uniLoadingInterceptor])),
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
      ],
      providers: [HttpClient],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppUsersComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/users works!/gi)).toBeTruthy();
  },
};
