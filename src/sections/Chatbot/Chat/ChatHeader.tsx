/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Avatar, CardHeader, CloseButton, Heading, HStack, Tooltip, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { ChatbotIcon } from "../ChatbotIcon";

interface ChatHeaderProps {
  onClick: () => void;
}

/**
 * Component to render the header of the chat
 */
export const ChatHeader = ({ onClick }: ChatHeaderProps) => {
  const { t } = useTranslation();

  return (
    <CardHeader paddingX={4} paddingY={4}>
      <VStack>
        <HStack width="full">
          <Avatar icon={<ChatbotIcon />} colorScheme="gray" />
          <VStack flex={1}>
            <Heading as="h2" fontSize="md">
              {t("chatbot.header.title")}
            </Heading>
            <Heading as="h3" fontSize="sm" fontWeight="normal">
              {t("chatbot.header.subtitle")}
            </Heading>
          </VStack>

          <Tooltip label={t("chatbot.header.close")} hasArrow openDelay={300}>
            <CloseButton onClick={onClick} />
          </Tooltip>
        </HStack>
      </VStack>
    </CardHeader>
  );
};
