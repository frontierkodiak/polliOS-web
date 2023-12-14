import { forwardRef } from 'react';
import {
  MultiSelect,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
  rem,
  Flex,
  Badge,
} from '@mantine/core';
import {
    ActionIconRocket,
    // import other icons as needed
  } from '../Assets/ActionIcons/ActionIcons';

const projectsData = [
  { label: 'Demo', value: 'IconRocket' },
];

const projectIcons = {
    'IconRocket': ActionIconRocket,
    // add other icons as needed
  };

type ProjectIconKey = 'IconRocket'; // add other keys as needed

function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: ProjectIconKey }) {
    const ProjectIcon = projectIcons[value];
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }`,
          paddingLeft: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        })}
      >
        <Box mr={10}>
          <ProjectIcon color="orange" size="md" />
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const Item = forwardRef<HTMLDivElement, SelectItemProps & { value: ProjectIconKey }>(({ label, value, ...others }, ref) => {
    const ProjectIcon = projectIcons[value];
  return (
    <div ref={ref} {...others}>
      <Flex align="center">
        <Box mr={10}>
            <ProjectIcon color="orange" size="md" />
        </Box>
        <div>{label}</div>
      </Flex>
    </div>
  );
});

export function MultiSelectProject() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Badge size="xs" style={{ marginRight: '10px', fontWeight: 500 }}>Project:</Badge>
        <MultiSelect
          data={projectsData}
          limit={20}
          valueComponent={Value}
          itemComponent={Item}
          searchable
          defaultValue={['IconRocket']}
          placeholder="Pick projects"
          transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
        />
      </div>
    );
  }