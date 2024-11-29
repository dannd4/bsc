import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Container componet
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
`;

// Title component
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
`;

// Card component
export const Card = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: ${({ theme }) => theme.shadows.card};
  margin-bottom: ${({ theme }) => theme.spacing.large};

  h3 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  }
`;

// FlexContainer component
export const FlexContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  flex-wrap: wrap;
`;

// Button component with variants
export const Button = styled.button<{
  variant?: "primary" | "secondary" | "danger";
}>`
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            background-color: ${theme.colors.primary}dd;
          }
        `;
      case "secondary":
        return css`
          background-color: ${theme.colors.secondary};
          color: white;
          &:hover {
            background-color: ${theme.colors.secondary}dd;
          }
        `;
      case "danger":
        return css`
          background-color: ${theme.colors.danger};
          color: white;
          &:hover {
            background-color: ${theme.colors.danger}dd;
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.default};
          color: white;
          &:hover {
            background-color: ${theme.colors.default}dd;
          }
        `;
    }
  }}
`;

// Input component
export const Input = styled.input<{ variant?: "error" }>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 2px solid
    ${({ theme, variant }) =>
      variant === "error" ? theme.colors.error : theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme, variant }) =>
      variant === "error" ? theme.colors.error : theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
