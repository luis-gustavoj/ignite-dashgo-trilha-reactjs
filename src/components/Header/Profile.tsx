import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luis Silva</Text>
          <Text color="gray.300" fontSize="small">
            luisg.juliao@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Luis Silva"
        src="https://github.com/luis-gustavoj.png"
      />
    </Flex>
  );
}
