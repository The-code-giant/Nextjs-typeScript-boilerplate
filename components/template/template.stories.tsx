import { ComponentMeta, ComponentStory } from '@storybook/react';
import TemplateComponent, { IBaseTemplate } from './template';
import { mockTemplate } from './template.mocks';

export default {
  title: 'Test/templateComponent',
  component: TemplateComponent,
  argTypes: {},
} as ComponentMeta<typeof TemplateComponent>;

const Template: ComponentStory<typeof TemplateComponent> = (args) => (
  <TemplateComponent {...args} />
);

export const base = Template.bind({});
base.args = {
  ...mockTemplate.base,
} as IBaseTemplate;
