"use client";

import React from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: (string | { displayName: string; targetName: string })[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const sanitizeId = (str: string): string => {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const scrollTo = (id: string, offset: number) => {
    const sanitizedId = sanitizeId(id);
    const element = document.getElementById(sanitizedId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      m={{ hide: true }}
    >
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => (
          <Column key={sectionIndex} gap="12">
            <Flex
              cursor="interactive"
              className={styles.hover}
              gap="8"
              vertical="center"
              onClick={() => scrollTo(section.title, 80)}
            >
              <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
              <Text>{section.title}</Text>
            </Flex>
            {about.tableOfContent.subItems && (
              <>
                {section.items.map((item, itemIndex) => {
                  const displayName = typeof item === "string" ? item : item.displayName;
                  const targetName = typeof item === "string" ? item : item.targetName;
                  return (
                    <Flex
                      l={{ hide: true }}
                      key={itemIndex}
                      style={{ cursor: "pointer" }}
                      className={styles.hover}
                      gap="12"
                      paddingLeft="24"
                      vertical="center"
                      onClick={() => scrollTo(targetName, 80)}
                    >
                      <Flex height="1" minWidth="8" background="neutral-strong"></Flex>
                      <Text>{displayName}</Text>
                    </Flex>
                  );
                })}
              </>
            )}
          </Column>
        ))}
    </Column>
  );
};

export default TableOfContents;
