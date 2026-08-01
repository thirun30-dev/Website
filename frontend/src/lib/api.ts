export function getApiUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;

  // If NEXT_PUBLIC_API_URL is set and points to an external non-localhost domain, use it.
  if (envUrl && !envUrl.includes("localhost") && !envUrl.includes("127.0.0.1")) {
    return envUrl;
  }

  // When running in the browser, dynamically match the hostname (IP address or domain) of the current page.
  if (typeof window !== "undefined") {
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    return `${protocol}//${hostname}:5000`;
  }

  return envUrl || "http://localhost:5000";
}
