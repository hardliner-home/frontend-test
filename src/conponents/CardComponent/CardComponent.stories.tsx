import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardComponent from "./CardComponent"
import { imageSrc, fallbackSrc } from "../../App"

export default {
  title: 'Example/CardComponent',
  component: CardComponent,
  argTypes: {
    defaultChecked: {
      type: 'boolean',
      description: 'Initial state',
    },
    label: {
      type: 'string',
      description: 'Name of option',
    },
    imageSrc: {
      type: 'string',
      description: 'Image URL',
    },
    fallbackSrc: {
      type: 'string',
      description: 'Fallback image URL',
    },
    onChange: {
      type: 'function',
      description: 'Callback when checkbox changed',
    },
  },
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent
    {...args}
    onChange={(...params) => {
      args.onChange(...params)
    }}
  />
)

export const Default = Template.bind({});
Default.args = {
  defaultChecked: false,
  onChange: () => {},
  imageSrc,
  fallbackSrc,
  label: 'Option Name'
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
  onChange: () => {},
  imageSrc,
  fallbackSrc,
  label: 'Option Name'
};

export const WithFallbackSrc = Template.bind({});
WithFallbackSrc.args = {
  defaultChecked: false,
  onChange: () => {},
  imageSrc: '',
  fallbackSrc,
  label: 'Option Name'
};

