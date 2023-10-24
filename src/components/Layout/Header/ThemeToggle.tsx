import CONFIG from "@/morethan-log.config";
import DarkModeIcon from "@/src/assets/darkModeIcon";
import LightModeIcon from "@/src/assets/lightModeIcon";
import { ThemeType } from "@/src/types";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { getTheme } from "@hooks/useThemeEffect";
import React, { useEffect, useState } from "react";

type Props = {};

const ThemeToggle: React.FC<Props> = () => {
  const [theme, setTheme] = useState<ThemeType>();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (typeof window === "object") {
      setTheme(getTheme());
    }
  }, []);

  const handleClick = () => {
    const changedTheme = getTheme() !== "dark" ? "dark" : "light";
    localStorage.setItem("theme", changedTheme);
    setTheme(changedTheme);
    changedTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  if (CONFIG.blog.theme !== "auto") return null;
  return (
    <StyledThemeButton
      className={`cursor-pointer dark:text-gray-50`}
      onClick={() => {
        setAnimate(true);
        handleClick();
      }}
    >
      <ButtonWrapper
        isActive={animate}
        onAnimationEnd={() => setAnimate(false)}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </ButtonWrapper>
    </StyledThemeButton>
  );
};

const startAnimation = keyframes`
            0% {
            transform: rotate(200deg);
            scale: 0.5;
            opacity: 0.5;
        }
            100% {
            transform: rotate(360deg);
            scale: 1;
            opacity: 1;
        }
            `;

const StyledThemeButton = styled.button`
  padding: 7px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0 solid transparent;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background: var(--grey50);
  }
`;
const ButtonWrapper = styled.div<{ isActive: boolean }>`
  animation-fill-mode: forwards;
  animation: ${({ isActive }) => isActive && startAnimation} 0.6s ease-in-out;
`;

export default ThemeToggle;
