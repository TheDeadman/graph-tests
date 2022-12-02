import React from 'react';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    ArgsTable,
    Stories,
    PRIMARY_STORY,
  } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';

// import BarGraphMDX from './BarGraph.mdx';
const FakeComponent = () => <div>Fake Component</div>;
const meta: Meta = {
    title: 'Components/Pie Chart',
    component: <FakeComponent />,
    parameters: {
        controls: { expanded: true },
        docs: {
            page: () => (
                <>
                  <Title />
                  <Subtitle />
                  <Description />
                  <Primary />
                  <ArgsTable story={PRIMARY_STORY} />
                  <Stories />
                </>
              ),
        }
    },
};

export default meta;

const Template: Story = args => <FakeComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
