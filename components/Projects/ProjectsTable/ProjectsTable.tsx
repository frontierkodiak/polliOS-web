// components/Projects/ProjectsTable/ProjectsTable.tsx
import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, Badge, rem } from '@mantine/core';
import classes from './ProjectsTable.module.css';
import { ProjectDataInterface } from 'interfaces/ProjectInterface';
import { IconRocket } from '@tabler/icons-react';

const data: ProjectDataInterface[] = [
    {
      id: '1',
      projectName: 'Demo Project',
      projectAvatar: <IconRocket />,
      adminName: 'Sally McScience',
      adminAvatar: '/icons/woman_magnifying_glass_icon_trim_128.png',
      status: 'Active',
      swarms: ['Hillhouse'],
      scans: ['BullingtonWalk1'],
      targets: ['Generic'],
      startDate: new Date('7/2/2023'),
      endDate: new Date('12/1/2023'),
    },
];

export function TableSelection() {
    const [selection, setSelection] = useState(['1']);
    const toggleRow = (id: string) =>
      setSelection((current) =>
        current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
      );
    const toggleAll = () =>
      setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));
  
    const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
        <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
            <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </td>
        <td>
            <Group spacing="sm">
            {typeof item.projectAvatar === 'string' ? (
                <Avatar size={26} src={item.projectAvatar} radius={26} />
            ) : (
                <Avatar size={26} radius={26}>
                {item.projectAvatar}
                </Avatar>
            )}
            <Text size="sm" fw={500}>
                {item.projectName}
            </Text>
            </Group>
          </td>
          <td>
            <Group spacing="sm">
            {typeof item.adminAvatar === 'string' ? (
                <Avatar size={26} src={item.adminAvatar} radius={26} />
            ) : (
                <Avatar size={26} radius={26}>
                {item.adminAvatar}
                </Avatar>
            )}
            <Text size="sm" fw={500}>
                {item.adminName}
            </Text>
            </Group>
          </td>
          <td>
            <Badge color={item.status === 'Active' ? 'green' : 'gray'} variant="filled">
              {item.status}
            </Badge>
          </td>
          <td>
            {item.swarms.map((swarm) => (
              <Badge key={swarm} variant="outline">
                {swarm}
              </Badge>
            ))}
          </td>
          <td>
            {item.scans.map((scan) => (
              <Badge key={scan} variant="outline">
                {scan}
              </Badge>
            ))}
          </td>
          <td>
            {item.targets.map((target) => (
              <Badge key={target} variant="outline">
                {target}
              </Badge>
            ))}
          </td>
          <td>{item.startDate.toLocaleDateString()}</td>
          <td>{item.endDate.toLocaleDateString()}</td>
        </tr>
      );
    });
  
    return (
      <ScrollArea>
        <Table miw={800} verticalSpacing="sm">
          <thead>
            <tr>
              <th style={{ width: rem(40) }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === data.length}
                  indeterminate={selection.length > 0 && selection.length !== data.length}
                />
              </th>
              <th>Project</th>
              <th>Admin</th>
              <th>Status</th>
            <th>Swarms</th>
            <th>Scans</th>
            <th>Targets</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}