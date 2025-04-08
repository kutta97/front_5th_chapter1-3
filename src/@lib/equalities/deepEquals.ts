import { isObject } from "../utils/typeCheck.ts";

export function deepEquals<T>(objA: T, objB: T): boolean {
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }

    return objA.every((_, i) => deepEquals(objA[i], objB[i]));
  }

  if (isObject(objA) && isObject(objB)) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every((key) => deepEquals(objA[key], objB[key]));
  }

  return objA === objB;
}
