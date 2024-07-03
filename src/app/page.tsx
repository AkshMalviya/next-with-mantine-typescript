import { Code, Container, List, ListItem, Text } from "@mantine/core";
import Link from "next/link";

export default function Home() {
    return (
        <Container>
            <Text size="lg">
                This is a Nextjs template with mantine 7.11.1 css library.
            </Text>
            <Text size="lg">It has following features....</Text>
            <List type="ordered" size="lg" withPadding>
                <ListItem>
                    It is preinstall and configured with{" "}
                    <Link href={"https://mantine.dev/"}>mantine</Link>.
                </ListItem>
                <ListItem>
                    Dependencies are mantine core, mantine hooks and mantine
                    forms
                </ListItem>
                <ListItem>
                    It has configured navbar and if you wish to change title or
                    link then you can visit
                    <Text size="lg">
                        <Code>\src\constants\index.ts</Code>;
                    </Text>
                </ListItem>
                <ListItem>
                    With loader and custom animated not-found page
                </ListItem>
            </List>
        </Container>
    );
}
