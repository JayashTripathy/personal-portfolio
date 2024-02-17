import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];
export function useOutsideClick<T extends HTMLElement = any>(
  handler: () => void, // function to call on outside click
  events?: string[] | null
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: any) => {
      const { target } = event ?? {};
      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach((fn) =>
      document.addEventListener(fn, listener)
    );
  }, [ref, events]);

  return ref;
}
