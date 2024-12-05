import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useWindowSize from "../../10-custom-hooks/useWindowSize";

describe("useWindowSize", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1920,
    });

    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 1080,
    });
  });

  it("should return initial window size value", () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toEqual({
      width: 1920,
      height: 1080,
    });
  });

  it("should update window size when window resize", () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });

      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 768,
      });

      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({
      width: 1024,
      height: 768,
    });
  });

  it("should cleanup event when unmount", () => {
    const { unmount } = renderHook(() => useWindowSize());

    const removeEventListenerSpyOn = vi.spyOn(window, "removeEventListener");

    unmount();

    expect(removeEventListenerSpyOn).toBeCalledWith("resize", expect.any(Function));
  });
});
