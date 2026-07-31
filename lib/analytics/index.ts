"use client";

declare global {
    interface Window {
        gtag?: (
            command: "event",
            action: string,
            params?: Record<string, unknown>
        ) => void;
    }
}

export function trackEvent(
    action: string,
    params?: Record<string, unknown>
) {
    if (typeof window === "undefined") return;

    window.gtag?.("event", action, params);
}

export function trackToolOpen(
    category: string,
    tool: string
) {
    trackEvent("tool_open", {
        tool_category: category,
        tool_name: tool,
    });
}

export function trackToolUse(
    category: string,
    tool: string
) {
    trackEvent("tool_use", {
        tool_category: category,
        tool_name: tool,
    });
}

export function trackDownload(
    category: string,
    tool: string
) {
    trackEvent("download_result", {
        tool_category: category,
        tool_name: tool,
    });
}

export function trackCopy(
    category: string,
    tool: string
) {
    trackEvent("copy_result", {
        tool_category: category,
        tool_name: tool,
    });
}

export function trackSearch(
    keyword: string
) {
    trackEvent("search", {
        search_term: keyword,
    });
}