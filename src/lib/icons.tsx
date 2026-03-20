import React from 'react';
import { Briefcase, Gamepad2, Server, Monitor, Code, GraduationCap, ShieldCheck, MonitorPlay, Network } from 'lucide-react';

export type IconName = 'game' | 'server' | 'monitor' | 'code' | 'graduation' | 'shield' | 'network';

export function getIcon(iconName: string, size = 24): React.ReactElement {
  switch (iconName) {
    case 'game':       return <Gamepad2 size={size} />;
    case 'server':     return <Server size={size} />;
    case 'monitor':    return <Monitor size={size} />;
    case 'code':       return <Code size={size} />;
    case 'graduation': return <GraduationCap size={size} />;
    case 'shield':     return <ShieldCheck size={size} />;
    case 'network':    return <Network size={size} />;
    case 'monitorplay':return <MonitorPlay size={size} />;
    default:           return <Briefcase size={size} />;
  }
}
