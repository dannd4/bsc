import { ThemeProvider } from "@emotion/react";
import { Button, Card, Container, FlexContainer, Title, Input } from "./styles";
import { theme } from "./theme";

export default function CSSInJs() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>CSS-in-JS Demo</Title>

        <Card>
          <h3>Button Examples</h3>
          <FlexContainer>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button>Default</Button>
          </FlexContainer>
        </Card>

        <Card>
          <h3>Form Elements</h3>
          <Input placeholder="Enter your name" />
          <Input variant="error" placeholder="Error state" />
        </Card>
      </Container>
    </ThemeProvider>
  );
}
