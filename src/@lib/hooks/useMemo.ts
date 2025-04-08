import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  _deps: DependencyList,
  _equals = shallowEquals,
): T {
  const valueRef = useRef<T | null>(null);
  const dependencyRef = useRef<DependencyList | null>(null);

  if (valueRef.current === null || !_equals(dependencyRef.current, _deps)) {
    valueRef.current = factory();
    dependencyRef.current = _deps;
  }

  return valueRef.current;
}
