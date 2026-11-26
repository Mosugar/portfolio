// Tools shown in the Skills section, by group. Also counted by Sugar's tour, so the number stays true.
import Images from '../assets/images/index';

// Display order of the groups; their titles live in translations (skills.groups)
export const skillGroupIds = ['frontend', 'mobile', 'backend', 'data', 'tools'];

const skills = [
  { name: 'React', icon: Images.react, group: 'frontend' },
  { name: 'Next.js', icon: Images.next, group: 'frontend' },
  { name: 'TypeScript', icon: Images.typescript, group: 'frontend' },
  { name: 'JavaScript', icon: Images.js, group: 'frontend' },
  { name: 'Tailwind CSS', icon: Images.tailwind, group: 'frontend' },

  { name: 'React Native', icon: Images.react_native, group: 'mobile' },
  { name: 'Expo', icon: Images.expo, group: 'mobile' },

  { name: 'Laravel', icon: Images.laravel, group: 'backend' },
  { name: 'PHP', icon: Images.php, group: 'backend' },
  { name: 'Java', icon: Images.java, group: 'backend' },
  { name: 'Spring Boot', icon: Images.spring_boot, group: 'backend' },
  { name: 'REST API', icon: Images.api, group: 'backend' },

  { name: 'MySQL', icon: Images.mysql, group: 'data' },
  { name: 'PostgreSQL', icon: Images.postgresql, group: 'data' },

  { name: 'Git', icon: Images.git, group: 'tools' },
  { name: 'Docker', icon: Images.docker, group: 'tools' },
  { name: 'Figma', icon: Images.figma, group: 'tools' },
  { name: 'Vite', icon: Images.vite, group: 'tools' },

  // Outils masqués pour garder un profil spécialisé — à réactiver si besoin (retirer `hidden: true`)
  { name: 'Sass', icon: Images.scss, group: 'frontend', hidden: true },
  { name: 'Styled-components', icon: Images.styled_components, group: 'frontend', hidden: true },
  { name: 'Bootstrap', icon: Images.bootstrap, group: 'frontend', hidden: true },
  { name: 'GSAP', icon: Images.gsap, group: 'frontend', hidden: true },
  { name: 'Framer', icon: Images.framer, group: 'tools', hidden: true },
  { name: 'WordPress', icon: Images.wordpress, group: 'backend', hidden: true },
  { name: 'Python', icon: Images.python, group: 'backend', hidden: true },
  { name: 'Django', icon: Images.django, group: 'backend', hidden: true },
  { name: 'A11Y', icon: Images.a11y, group: 'tools', hidden: true },
  { name: 'Lighthouse', icon: Images.optimization, group: 'tools', hidden: true },
  { name: 'Postman', icon: Images.postman, group: 'tools', hidden: true },
  { name: 'Ubuntu', icon: Images.ubuntu, group: 'tools', hidden: true },
  { name: 'VirtualBox', icon: Images.virtualbox, group: 'tools', hidden: true },
  { name: 'VagrantUp', icon: Images.vagrantup, group: 'tools', hidden: true },
];

export const visibleSkills = skills.filter((s) => !s.hidden);

export const skillGroups = skillGroupIds.map((id) => ({
  id,
  skills: visibleSkills.filter((s) => s.group === id),
}));
