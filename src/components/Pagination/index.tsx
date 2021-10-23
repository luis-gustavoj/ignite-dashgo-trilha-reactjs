import { Stack, HStack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
      direction={["column", "row"]}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack mt="8" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} isCurrent />
        <PaginationItem number={3} isCurrent />
        <PaginationItem number={4} isCurrent />
        <PaginationItem number={5} isCurrent />
      </HStack>
    </Stack>
  );
}
