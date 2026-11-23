import { navigate } from './navigation';

// A real <a href> (crawlable, opens in a new tab with Cmd/Ctrl-click) that navigates in-app on a plain click
const Link = ({ to, onClick, ...props }) => (
  <a
    href={to}
    onClick={(e) => {
      onClick?.(e);
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      navigate(to);
    }}
    {...props}
  />
);

export default Link;
