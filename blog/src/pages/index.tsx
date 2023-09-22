import React, { type FC } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Button } from "../ui/button";

const IndexPage: FC<PageProps> = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={1}
            importance={3}
          >
            Click me
          </Button>
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={1}
          >
            Click me
          </Button>
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={2}
          >
            Click me
          </Button>
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={3}
          >
            Click me
          </Button>
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={3}
            icon={
              <path d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z" />
            }
          >
            Click me
          </Button>
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={3}
            importance={2}
            icon={
              <path d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z" />
            }
          >
            Click me
          </Button>
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={3}
            rounded
            icon={
              <path d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z" />
            }
          />
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={3}
            rounded
            importance={2}
            icon={
              <path d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z" />
            }
          />
          <Button
            onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            size={3}
            reversed
            icon={
              <path d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z" />
            }
          >
            Click me
          </Button>
        </div>
      )}
    </ThemeToggler>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
