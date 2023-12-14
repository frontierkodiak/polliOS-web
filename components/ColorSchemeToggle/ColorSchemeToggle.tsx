import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle({ py = "0", px = "0", mt = "l", mb = "0", ml = "0", mr = "0" }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="right" py={py} px={px} mt={mt} mb={mb} ml={ml} mr={mr}>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="sm"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun size={16} stroke={1.5} />
        ) : (
          <IconMoonStars size={16} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
