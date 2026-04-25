"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, gallery } from "@/resources";
import { useResponsive } from "@/hooks/useResponsive";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const responsive = useResponsive();

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const response = await fetch("/api/check-auth", { cache: "no-store" });
        if (isMounted) {
          setIsAuthenticated(response.ok);
        }
      } catch {
        if (isMounted) {
          setIsAuthenticated(false);
        }
      }
    };

    const handleAuthChange = () => {
      void checkAuth();
    };

    void checkAuth();
    window.addEventListener("auth-changed", handleAuthChange);
    window.addEventListener("focus", handleAuthChange);

    return () => {
      isMounted = false;
      window.removeEventListener("auth-changed", handleAuthChange);
      window.removeEventListener("focus", handleAuthChange);
    };
  }, [pathname]);

  return (
    <>
      <Fade {...responsive.hideOnMobile} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade {...responsive.showOnMobileOnly} fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row fillWidth horizontal="end">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <> 
                  <Row {...responsive.hideOnMobile}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      label={about.label}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row {...responsive.showOnMobileOnly}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/work"] && (
                <>
                  <Row {...responsive.hideOnMobile}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      label={work.label}
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                  <Row {...responsive.showOnMobileOnly}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/work"
                      selected={pathname.startsWith("/work")}
                    />
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row {...responsive.hideOnMobile}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      label={blog.label}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                  <Row {...responsive.showOnMobileOnly}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/blog"
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                </>
              )}
              <>
                <Row {...responsive.hideOnMobile}>
                  <ToggleButton
                  prefixIcon="document"
                  label="Resume"
                  onClick={() =>
                    window.open("/api/resume", "_blank")
                  }
                  />
                </Row>
                <Row {...responsive.showOnMobileOnly}>
                  <ToggleButton
                  prefixIcon="document"
                  onClick={() =>
                    window.open("/api/resume", "_blank")
                  }
                  />
                </Row>
              </>
              {routes["/gallery"] && !isAuthenticated && (
                <>
                  <Row {...responsive.hideOnMobile}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/gallery"
                      label="Personal"
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                  <Row {...responsive.showOnMobileOnly}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/gallery"
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                </>
              )}
              {routes["/gallery"] && isAuthenticated && (
                <>
                  <Row {...responsive.hideOnMobile}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      label={gallery.label}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                  <Row {...responsive.showOnMobileOnly}>
                    <ToggleButton
                      prefixIcon="gallery"
                      href="/gallery"
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
};
