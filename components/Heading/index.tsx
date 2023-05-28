import { createElement } from 'react';
import { ibm_plex_sans } from 'app/fonts';

interface Props {
  level: string;
  className?: string;
  headingText: string;
}

export const Heading = ({ level, className, headingText }: Props) => {
  const headingStyles = {
    h1: '',
    h2: 'text-2xl',
    h3: 'text-xl',
    h4: 'text-lg',
  };

  return createElement(
    level,
    {
      className: `${
        ibm_plex_sans.variable
      } font-ibm tracking-wide uppercase text-floral-white mb-8 ${
        headingStyles[level as keyof typeof headingStyles]
      } ${className}`,
    },
    headingText
  );
};
