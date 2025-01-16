import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { uniLoadingInterceptor } from '@ng-nx/common-data';

import { UserListComponent } from './user-list.component';

const meta: Meta<UserListComponent> = {
  component: UserListComponent,
  title: 'UserListComponent',
  decorators: [
    moduleMetadata({
      imports: [
        provideHttpClient(withFetch(), withInterceptors([uniLoadingInterceptor])),
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: { appearance: 'outline' }
        },
      ],
      providers: [HttpClient],
    }),
  ],
};
export default meta;
type Story = StoryObj<UserListComponent>;

export const Primary: Story = {
  args: {
    url: 'https://dummyjson.com/users/search',
  },
};

export const Heading: Story = {
  args: {
    url: 'https://dummyjson.com/users/search',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-list works!/gi)).toBeTruthy();
  },
};
