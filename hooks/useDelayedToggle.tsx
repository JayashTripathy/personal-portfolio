import React from "react";
import useDelayedRender from "use-delayed-render";

function useDelayedToggle() {
  const [isOpen, setIsOpen] = React.useState(false);

  const { mounted: isMounted, rendered: isRendered } = useDelayedRender(
    isOpen,
    {
      enterDelay: 20,
      exitDelay: 1000,
    }
  );

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return { toggleOpen, isMounted, isRendered, isOpen };
}

export default useDelayedToggle;
