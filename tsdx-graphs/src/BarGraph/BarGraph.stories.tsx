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
import { BarGraph, BarGraphProps } from './BarGraph';

// import BarGraphMDX from './BarGraph.mdx';

const meta: Meta = {
    title: 'Components/BarGraph',
    component: BarGraph,
    argTypes: {
        entries: {
            defaultValue: [{ label: "Entry One", value: 1 }, { label: "Entry Two", value: 4 }]
        },
        xLabel: {
            defaultValue: "X AXIS"
        },
        yLabel: {
            defaultValue: "Y AXIS"
        }
    },
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

const Template: Story<BarGraphProps> = args => <BarGraph {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

export const ExplicitMaxVal = Template.bind({});

ExplicitMaxVal.args = {
    maxValue: 9,
    minValue: 1,
    entries: [{label: "Entry One", value: 3}, {label: "Entry Two", value: 7}]
}