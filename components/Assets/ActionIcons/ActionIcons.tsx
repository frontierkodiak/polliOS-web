import { ActionIcon, rem } from '@mantine/core';
import { 
  IconCheck,
  IconCircleCheck,
  IconCircleCheckFilled,
  IconWorldCheck,
  IconShieldCheck,
  IconChevronsRight,
  IconCameraCheck,
  IconZzz,
  IconCameraExclamation,
  IconCameraQuestion,
  IconTrendingDown2,
  IconTrendingDown3,
  IconTrendingDown,
  IconTrendingUp2, 
  IconTrendingUp3,
  IconTrendingUp,
  IconWaveSawTool,
  IconWaveSine,
  IconRipple,
  IconArrowWaveRightDown,
  IconArrowWaveRightUp,
  IconAccessPoint,
  IconClipboardList,
  IconRocket,
} from '@tabler/icons-react';

type SizeKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ActionIconProps {
  color: string;
  size?: SizeKey;
  radius?: string; 
  variant?: string;
}

const sizeMapping: {[key in SizeKey]: string} = {
  xs: rem(10),
  sm: rem(12),
  md: rem(14),
  lg: rem(16),
  xl: rem(18),
};

const ActionIconCheck: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent' 
  }) => (
    <ActionIcon 
      size={size} 
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconCheck size={sizeMapping[size]} />
    </ActionIcon>
  );

const ActionIconCircleCheck: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent' 
  }) => (
    <ActionIcon 
      size={size} 
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconCircleCheck size={sizeMapping[size]} />
    </ActionIcon>
  );

const ActionIconCircleCheckFilled: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent' 
  }) => (
    <ActionIcon 
      size={size} 
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconCircleCheckFilled size={sizeMapping[size]} />
    </ActionIcon>
  );

const ActionIconWorldCheck: React.FC<ActionIconProps> = ({
  color,
  size = 'xs',
  radius = 'xl',
  variant = 'transparent' 
}) => (
  <ActionIcon 
    size={size} 
    color={color}
    radius={radius}
    variant={variant}
  >
    <IconWorldCheck size={sizeMapping[size]} />
  </ActionIcon>
);

const ActionIconChevronsRight: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent' 
  }) => (
    <ActionIcon 
      size={size} 
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconChevronsRight size={sizeMapping[size]} />
    </ActionIcon>
  );

  const ActionIconCameraCheck: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent' 
  }) => (
    <ActionIcon 
      size={size} 
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconCameraCheck size={sizeMapping[size]} />
    </ActionIcon>
  );

const ActionIconShieldCheck: React.FC<ActionIconProps> = ({
  color,
  size = 'xs',
  radius = 'xl',
  variant = 'transparent'
}) => (
  <ActionIcon
    size={size}
    color={color}
    radius={radius} 
    variant={variant}
  >
    <IconShieldCheck size={sizeMapping[size]} />
  </ActionIcon>
);

const ActionIconCameraExclamation: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'  
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconCameraExclamation size={sizeMapping[size]} />
    </ActionIcon>
  );

  const ActionIconCameraQuestion: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'  
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconCameraQuestion size={sizeMapping[size]} />
    </ActionIcon>
  );

  const ActionIconZzz: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'  
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconZzz size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconTrendingDown2: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'  
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconTrendingDown2 size={sizeMapping[size]} />
    </ActionIcon>  
  );
  
  const ActionIconTrendingDown3: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'   
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconTrendingDown3 size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconTrendingDown: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'   
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconTrendingDown size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconTrendingUp2: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'    
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconTrendingUp2 size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconTrendingUp3: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'    
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconTrendingUp3 size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconTrendingUp: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl', 
    variant = 'transparent'   
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconTrendingUp size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconWaveSawTool: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent' 
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconWaveSawTool size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconWaveSine: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'  
  }) => (
    <ActionIcon
      size={size} 
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconWaveSine size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconRipple: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconRipple size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconArrowWaveRightDown: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'  
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconArrowWaveRightDown size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  const ActionIconArrowWaveRightUp: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius}
      variant={variant}
    >
      <IconArrowWaveRightUp size={sizeMapping[size]} />
    </ActionIcon>  
  );
  
  const ActionIconAccessPoint: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius} 
      variant={variant}
    >
      <IconAccessPoint size={sizeMapping[size]} />
    </ActionIcon>
  );

  const ActionIconClipboardList: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius} 
      variant={variant}
    >
      <IconClipboardList size={sizeMapping[size]} />
    </ActionIcon>
  );

  const ActionIconRocket: React.FC<ActionIconProps> = ({
    color,
    size = 'xs',
    radius = 'xl',
    variant = 'transparent'
  }) => (
    <ActionIcon
      size={size}
      color={color}
      radius={radius} 
      variant={variant}
    >
      <IconRocket size={sizeMapping[size]} />
    </ActionIcon>
  );
  
  export {
    ActionIconCheck,
    ActionIconCircleCheck,
    ActionIconCircleCheckFilled,
    ActionIconWorldCheck,
    ActionIconShieldCheck,
    ActionIconChevronsRight,
    ActionIconCameraCheck,
    ActionIconCameraExclamation,
    ActionIconTrendingDown2,
    ActionIconTrendingDown3,
    ActionIconTrendingDown,
    ActionIconTrendingUp2,
    ActionIconTrendingUp3,
    ActionIconTrendingUp,
    ActionIconWaveSawTool,
    ActionIconWaveSine,
    ActionIconRipple,
    ActionIconArrowWaveRightDown,
    ActionIconArrowWaveRightUp,
    ActionIconAccessPoint,
    ActionIconCameraQuestion,
    ActionIconZzz,
    ActionIconClipboardList,
    ActionIconRocket,
  };