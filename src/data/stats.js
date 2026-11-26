// Numbers shown on the site, computed from the data so they can't drift apart
import { projects } from './projects';
import { visibleSkills } from './skills';

export const projectCount = projects.length;
export const sectorCount = new Set(projects.map((p) => p.sector).filter(Boolean)).size;
export const toolCount = visibleSkills.length;
